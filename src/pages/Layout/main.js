import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import styled from "@emotion/styled";

const Main = styled.main`
  background-color: transparent;
  margin: 10%;

  @media screen and (min-width: 800px) {
    margin-left: 20%;
    margin-right: 20%;
  }
`;

const MainLayout = styled(Box)`
  height: 100%;
  width: 100%;
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
