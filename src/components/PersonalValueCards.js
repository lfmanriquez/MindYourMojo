import { Fade, Grid } from "@mui/material";
import React, { useState } from "react";
import DetailsDialog from "./DetailsDialog";
import ValueCard from "./ValueCard";

export default function PersonalValueCards(props) {
  const { isTestPage, values, chosenValues, setChosenValues } = props;

  const [isDetailsOpen, toggleIsDetailsOpen] = useState(false);
  const [openDetailForValue, toggleOpenDetailForValue] = useState(null);

  const handleOpenCard = (value) => {
    toggleOpenDetailForValue(value);
    toggleIsDetailsOpen(!isDetailsOpen);
  };

  const handleCardClick = (value) => {
    if (!isTestPage) {
      handleOpenCard(value);
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
        spacing={6}
        textAlign="center"
        alignItems="center"
        direction="row"
      >
        {values.map((v, index) => (
          <Fade
            in={values.length > 0}
            timeout={{ enter: 500, exit: 250 }}
            style={{ transitionDelay: `${index * 150}ms` }}
            key={`asi-${v.id}-${index}`}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ height: "100%" }}
              zeroMinWidth
            >
              <ValueCard
                key={index}
                value={v}
                selected={chosenValues?.includes(v)}
                handleCardClick={handleCardClick}
                handleOpenCard={handleOpenCard}
                hasDetails
              />
            </Grid>
          </Fade>
        ))}
        {isDetailsOpen && (
          <DetailsDialog
            selectedValue={openDetailForValue}
            handleOpenCard={() => handleOpenCard(null)}
            isDetailsOpen={isDetailsOpen}
          />
        )}
      </Grid>
    </>
  );
}
