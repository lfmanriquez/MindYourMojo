import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fade,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import DetailsDialog from "./DetailsDialog";
import { OpenInFull } from "@mui/icons-material";

const ValueCard = styled(Card)`
  background-color: ${(props) => props.selected && "yellow"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  & .MuiCardContent-root {
    padding: 5px;
    height: 100%;
  }

  & .MuiCardActions-root {
    padding: 5px;
    flex-direction: row-reverse;
  }

  &:hover {
    cursor: pointer;
    scale: 1.01;
    box-shadow: 0px 2px 1px -1px black, 0px 1px 1px 0px black,
      0px 1px 3px 0px black;
  }
`;

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
              style={{ transitionDelay: `${index * 250}ms` }}
              key={`asi-${v.id}-${index}`}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                sx={{ height: "100%", maxHeight: "30vh" }}
                zeroMinWidth
              >
                <ValueCard key={v} selected={chosenValues?.includes(v)}>
                  <Box onClick={() => handleCardClick(v)}>
                    <CardHeader title={v.name} />
                    <CardContent>
                      <Typography variant="body2">{v.exerpt}</Typography>{" "}
                    </CardContent>
                  </Box>
                  <CardActions>
                    <IconButton size="small" onClick={() => handleOpenCard(v)}>
                      <OpenInFull />
                    </IconButton>
                  </CardActions>
                </ValueCard>
              </Grid>
            </Fade>
          </>
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
