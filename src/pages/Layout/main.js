import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import styled from "@emotion/styled";
import Div100vh from "react-div-100vh";

// const MainLayout = styled(Box)`
//   width: 100%;
//   box-sizing: border-box;
// `;

export default function Layout(props) {
  const { children } = props;
  return (
    <Div100vh>
      <NavigationBar />
      <main style={{ padding: "1%" }}>{children}</main>
    </Div100vh>
  );
}
