import { Grid, Typography } from "@mui/material";
import PersonalValueCards from "../../components/PersonalValueCards";
import personalValues from "../../app-data/personal-values";

export default function Values() {
  const values = personalValues;
  return (
    <Grid
      container
      spacing={4}
      sx={{
        flexGrow: 1,
        height: "inherit",
        paddingBottom: "2vh",
        position: "fixed",
      }}
    >
      <Grid item xs={12} zeroMinWidth>
        <Grid container spacing={2} textAlign="center">
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
          <Grid item xs={12} zeroMinWidth>
            <Typography variant fontSize={"3.5dvw"}>
              Below is a compilation of the values used in the DigiQuiz, crafted
              from our exploration into fundamental human values. Each value is
              accompanied by a brief description or synonyms to provide a simple
              understanding while giving you wiggle room for meaning.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} zeroMinWidth sx={{ overflowY: "auto", height: "70%" }}>
        <PersonalValueCards values={values} />
      </Grid>
    </Grid>
  );
}
