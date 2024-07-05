import { Button, Card, CardMedia, Fade, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import MindYourMojoDemo from "./MindYourMojoDemo.mp4";
import MobileMindYourMojoDemo from "./MOBILE-MindYourMojo.mp4";

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
  background-image: linear-gradient(
    ${(props) => props.theme.palette.secondary.main},
    white
  );
`;

const MobileCard = styled(Card)`
  height: fit-content;
  width: fit-content;
  border-radius: 15px;
  border: 4px solid ${(props) => props.theme.palette.primary.main};
`;

const BrowserCard = styled(Card)`
  width: fit-content;
  max-height: 70dvh;
  border-radius: 15px;
  border: 4px solid ${(props) => props.theme.palette.primary.main};
`;

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Fade
      in
      timeout={{ enter: 500, exit: 300 }}
      sx={{ transitionDelay: `300ms`, height: "100%", paddingX: "5%" }}
    >
      <MainGrid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Grid item xs={6}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h4" color="primary.main">
                Values DigiQuiz
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" color="primary.main">
                Discover what matters most to you.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <BeginButton
                fullWidth
                color="primary"
                variant="container"
                size="large"
                onClick={() => navigate("/test")}
              >
                <Typography variant="button">Begin Your DigiQuiz</Typography>
              </BeginButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={6} sx={{ display: { xs: "inline", sm: "none" } }}>
            <MobileCard>
              <CardMedia
                sx={{
                  height: "100%",
                }}
                component="video"
                image={MobileMindYourMojoDemo}
                autoPlay
                muted
                loop
                playsInline
              />
            </MobileCard>
          </Grid>
          <Grid item sm={6} sx={{ display: { xs: "none", sm: "inline" } }}>
            <BrowserCard>
              <CardMedia
                sx={{
                  height: "100%",
                }}
                component="video"
                image={MindYourMojoDemo}
                autoPlay
                muted
                loop
                playsInline
              />
            </BrowserCard>
          </Grid>
        </Grid>
      </MainGrid>
    </Fade>
  );
}
