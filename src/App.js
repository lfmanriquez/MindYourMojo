import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PersonalValuesTest from "./pages/Test";
import Layout from "./pages/Layout/main";
import Values from "./pages/Values";
import ComparisonTest from "./pages/ComparisonTest";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route exact path="test" Component={PersonalValuesTest} />
        <Route path="comparison-test" Component={ComparisonTest} />
        <Route exact path="values" Component={Values} />
      </Routes>
    </Layout>
  );
}

export default App;
