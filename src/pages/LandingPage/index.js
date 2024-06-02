import { Button, Card, CardMedia, Fade, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import MindYourMojoDemo from "./MindYourMojoDemo.mp4";
import MobileMindYourMojoDemo from "./MOBILE-MindYourMojo.mp4";
import { BrowserView, MobileView, isMobile } from "react-device-detect";

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
        spacing={isMobile ? 0 : 6}
        alignItems={isMobile ? "start" : "center"}
        justifyContent="center"
        textAlign="-webkit-center"
      >
        <Grid
          item
          container
          spacing={isMobile ? 4 : 1}
          lg
          sx={!isMobile && { marginRight: "1%" }}
        >
          <Grid item xs={12}>
            <Typography variant="h3" color="primary.main">
              Values DigiQuiz
            </Typography>
            <Typography variant="caption" color="primary.main">
              Discover what matters most to you.
            </Typography>
          </Grid>
          <Grid item xs>
            <MobileView>
              <Card sx={{ width: "50dvw" }}>
                <CardMedia
                  sx={{
                    height: "50dvh",
                  }}
                  component="video"
                  image={MobileMindYourMojoDemo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </Card>
            </MobileView>
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
        <BrowserView>
          <Grid item lg>
            <Card>
              <CardMedia
                sx={{
                  height: "80dvh",
                }}
                component="video"
                image={MindYourMojoDemo}
                autoPlay
                muted
                loop
                playsInline
              />
            </Card>
          </Grid>
        </BrowserView>
      </MainGrid>
    </Fade>
  );
}
