import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import personalValues from "../app-data/personal-values";
import styled from "@emotion/styled";
import { useState } from "react";
import DetailsDialog from "./DetailsDialog";

const ValueCard = styled(Card)`
  width: 270px;
  height: 150px;

  &:hover {
    cursor: pointer;
    scale: 1.05;
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
        spacing={2}
        textAlign="center"
        alignItems="center"
        direction="row"
        sx={{ width: "100%", height: "100%" }}
      >
        {values.map((v) => (
          <>
            <Grid item xs={3}>
              <ValueCard key={v} onClick={() => handleOpenCard(v)}>
                <CardHeader title={v.name}></CardHeader>
                <CardContent>{v.exerpt}</CardContent>
              </ValueCard>
            </Grid>
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
