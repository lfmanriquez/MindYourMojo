import { Fade, Grid } from "@mui/material";
import React, { useState } from "react";
import DetailsDialog from "./DetailsDialog";
import ValueCard from "./ValueCard";
import styled from "@emotion/styled";

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
      <Grid
        container
        spacing={4}
        textAlign="center"
        alignItems="center"
        direction="row"
        sx={{ padding: "2dvh" }}
      >
        {values.map((v, index) => (
          <Grid key={index} item xs={6} sm={6} md={4}>
            <ValueCard
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
      </Grid>
    </>
  );
}
