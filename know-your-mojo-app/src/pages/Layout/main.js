import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import styled from "@emotion/styled";

const Main = styled.main`
  height: 100vh;
  background-color: transparent;
`;

export default function Layout(props) {
  const { children } = props;
  return (
    <Box className="mainLayout">
      <NavigationBar />
      <Main>{children}</Main>
    </Box>
  );
}
