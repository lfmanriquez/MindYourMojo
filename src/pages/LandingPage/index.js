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
const GridContainer = styled(Grid)`
  @media screen and (max-width: 600px) {
    margin-top: 50%;
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
      <GridContainer
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%", flexGrow: 1 }}
      >
        <Grid item xs={12} zeroMinWidth>
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
        </Grid>
      </GridContainer>
    </Fade>
  );
}
