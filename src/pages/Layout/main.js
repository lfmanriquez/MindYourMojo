import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <NavigationBar />
      <main
        style={{
          height: "100dvh",
          width: "100%",
        }}
      >
        {children}
        <Footer />
      </main>
    </>
  );
}
