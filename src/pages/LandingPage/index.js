import { Button, Fade, Grid, Typography } from "@mui/material";
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

const ImgGrid = styled(Grid)`
  & img {
    opacity: 1;
  }
  @media screen and (max-width: 500px) {
    & img {
      opacity: 0.2;
    }
  }
`;

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <Fade
      in
      timeout={{ enter: 500, exit: 250 }}
      style={{ transitionDelay: `100ms` }}
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%", padding: "5vh" }}
      >
        <Grid item xs={6} zeroMinWidth>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">PERSONAL VALUES ASSESSMENT</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">
                {process.env.REACT_APP_NAME} allows you to discover your core
                values with our free personalized test
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
        <ImgGrid item xs={6} zeroMinWidth>
          <img
            width={"100%"}
            height={"100%"}
            src={LandingPageLogo}
            alt="values"
          />
        </ImgGrid>
      </Grid>
    </Fade>
  );
}
