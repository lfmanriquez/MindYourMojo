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

const ContainerGrid = styled(Grid)`
  @media screen and (max-width: 450px) {
    padding-top: 20%;
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

export default function ComparisonTest() {
  const { state: chosenValues } = useLocation();
  const navigate = useNavigate();
  const [values, setValues] = useState([]);
  const [testResults, setTestResults] = useState([]);
  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (chosenValues?.length) {
      setValues(chosenValues);
    }
  }, []);

  useEffect(() => {
    setProgress(count * 3.3333);
    if (count === 30) {
      let top5Results = testResults
        .sort((a, b) => b.votes - a.votes)
        .slice(0, 5);
      navigate("/results", {
        state: top5Results,
      });
    }
  }, [count]);

  useEffect(() => {
    let requiredVotes = testResults?.filter((t) => t.votes >= 8);
    if (
      requiredVotes?.length &&
      values?.find((v) => requiredVotes.find((r) => r.id === v.id))
    ) {
      let newValues = values.filter(
        (v) => !requiredVotes.find((r) => r.id === v.id)
      );
      setValues(newValues);
    }
  }, [testResults]);

  const addVote = (value) => {
    let currentValue = testResults?.find((v) => v.id === value.id);
    if (currentValue) {
      currentValue = { ...currentValue, votes: currentValue.votes + 1 };
      let newTestResults = testResults?.map((t) => {
        if (t.id === currentValue.id) {
          return currentValue;
        }
        return t;
      });
      setTestResults(newTestResults);
    } else {
      setTestResults([...testResults, { id: value.id, votes: 1 }]);
    }
    setCount((count) => count + 1);
    setValues(shuffle(values));
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
            <ValueCard value={values[0]} handleCardClick={addVote} />
          </ComparisonCard>
          <Grid item xs={12} sm={2}>
            <ProgressBar>
              <LinearProgress variant="determinate" value={progress} />
            </ProgressBar>
          </Grid>
          <ComparisonCard item xs={12} sm={5}>
            <ValueCard value={values[1]} handleCardClick={addVote} />
          </ComparisonCard>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ButtonGroup>
          <Button>Undo</Button>
          <Button>Restart Test</Button>
        </ButtonGroup>
      </Grid>
    </ContainerGrid>
  );
}
