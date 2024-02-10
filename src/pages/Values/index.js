import { Grid, Typography } from "@mui/material";
import PersonalValueCards from "../../components/PersonalValueCards";
import personalValues from "../../app-data/personal-values";
import styled from "@emotion/styled";

export default function Values() {
  const values = personalValues;
  return (
    <Grid
      container
      spacing={4}
      sx={{ flexGrow: 1, height: "calc(100% - 16dvh)", paddingBottom: "2vh" }}
    >
      <Grid item xs={12} zeroMinWidth sx={{ margin: "0px 5px 5px 5px" }}>
        <Grid container spacing={2} textAlign="center">
          <Grid item xs={12} zeroMinWidth>
            <Typography variant="h4" color="secondary" fontWeight="bold">
              Personal Values List
            </Typography>
          </Grid>
          <Grid item xs={12} zeroMinWidth>
            <Typography variant="body1">
              Below is a compilation of the values used in the DigiQuiz, crafted
              from our exploration into fundamental human values. Each value is
              accompanied by a brief description or synonyms to provide a simple
              understanding while giving you wiggle room for meaning.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        zeroMinWidth
        sx={{ overflowY: "auto", height: "inherit" }}
      >
        <PersonalValueCards values={values} />
      </Grid>
    </Grid>
  );
}
