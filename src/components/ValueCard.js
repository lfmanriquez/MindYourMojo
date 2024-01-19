import styled from "@emotion/styled";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";

const VCard = styled(Card)`
  border-radius: 20px;
  background-color: ${(props) =>
    props.selected && props.theme.palette.secondary.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  & .MuiCardContent-root {
    padding: 5px;
    height: 5vh;
    overflow: auto;
  }

  & .MuiCardActions-root {
    padding: 5px;
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 350px);
   {
    scale: 1;
  }
  &:hover {
    cursor: pointer;
    scale: 1.01;
    box-shadow: 0px 2px 1px -1px black, 0px 1px 1px 0px black,
      0px 1px 3px 0px black;
  }
`;

export default function ValueCard(props) {
  const { value, selected, handleCardClick, handleOpenCard, hasDetails } =
    props;

  return (
    <VCard key={value} selected={selected}>
      <Box onClick={() => handleCardClick(value)}>
        <CardHeader title={value?.name} />
        <CardContent>
          <Typography variant="body2">{value?.exerpt}</Typography>{" "}
        </CardContent>
      </Box>
      {hasDetails && (
        <CardActions>
          <IconButton size="small" onClick={() => handleOpenCard(value)}>
            <LibraryBooksIcon sx={{ marginRight: "1vh" }} />
          </IconButton>
        </CardActions>
      )}
    </VCard>
  );
}
