import styled from "@emotion/styled";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Card, Grid, IconButton, Typography } from "@mui/material";

const VCard = styled(Card)`
  cursor: pointer;
  padding: 5%;
  border-radius: 20px;
  background-color: ${(props) =>
    props.selected && props.theme.palette.secondary.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 20dvw;
  height: 25dvh;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 10px 3px;

  @media screen and (min-width: 1500px) {
    min-width: 20dvw;
    max-height: 15dvh;
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
  font-weight: bolder;
  font-size: 2dvh;
`;

export default function ValueCard(props) {
  const {
    value,
    selected,
    handleCardClick,
    handleOpenCard,
    hasDetails,
    onComparisonTest,
  } = props;

  return (
    <VCard
      key={value}
      selected={selected}
      onClick={(e) => handleCardClick(e, value)}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={12} zeroMinWidth>
          <Header>{value?.name}</Header>
        </Grid>
        <Grid item xs={12} zeroMinWidth>
          <Typography variant="caption">{value?.exerpt}</Typography>
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
            <IconButton onClick={(e) => handleOpenCard(e, value)}>
              <LibraryBooksIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </VCard>
  );
}
