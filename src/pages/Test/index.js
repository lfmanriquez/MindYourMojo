import { Button, Drawer, Grid, Typography } from "@mui/material";
import PersonalValueCards from "../../components/PersonalValueCards";
import { useState } from "react";
import personalValues from "../../app-data/personal-values";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const TestDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    height: var(--footer-height);
  }
`;

const HeaderGrid = styled(Grid)`
  background-color: white;
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.15) 0 4px 2px -2px;
  position: sticky;
  top: 0;
`;

const ContinueButton = styled(Button)`
  color: ${(props) => props.theme.palette.secondary.main};

  &:hover {
    background-color: ${(props) => props.theme.palette.secondary.main};
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export default function PersonalValuesTest() {
  const navigate = useNavigate();
  const values = personalValues;
  const isTestPage = true;

  const [chosenValues, setChosenValues] = useState([]);

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{ height: "calc(100% - var(--footer-height))", overflow: "auto" }}
      >
        <HeaderGrid
          item
          xs={12}
          sx={{ paddingX: "2dvw" }}
          textAlign="center"
          alignItems="center"
        >
          <Typography variant="h6" color="secondary" fontWeight="bolder">
            Identify values that matter most to you.
          </Typography>
          <Typography variant="subtitle2">
            Please select ten values from the sixty-two boxes below.
          </Typography>
        </HeaderGrid>
        <Grid item xs={12}>
          <PersonalValueCards
            values={values}
            isTestPage
            chosenValues={chosenValues}
            setChosenValues={setChosenValues}
          />
        </Grid>
      </Grid>
      <TestDrawer variant="permanent" anchor="bottom" open={isTestPage}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={{ height: "inherit", paddingX: "2%" }}
        >
          <Grid item xs={6} sm={6}>
            <Typography variant="body1" fontWeight="bolder">
              Selected Values: {chosenValues?.length}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
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
