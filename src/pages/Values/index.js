import { Grid, Typography } from "@mui/material";
import PersonalValueCards from "../../components/PersonalValueCards";
import personalValues from "../../app-data/personal-values";

export default function Values() {
  const values = personalValues;
  return (
    <Grid
      container
      spacing={4}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100%", padding: "10px" }}
    >
      <Grid item xs={12} zeroMinWidth>
        <Grid container spacing={2}>
          <Grid item xs={12} zeroMinWidth>
            <Typography variant="h4">Personal Values List</Typography>
          </Grid>
          <Grid item xs={12} zeroMinWidth>
            <Typography variant="body1">
              Here is a list of all the personal values that were used in the
              assessment. It was prepared based on our research in the field of
              basic human values. Each value is followed by a few synonyms or a
              short description, which makes it easier to understand and at the
              same time leaves room for wider interpretation.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} zeroMinWidth>
        <PersonalValueCards values={values} />
      </Grid>
    </Grid>
  );
}
