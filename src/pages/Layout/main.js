import NavigationBar from "./NavigationBar";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <NavigationBar />
      <main
        style={{
          padding: "1%",
        }}
      >
        {children}
      </main>
    </>
  );
}
