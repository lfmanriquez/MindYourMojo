import { Button, Fade, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import LandingPageLogo from "./LandingPageLogo.png";
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

const ImgGrid = styled(Grid)`
  & img {
    opacity: 1;
  }
  @media screen and (max-width: 500px) {
    & img {
      display: none;
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
        sx={{ height: "100%", flexGrow: 1 }}
      >
        <Grid item xs={12} sm={6} zeroMinWidth>
          <Grid container spacing={2} textAlign="center">
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
                color="primary"
                variant="container"
                fullWidth
                size="large"
                onClick={() => navigate("/test")}
              >
                Begin Your Test
              </BeginButton>
            </Grid>
          </Grid>
        </Grid>
        <ImgGrid item xs={12} sm={6} zeroMinWidth>
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
