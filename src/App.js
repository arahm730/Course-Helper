import FiveYearDifficultiesPage from "./pages/FiveYearDifficultiesPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlannerPage from "./pages/PlannerPage";
import "bootstrap/dist/css/bootstrap.min.css";
import OneYearDifficultiesPage from "./pages/OneYearDifficultiesPage";
import "./App.css";
import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import SortedCoursesPage from "./pages/SortedCoursesPage";

const api_url1 = "http://127.0.0.1:5000/courses";
const api_url2 = "http://127.0.0.1:5000/course-year-aggregates";
const api_url3 = "http://127.0.0.1:5000/course-quarter-aggregates";

const App = () => {
  const [courseData, setCourseData] = useState("");
  const [courseFiveYearData, setcourseFiveYearData] = useState("");
  const [courseOneYearData, setCourseOneYearData] = useState("");

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (url === api_url1) setCourseData(json);
      else if (url === api_url2) setcourseFiveYearData(json);
      else if (url === api_url3) setCourseOneYearData(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData(api_url1);
    fetchData(api_url2);
    fetchData(api_url3);
  }, []);

  return courseData && courseFiveYearData && courseOneYearData ? (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <FiveYearDifficultiesPage
                courseFiveYearData={courseFiveYearData}
                courseData={courseData}
              />
            }
          ></Route>
          <Route
            path="/one-year"
            exact
            element={
              <OneYearDifficultiesPage
                courseOneYearData={courseOneYearData}
                courseData={courseData}
              />
            }
          ></Route>
          <Route
            path="/planner"
            element={
              <PlannerPage
                courseFiveYearData={courseFiveYearData}
                courseData={courseData}
              />
            }
          ></Route>
          <Route
            path="/sorted-courses"
            element={
              <SortedCoursesPage courseFiveYearData={courseFiveYearData} />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  ) : (
    <Loading />
  );
}
export default App;
