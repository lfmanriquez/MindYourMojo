import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import LandingPageLogo from "./LandingPageLogo.png";
import styled from "@emotion/styled";

const BeginButton = styled(Button)`
  background-color: black;
  color: orange;
  border-radius: 50px;

  &:hover {
    background-color: orange;
    color: black;
  }
`;

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Grid
      xs={12}
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100%", padding: "5vh" }}
    >
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">PERSONAL VALUES ASSESSMENT</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">
              KnowYourMojo allows you to discover your core values with our free
              personalized test
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <BeginButton
              fullWidth
              size="large"
              onClick={() => navigate("/test")}
            >
              Begin Your Test
            </BeginButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <img width={500} height={500} src={LandingPageLogo} alt="values" />
      </Grid>
    </Grid>
  );
}
