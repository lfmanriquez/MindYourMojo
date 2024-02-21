import styled from "@emotion/styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { ExpandCircleDown } from "@mui/icons-material";

const HeaderGrid = styled(Grid)`
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.15) 0 4px 2px -2px;
  text-align: center;
  align-items: center;
  display: grid;
`;

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
    <Grid container sx={{ height: "inherit", position: "fixed" }}>
      <HeaderGrid item xs={12}>
        <Typography variant="h4" color="secondary" fontWeight="bold">
          My Top 5 Values
        </Typography>
      </HeaderGrid>
      <Grid
        item
        xs={12}
        sx={{ height: "80%", margin: "0 5%", overflowY: "auto" }}
      >
        {topValues?.map((t, index) => (
          <Slide
            direction="left"
            in={topValues.length > 0}
            timeout={{ enter: 500, exit: 500 }}
            style={{ transitionDelay: `${index * 500}ms` }}
            key={`asi-${t.id}-${index}`}
          >
            <CustomAccordion>
              <AccordionSummary
                expandIcon={<ExpandCircleDown color="primary" />}
              >
                <Typography
                  fontWeight="bold"
                  color="primary"
                  fontFamily="Playfair Display"
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
          </Slide>
        ))}
      </Grid>
    </Grid>
  );
}
