import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import styled from "@emotion/styled";

const MainLayout = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
`;

export default function Layout(props) {
  const { children } = props;
  return (
    <MainLayout>
      <NavigationBar />
      <main style={{ padding: "1%" }}>{children}</main>
    </MainLayout>
  );
}
