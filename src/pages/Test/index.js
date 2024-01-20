import { Button, Drawer, Grid, Typography } from "@mui/material";
import PersonalValueCards from "../../components/PersonalValueCards";
import { useState } from "react";
import personalValues from "../../app-data/personal-values";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const TestDrawer = styled(Drawer)`
  .MuiPaper-root {
    padding: 12px;
  }
`;

const ContainerGrid = styled(Grid)`
  height: 100%;
  @media screen and (max-width: 650px) {
    margin-bottom: 40%;
  }
`;

const ContinueButton = styled(Button)`
  color: ${(props) => props.theme.palette.secondary.main};
`;

export default function PersonalValuesTest() {
  const navigate = useNavigate();
  const values = personalValues;
  const isTestPage = true;
  const [chosenValues, setChosenValues] = useState([]);

  return (
    <ContainerGrid container spacing={4}>
      <Grid item xs={12} zeroMinWidth>
        <Grid container spacing={2} textAlign="center">
          <Grid item xs={12} zeroMinWidth>
            <Typography variant="h4">
              Identify values that matter most to you.
            </Typography>
          </Grid>
          <Grid item xs={12} zeroMinWidth>
            <Typography variant="body1">
              Please select ten values in boxes below.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} zeroMinWidth>
        <PersonalValueCards
          values={values}
          isTestPage
          chosenValues={chosenValues}
          setChosenValues={setChosenValues}
        />
      </Grid>
      <TestDrawer anchor="bottom" variant="persistent" open={isTestPage}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Grid item xs={12} sm={6}>
            Selected Values: {chosenValues?.length}
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContinueButton
              color="primary"
              variant="contained"
              fullWidth
              disabled={chosenValues?.length !== 10}
              onClick={() =>
                navigate("/comparison-test", { state: chosenValues })
              }
            >
              {chosenValues?.length === 10
                ? "Continue"
                : `Select ${10 - chosenValues?.length} more`}
            </ContinueButton>
          </Grid>
        </Grid>
      </TestDrawer>
    </ContainerGrid>
  );
}
