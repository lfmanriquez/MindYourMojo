import styled from "@emotion/styled";
import {
  Button,
  ButtonGroup,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ValueCard from "../../components/ValueCard";
import { Clear, Undo } from "@mui/icons-material";

const ContainerGrid = styled(Grid)`
  @media screen and (max-width: 450px) {
    padding-top: 5%;
  }
`;

const ProgressBar = styled.div`
  @media screen and (min-width: 600px) {
    transform: rotate(90deg);
  }
`;

const ComparisonCard = styled(Grid)`
  .MuiCard-root {
    min-height: 20vh;
    min-width: 20vw;
  }
`;

const BorderLinearProgress = styled(LinearProgress)`
  background-color: ${(props) => props.theme.palette.secondary.main};

  .MuiLinearProgress-bar1 {
    background-color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export default function ComparisonTest() {
  const { state: chosenValues } = useLocation();
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (chosenValues?.length) {
      setValues(chosenValues);
    }
  }, []);

  useEffect(() => {
    setProgress(count * 4);
    if (count === 25) {
      let top5Results = values.sort((a, b) => b.vote - a.vote).slice(0, 5);
      navigate("/results", {
        state: top5Results,
      });
    }
  }, [count]);

  useEffect(() => {
    let valuesToRemove = values?.filter((t) => t.vote >= 5 || t.loss >= 5);
    if (valuesToRemove?.length) {
      let newValues = values.filter(
        (v) => !valuesToRemove.find((r) => r.id === v.id)
      );
      setValues(newValues);
    }
  }, [values]);

  const addVote = (winningVote, losingVote) => {
    let updatedVotes = values.map((v) => {
      if (winningVote.id === v.id) {
        return { ...v, vote: v.vote + 1 };
      }
      if (losingVote.id === v.id) {
        return { ...v, loss: v.loss + 1 };
      }
      return v;
    });
    setValues(shuffle(updatedVotes));
    setCount((count) => count + 1);
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <ContainerGrid container spacing={4} textAlign="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h4">
          Choose which value is more important for you.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4} alignItems="center">
          <ComparisonCard item xs={12} sm={5}>
            <ValueCard
              value={values[0]}
              handleCardClick={() => addVote(values[0], values[1])}
            />
          </ComparisonCard>
          <Grid item xs={12} sm={2}>
            <ProgressBar>
              <BorderLinearProgress variant="determinate" value={progress} />
            </ProgressBar>
          </Grid>
          <ComparisonCard item xs={12} sm={5}>
            <ValueCard
              value={values[1]}
              handleCardClick={() => addVote(values[1], values[0])}
            />
          </ComparisonCard>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <Button variant="outlined" color="primary" startIcon={<Undo />}>
              Undo
            </Button>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button variant="outlined" color="secondary" startIcon={<Clear />}>
              Restart Test
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ContainerGrid>
  );
}
