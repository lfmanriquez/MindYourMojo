import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { ExpandCircleDown } from "@mui/icons-material";

const CustomAccordion = styled(Accordion)`
  border: none;
  box-shadow: none;

  ::before {
    background-color: ${(props) => props.theme.palette.secondary.main};
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
    <Grid
      container
      spacing={4}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography variant="h4" color="secondary" fontWeight="bold">
          My Top 5 Values
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {topValues?.map((t, index) => (
          <CustomAccordion key={index}>
            <AccordionSummary expandIcon={<ExpandCircleDown color="primary" />}>
              <Typography
                fontWeight="bold"
                color="primary"
                textTransform="capitalize"
                variant="h5"
              >
                #{index + 1} {t.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{t.description}</Typography>
            </AccordionDetails>
          </CustomAccordion>
        ))}
      </Grid>
    </Grid>
  );
}
