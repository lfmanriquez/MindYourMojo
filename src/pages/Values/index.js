import { Grid, Typography } from "@mui/material";
import PersonalValueCards from "../../components/PersonalValueCards";

export default function Values() {
  return (
    <Grid
      xs={12}
      container
      spacing={6}
      alignItems="center"
      justifyContent="center"
      sx={{ padding: "5vh" }}
    >
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Personal Values List</Typography>
          </Grid>
          <Grid item xs={12}>
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
      <Grid item xs={12}>
        <PersonalValueCards />
      </Grid>
    </Grid>
  );
}
