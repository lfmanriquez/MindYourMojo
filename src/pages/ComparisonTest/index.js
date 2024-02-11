import styled from "@emotion/styled";
import { Button, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ValueCard from "../../components/ValueCard";
import { Clear, Undo } from "@mui/icons-material";
import { useHistoryState } from "@uidotdev/usehooks";

const ProgressBar = styled.div`
  @media screen and (min-width: 600px) {
    transform: rotate(-90deg);
  }
`;

const BorderLinearProgress = styled(LinearProgress)`
  background-color: ${(props) => props.theme.palette.primary.main};

  & .MuiLinearProgress-bar1Determinate {
    background-color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export default function ComparisonTest() {
  const { state: chosenValues } = useLocation();
  const navigate = useNavigate();
  // const [values, setValues] = useState([]);
  const [progress, setProgress] = useState(0);
  const { state, set, undo, canUndo } = useHistoryState({
    values: chosenValues,
    count: 0,
  });

  useEffect(() => {
    setProgress(state.count * 4);
    if (state.count === 25) {
      let top5Results = state.values
        .sort((a, b) => b.vote - a.vote)
        .slice(0, 5);
      navigate("/results", {
        state: top5Results,
      });
    }
  }, [state.count]);

  useEffect(() => {
    let valuesToRemove = state.values?.filter(
      (t) => t.vote >= 5 || t.loss >= 5
    );
    if (valuesToRemove?.length) {
      let newValues = state.values.filter(
        (v) => !valuesToRemove.find((r) => r.id === v.id)
      );
      set({ ...state, values: newValues });
    }
  }, [state.values]);

  const addVote = (winningVote, losingVote) => {
    let updatedVotes = state.values.map((v) => {
      if (winningVote.id === v.id) {
        return { ...v, vote: v.vote + 1 };
      }
      if (losingVote.id === v.id) {
        return { ...v, loss: v.loss + 1 };
      }
      return v;
    });
    set({ ...state, values: shuffle(updatedVotes), count: state.count + 1 });
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
    <Grid
      container
      textAlign="center"
      alignItems="center"
      sx={{ flexGrow: 1, height: "inherit", position: "fixed" }}
    >
      <Grid item xs={12} zeroMinWidth>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant
              color="secondary"
              fontWeight="bolder"
              fontSize={"4dvh"}
            >
              Select the value most important to you.
            </Typography>
          </Grid>
          <Grid item xs={12} zeroMinWidth>
            <Typography variant fontSize={"3.5dvw"}>
              The blue indicator gauge in the center is similar to a fuel gauge.
              It will continue to fill with gold until completely full of your
              top 5 values. This will take approximately 25 selections.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} zeroMinWidth>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={5} zeroMinWidth>
            <ValueCard
              value={state.values[0]}
              handleCardClick={() => addVote(state.values[0], state.values[1])}
            />
          </Grid>
          <Grid item xs={12} sm={2} zeroMinWidth>
            <ProgressBar>
              <BorderLinearProgress variant="determinate" value={progress} />
            </ProgressBar>
          </Grid>
          <Grid item xs={12} sm={5} zeroMinWidth>
            <ValueCard
              value={state.values[1]}
              handleCardClick={() => addVote(state.values[1], state.values[0])}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} zeroMinWidth>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} textAlign="end" zeroMinWidth>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<Undo />}
              onClick={undo}
              disabled={!canUndo}
            >
              Undo
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} textAlign="start" zeroMinWidth>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<Clear />}
              onClick={() => navigate("/")}
            >
              Restart Test
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
