import { Grid, Typography } from "@mui/material";
import { UserCards } from "../../components/UserCards";

export const About = () => {
  const teamMembers = [
    { id: 0, initials: "MM", name: "Mick Marden", position: "Founder" },
    { id: 1, initials: "TM", name: "Tab Marden", position: "Co-Founder" },
    {
      id: 2,
      initials: "LM",
      name: "Luis Manriquez",
      position: "Software Engineer",
    },
  ];
  return (
    <>
      <Grid container spacing={1} textAlign="center" sx={{ height: "inherit" }}>
        <Grid item xs={12} sx={{ maxHeight: "20dvh" }}>
          <Typography variant="h6">
            Meet the team behind our DigiQuiz
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <UserCards teamMembers={teamMembers} />
        </Grid>
      </Grid>
    </>
  );
};
