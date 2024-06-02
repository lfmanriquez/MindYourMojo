import { Grid, Typography } from "@mui/material";
import PersonalValueCards from "../../components/PersonalValueCards";
import personalValues from "../../app-data/personal-values";
import styled from "@emotion/styled";

const HeaderGrid = styled(Grid)`
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.15) 0 4px 2px -2px;
`;

export default function Values() {
  const values = personalValues;
  return (
    <Grid
      container
      spacing={4}
      sx={{
        flexGrow: 1,
        height: "inherit",
      }}
    >
      <HeaderGrid item xs={12} zeroMinWidth>
        <Grid container textAlign="center">
          <Grid item xs={12} zeroMinWidth>
            <Typography
              variant
              color="secondary"
              fontWeight="bolder"
              fontSize={"4dvh"}
            >
              Personal Values List
            </Typography>
          </Grid>
          <Grid item xs={12} zeroMinWidth sx={{ margin: "0 1% 1% 1%" }}>
            <Typography variant fontSize={"2dvh"}>
              Below is a compilation of the values used in the DigiQuiz, crafted
              from our exploration into fundamental human values. Each value is
              accompanied by a brief description or synonyms to provide a simple
              understanding while giving you wiggle room for meaning.
            </Typography>
          </Grid>
        </Grid>
      </HeaderGrid>
      <Grid item xs={12} zeroMinWidth sx={{ overflowY: "auto", height: "70%" }}>
        <PersonalValueCards values={values} />
      </Grid>
    </Grid>
  );
}
