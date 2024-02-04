import { Button, Fade, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";

const BeginButton = styled(Button)`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.secondary.main};
  border-radius: 50px;

  &:hover {
    background-color: ${(props) => props.theme.palette.secondary.main};
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

const MainGrid = styled(Grid)`
  @media screen and (min-width: 600px) {
    margin: 0 30%;
  }
`;

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Fade
      in
      timeout={{ enter: 500, exit: 300 }}
      style={{ transitionDelay: `300ms`, height: "60vh" }}
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ flexGrow: 1 }}
      >
        <MainGrid item xs={12} zeroMinWidth>
          <Grid container spacing={2} textAlign="center">
            <Grid item xs={12}>
              <Typography fontWeight="bold" color="secondary" variant="h4">
                Values DigiQuiz
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Discover what matters most to you.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <BeginButton
                color="primary"
                variant="container"
                fullWidth
                size="large"
                onClick={() => navigate("/test")}
              >
                <Typography variant="button">Begin Your DigiQuiz</Typography>
              </BeginButton>
            </Grid>
          </Grid>
        </MainGrid>
      </Grid>
    </Fade>
  );
}
