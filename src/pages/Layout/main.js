import { Toolbar } from "@mui/material";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <NavigationBar />
      <main
        style={{
          height: "calc(100dvh - var(--header-height))",
          width: "100%",
          paddingTop: "1%",
        }}
      >
        {children}
        <Toolbar sx={{ minHeight: "5% !important" }} />
        <Footer />
      </main>
    </>
  );
}
