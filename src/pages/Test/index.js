import { Button, Drawer, Grid, Typography } from "@mui/material";
import PersonalValueCards from "../../components/PersonalValueCards";
import { useState } from "react";
import personalValues from "../../app-data/personal-values";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const TestDrawer = styled(Drawer)`
  .MuiPaper-root {
    height: var(--test-footer-height);
    padding: 12px;
  }
`;

const ContainerGrid = styled(Grid)`
  margin-top: 0;
  height: calc(100% - var(--test-footer-height));
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
    <>
      <ContainerGrid container spacing={4}>
        <Grid item xs={12} zeroMinWidth sx={{ margin: "0px 5px 5px 5px" }}>
          <Grid container spacing={2} textAlign="center">
            <Grid item xs={12} zeroMinWidth>
              <Typography color="secondary" variant="h4" fontWeight="bold">
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
      </ContainerGrid>
      <TestDrawer anchor="bottom" variant="persistent" open={isTestPage}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={{ height: "100%" }}
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
    </>
  );
}
