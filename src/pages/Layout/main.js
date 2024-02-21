import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <NavigationBar />
      <main
        style={{
          height: "calc(100% - var(--header-height) - var(--footer-height))",
          width: "100%",
          position: "fixed",
        }}
      >
        {children}
        <Footer />
      </main>
    </>
  );
}
