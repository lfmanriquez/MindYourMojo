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
  padding: 1%;
`;

const MobileCard = styled(Card)`
  max-height: 60dvh;
  max-width: 40dvw;
  border-radius: 15px;
  border: 4px solid ${(props) => props.theme.palette.primary.main};
`;

const BrowserCard = styled(Card)`
  width: fit-content;
  max-height: 50dvh;
  border-radius: 15px;
  border: 4px solid ${(props) => props.theme.palette.primary.main};
`;

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Fade
      in
      timeout={{ enter: 500, exit: 300 }}
      sx={{ transitionDelay: `300ms`, height: "100%" }}
    >
      <MainGrid
        container
        spacing={{
          xs: 0,
          sm: 6,
        }}
        alignItems={{ xs: "start", sm: "center" }}
        justifyContent="center"
        textAlign="-webkit-center"
      >
        <Grid item sm={6}>
          <Grid
            container
            spacing={{ xs: 4, sm: 1 }}
            sx={{ marginRight: { xs: "1%" } }}
          >
            <Grid item xs={12}>
              <Typography variant="h3" color="primary.main">
                Values DigiQuiz
              </Typography>
              <Typography variant="caption" color="primary.main">
                Discover what matters most to you.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: { sm: "none" } }}>
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
      </MainGrid>
    </Fade>
  );
}
