import { Button, Fade, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import MojoCarousel from "../../components/MojoCarousel";

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
  @media only screen and (min-device-width: 390px) {
    margin: 0 5%;
  }
  @media only screen and (min-device-width: 640px) {
    margin: 0 15%;
  }

  @media only screen and (min-device-width: 768px) {
    margin: 0 20%;
  }
`;

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Fade
      in
      timeout={{ enter: 500, exit: 300 }}
      style={{ transitionDelay: `300ms`, height: "100%" }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ flexGrow: 1 }}
      >
        <MojoCarousel />
        <MainGrid item xs={12} zeroMinWidth sx={{ marginTop: "-55%" }}>
          <Grid container spacing={2} textAlign="center">
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
