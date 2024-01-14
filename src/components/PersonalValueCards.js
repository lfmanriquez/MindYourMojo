import { Card, CardContent, CardHeader, Fade, Grid } from "@mui/material";
import personalValues from "../app-data/personal-values";
import styled from "@emotion/styled";
import { useState } from "react";
import DetailsDialog from "./DetailsDialog";

const ValueCard = styled(Card)`
  min-width: 35vw;
  width: 100%;
  height: 25vh;
  max-height: 30vh;
  margin: 1vh;

  &:hover {
    cursor: pointer;
    scale: 1.01;
    box-shadow: 0px 2px 1px -1px black, 0px 1px 1px 0px black,
      0px 1px 3px 0px black;
  }
`;

export default function PersonalValueCards() {
  const values = personalValues;

  const [isDetailsOpen, toggleIsDetailsOpen] = useState(false);
  const [valueSelected, toggleValueSelected] = useState(null);

  const handleOpenCard = (value) => {
    toggleValueSelected(value);
    toggleIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <>
      <Grid
        container
        xs={12}
        spacing={1}
        textAlign="center"
        alignItems="center"
        direction="row"
      >
        {values.map((v, index) => (
          <>
            <Fade
              in={values.length > 0}
              timeout={{ enter: 500, exit: 250 }}
              style={{ transitionDelay: `${index * 100}ms` }}
              key={`asi-${v.id}-${index}`}
            >
              <Grid item xs>
                <ValueCard key={v} onClick={() => handleOpenCard(v)}>
                  <CardHeader title={v.name}></CardHeader>
                  <CardContent>{v.exerpt}</CardContent>
                </ValueCard>
              </Grid>
            </Fade>
          </>
        ))}
        {isDetailsOpen && (
          <DetailsDialog
            selectedValue={valueSelected}
            handleOpenCard={() => handleOpenCard(null)}
            isDetailsOpen={isDetailsOpen}
          />
        )}
      </Grid>
    </>
  );
}
