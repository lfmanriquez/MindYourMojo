import styled from "@emotion/styled";
import { Button, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ValueCard from "../../components/ValueCard";
import { Undo } from "@mui/icons-material";
import { useHistoryState } from "@uidotdev/usehooks";

const ContainerGrid = styled(Grid)`
  height: inherit;
  padding: 2%;
`;
const ProgressBar = styled.div`
  ${(props) => props.theme.breakpoints.up("sm")} {
    text-align: -webkit-center;
    height: 100%;
  }
`;

const BorderLinearProgress = styled(LinearProgress)`
  ${(props) => props.theme.breakpoints.up("sm")} {
    height: inherit;
    width: 4px;
    background-color: ${(props) => props.theme.palette.secondary.main};
  }
  background-color: ${(props) => props.theme.palette.primary.main};

  & .MuiLinearProgress-bar1Determinate {
    ${(props) => props.theme.breakpoints.up("sm")} {
      background-color: ${(props) => props.theme.palette.primary.main};
      transform: translateY(-${(props) => props.value}%) !important;
    }

    background-color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const UndoButton = styled(Button)`
  color: ${(props) => props.theme.palette.primary.main};
`;

export default function ComparisonTest() {
  const { state: chosenValues } = useLocation();
  const navigate = useNavigate();
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
    <ContainerGrid container spacing={0} textAlign="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h6" color="secondary" fontWeight="bolder">
          Select the value most important to you.
        </Typography>

        <Typography variant="subtitle2">
          The blue indicator gauge in the center is similar to a fuel gauge. It
          will continue to fill with gold until completely full of your top 5
          values. This will take approximately 25 selections.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <ValueCard
              value={state.values[0]}
              handleCardClick={() => addVote(state.values[0], state.values[1])}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <ProgressBar>
              <BorderLinearProgress variant="determinate" value={progress} />
            </ProgressBar>
          </Grid>
          <Grid item xs={12} sm={5}>
            <ValueCard
              value={state.values[1]}
              handleCardClick={() => addVote(state.values[1], state.values[0])}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <UndoButton
          fullWidth
          variant="contained"
          color="secondary"
          startIcon={<Undo />}
          onClick={undo}
          disabled={!canUndo}
        >
          Undo
        </UndoButton>
      </Grid>
    </ContainerGrid>
  );
}
