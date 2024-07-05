import styled from "@emotion/styled";
import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

const SUserCard = styled(Card)`
  width: 50dvh;
  height: 20dvh;
`;

export const UserCards = (props) => {
  const { teamMembers } = props;
  return (
    <Stack
      direction={{ sm: "column", md: "row" }}
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
    >
      {teamMembers.map((tm) => (
        <SUserCard key={tm.id}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {tm.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {tm.position}
            </Typography>
          </CardContent>
        </SUserCard>
      ))}
    </Stack>
  );
};
