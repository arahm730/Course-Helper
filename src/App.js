import FiveYearDifficultiesPage from "./pages/FiveYearDifficultiesPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlannerPage from "./pages/PlannerPage";
import "bootstrap/dist/css/bootstrap.min.css";
import OneYearDifficultiesPage from "./pages/OneYearDifficultiesPage";
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<FiveYearDifficultiesPage />}></Route>
          <Route
            path="/one-year"
            exact
            element={<OneYearDifficultiesPage />}
          ></Route>
          <Route path="/planner" element={<PlannerPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
