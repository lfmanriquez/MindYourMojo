import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import styled from "@emotion/styled";

const Main = styled.main`
  margin: 10%;
  @media screen and (min-width: 800px) {
    margin-left: 20%;
    margin-right: 20%;
  }
`;

const MainLayout = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
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
