import { Button, Drawer, Grid, Typography } from "@mui/material";
import PersonalValueCards from "../../components/PersonalValueCards";
import { useState } from "react";
import personalValues from "../../app-data/personal-values";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const TestDrawer = styled(Drawer)`
  .MuiPaper-root {
    height: 15%;
    padding: 1dvh;
  }
`;

const HeaderGrid = styled(Grid)`
  z-index: 9999;
  box-shadow: rgba(0, 0, 0, 0.15) 0 4px 2px -2px;
`;

const ContinueButton = styled(Button)`
  color: ${(props) => props.theme.palette.secondary.main};

  &:hover {
    background-color: ${(props) => props.theme.palette.secondary.main};
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export default function PersonalValuesTest(props) {
  const navigate = useNavigate();
  const values = personalValues;
  const isTestPage = true;
  const [chosenValues, setChosenValues] = useState([]);

  return (
    <>
      <Grid
        container
        sx={{
          flexGrow: 1,
          height: "calc(100% - 25dvh)",
          position: "fixed",
          paddingBottom: "2vh",
        }}
      >
        <HeaderGrid item xs={12} zeroMinWidth>
          <Grid container textAlign="center" sx={{ paddingX: "2dvw" }}>
            <Grid item xs={12} zeroMinWidth>
              <Typography
                variant
                color="secondary"
                fontWeight="bolder"
                fontSize={"4dvh"}
              >
                Identify values that matter most to you.
              </Typography>
            </Grid>
            <Grid item xs={12} zeroMinWidth>
              <Typography variant fontSize={"2dvh"}>
                Please select ten values from the sixty-two boxes below.
              </Typography>
            </Grid>
          </Grid>
        </HeaderGrid>
        <Grid
          item
          xs={12}
          zeroMinWidth
          sx={{ overflowY: "auto", height: "80%" }}
        >
          <PersonalValueCards
            values={values}
            isTestPage
            chosenValues={chosenValues}
            setChosenValues={setChosenValues}
          />
        </Grid>
      </Grid>
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
            <Typography variant fontWeight="bolder">
              Selected Values: {chosenValues?.length}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContinueButton
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
