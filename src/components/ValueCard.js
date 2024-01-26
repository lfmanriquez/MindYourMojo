import styled from "@emotion/styled";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const VCard = styled(Card)`
  cursor: pointer;
  padding: 5%;
  border-radius: 20px;
  background-color: ${(props) =>
    props.selected && props.theme.palette.secondary.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 20vw;
  height: 25vh;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px 3px;

  @media screen and (min-width: 1500px) {
    min-width: 20vw;
    max-height: 15vh;
  }

  @media screen and (max-width: 350px);
   {
    scale: 1;
  }
  &:hover {
    cursor: pointer;
    scale: 1.01;
  }
`;

const Header = styled(Typography)`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
`;

export default function ValueCard(props) {
  const { value, selected, handleCardClick, handleOpenCard, hasDetails } =
    props;

  return (
    <VCard
      key={value}
      selected={selected}
      onClick={() => handleCardClick(value)}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={12} zeroMinWidth>
          <Header>{value?.name}</Header>
        </Grid>
        <Grid item xs={12} zeroMinWidth>
          <Typography variant="body1">{value?.exerpt}</Typography>
        </Grid>
        {hasDetails && (
          <Grid
            item
            xs={12}
            container
            justifyContent="flex-end"
            alignItems="end"
            zeroMinWidth
          >
            <IconButton onClick={() => handleOpenCard(value)}>
              <LibraryBooksIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </VCard>
  );
}
