import NavigationBar from "./NavigationBar";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <NavigationBar />
      <main
        style={{
          height: "calc(100% - var(--header-height))",
          padding: "1%",
          position: "fixed",
        }}
      >
        {children}
      </main>
    </>
  );
}
