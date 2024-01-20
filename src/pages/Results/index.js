import styled from "@emotion/styled";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

const ContainerGrid = styled(Grid)`
  height: 100%;
  margin-bottom: 10%;

  @media screen and (max-height: 390px) {
    margin-bottom: 30%;
  }
`;

export default function Results() {
  const { state: results } = useLocation();

  const [topValues, setTopValues] = useState();

  useEffect(() => {
    if (results?.length) {
      setTopValues(results);
    }
  }, []);

  return (
    <ContainerGrid
      container
      spacing={4}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography variant="h4">Your Personal Values Results</Typography>
      </Grid>
      <Grid item xs={12}>
        <List>
          {topValues?.map((t, index) => (
            <ListItem key={t.id}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography fontWeight="bold">
                    {index + 1}. {t.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">{t.description}</Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </Grid>
    </ContainerGrid>
  );
}
