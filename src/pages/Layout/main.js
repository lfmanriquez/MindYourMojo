import { Box } from "@mui/material";
import NavigationBar from "./NavigationBar";
import styled from "@emotion/styled";

const MainLayout = styled(Box)`
  height: 100dvh;
  width: 100%;
  box-sizing: border-box;
`;

export default function Layout(props) {
  const { children } = props;
  return (
    <MainLayout>
      <NavigationBar />
      <main
        style={{
          padding: "1%",
          minHeight: "calc(100dvh - var(--header-height))",
        }}
      >
        {children}
      </main>
    </MainLayout>
  );
}
