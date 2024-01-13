import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import styled from "@emotion/styled";

const Main = styled.main`
  background-color: transparent;
`;

const MainLayout = styled(Box)`
  height: 95vh;
  width: fit-content;
`;

export default function Layout(props) {
  const { children } = props;
  return (
    <MainLayout>
      <NavigationBar />
      <Main>{children}</Main>
    </MainLayout>
  );
}
