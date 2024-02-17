import styled from "@emotion/styled";
import { CardMedia, Grid, Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import MindYourMojoDemo from "./MindYourMojoDemo.mp4";

const CarouselGrid = styled(Grid)`
  margin: 0 5%;
`;

export default function MojoCarousel() {
  var items = [
    {
      name: "Values DigiQuiz",
      description: "Discover what matters most to you.",
      content: (
        <CardMedia
          sx={{ height: "-webkit-fill-available" }}
          component="video"
          image={MindYourMojoDemo}
          autoPlay
          muted
        />
      ),
    },
  ];

  return (
    <>
      <CarouselGrid item xs={12} textAlign="center" zeroMinWidth>
        <Carousel
          height={"50dvh"}
          sx={{
            backgroundColor: "secondary.main",
            borderRadius: "10px",
          }}
          animation="slide"
          autoPlay={false}
        >
          {items.map((i, index) => (
            <Grid container spacing={1} key={index} sx={{ height: "100%" }}>
              <Grid item xs={12}>
                <Typography
                  variant
                  color="primary"
                  fontWeight="bolder"
                  fontSize={"4dvh"}
                >
                  {i.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant fontSize={"2dvh"}>
                  {i.description}
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ height: "80%" }}>
                {i.content}
              </Grid>
            </Grid>
          ))}
        </Carousel>
      </CarouselGrid>
    </>
  );
}
