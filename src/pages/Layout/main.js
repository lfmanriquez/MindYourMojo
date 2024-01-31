import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import styled from "@emotion/styled";
import Div100vh from "react-div-100vh";

const MainLayout = styled(Box)`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
`;

export default function Layout(props) {
  const { children } = props;
  return (
    <Div100vh>
      <NavigationBar />
      <main style={{ padding: "1%", height: "89%" }}>{children}</main>
    </Div100vh>
  );
}
