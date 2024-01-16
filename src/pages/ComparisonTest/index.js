import styled from "@emotion/styled";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router";

const ContainerGrid = styled(Grid)`
  padding: 3vh;
  margin: 0;
`;

export default function ComparisonTest() {
  const { state: chosenValues } = useLocation();

  return (
    <ContainerGrid
      xs={12}
      container
      spacing={4}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography variant="h4">
          Choose which value is more important for you.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={5}>
            <Card>
              <CardHeader title={chosenValues[0].name} />
              <CardContent>{chosenValues[0].exerpt}</CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <LinearProgress variant="determinate" value={25} />
          </Grid>
          <Grid item xs={5}>
            <Card>
              <CardHeader title={chosenValues[1].name} />
              <CardContent>{chosenValues[1].exerpt}</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ButtonGroup>
          <Button>Undo</Button>
          <Button>Restart Test</Button>
        </ButtonGroup>
      </Grid>
    </ContainerGrid>
  );
}
