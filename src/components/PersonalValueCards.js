import { Fade, Grid } from "@mui/material";
import React, { useState } from "react";
import DetailsDialog from "./DetailsDialog";
import ValueCard from "./ValueCard";
import styled from "@emotion/styled";

const GridContainer = styled(Grid)`
  height: 60vh;
  overflow: auto;
  padding: 1%;
  @media (min-width: 700px) and (min-height: 800px) {
    height: 70vh;
  }
  @media (min-width: 600px) and (max-width: 708px) {
    height: 55vh;
  }
  @media (min-width: 450px) and (max-width: 600px) {
    height: 50vh;
  }
`;

export default function PersonalValueCards(props) {
  const { isTestPage, values, chosenValues, setChosenValues } = props;

  const [isDetailsOpen, toggleIsDetailsOpen] = useState(false);
  const [openDetailForValue, toggleOpenDetailForValue] = useState(null);

  const handleOpenCard = (e, value) => {
    e.stopPropagation();
    toggleOpenDetailForValue(value);
    toggleIsDetailsOpen(!isDetailsOpen);
  };

  const handleCardClick = (e, value) => {
    if (!isTestPage) {
      handleOpenCard(e, value);
    } else {
      if (chosenValues?.includes(value)) {
        setChosenValues(chosenValues?.filter((v) => v !== value));
      } else {
        setChosenValues([...chosenValues, value]);
      }
    }
  };

  return (
    <>
      <GridContainer
        container
        spacing={4}
        textAlign="center"
        alignItems="center"
        direction="row"
      >
        {values.map((v, index) => (
          <Grid item xs={6} sm={6} md={4} zeroMinWidth>
            <ValueCard
              key={index}
              value={v}
              selected={chosenValues?.includes(v)}
              handleCardClick={(e) => handleCardClick(e, v)}
              handleOpenCard={(e) => handleOpenCard(e, v)}
              hasDetails
            />
          </Grid>
        ))}
        {isDetailsOpen && (
          <DetailsDialog
            selectedValue={openDetailForValue}
            handleOpenCard={(e) => handleOpenCard(e, null)}
            isDetailsOpen={isDetailsOpen}
          />
        )}
      </GridContainer>
    </>
  );
}
