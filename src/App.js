import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PersonalValuesTest from "./pages/Test";
import Layout from "./pages/Layout/main";
import Values from "./pages/Values";
import ComparisonTest from "./pages/ComparisonTest";
import Results from "./pages/Results";
import { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { appTheme } from "./themes/theme";
import { About } from "./pages/About";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <Layout>
        <Routes>
          <Route exact path="/" Component={LandingPage} />
          <Route exact path="/test" Component={PersonalValuesTest} />
          <Route path="/comparison-test" Component={ComparisonTest} />
          <Route exact path="/values" Component={Values} />
          <Route exact path="/results" Component={Results} />
          <Route exact path="/about" Component={About} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
