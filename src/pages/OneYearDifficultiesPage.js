import "../App.css";
import Navigation from "../components/Navigation";
import quarterData from "../data/course_quarter_aggregate.json";
import React, { useState } from "react";
import LineChart from "../components/LineChart";
import Stats from "../components/Stats";
import CourseSelection from "../components/CourseSelection";

const OneYearDifficulties = () => {
  const [clickedCourse, setClickedCourse] = useState("161");

  const oneYearData = quarterData.filter(
    (entry) =>
      entry.course.id === clickedCourse &&
      ((entry.quarter.term === "Spring" && entry.quarter.year === "2021") ||
        (entry.quarter.term === "Summer" && entry.quarter.year === "2021") ||
        (entry.quarter.term === "Fall" && entry.quarter.year === "2021") ||
        (entry.quarter.term === "Winter" && entry.quarter.year === "2022"))
  );

  const oneYearDifficulties = oneYearData.map((obj) =>
    parseFloat(obj.aggregate.mean)
  );

  const xAxisLabels = [
    "Spring 2021",
    "Summer 2021",
    "Fall 2021",
    "Winter 2022",
  ];
  const allData = [oneYearData, oneYearDifficulties];
    console.log(allData);

  return (
    <div className="App">
      <Navigation />
      <h1>Course Difficulty Over the Past Year</h1>
      <CourseSelection setClickedCourse={setClickedCourse} />

      <LineChart xAxisLabels={xAxisLabels} difficulties={oneYearDifficulties} />
      {oneYearDifficulties.length > 1 ? (
        <Stats xAxisLabels={xAxisLabels} allData={allData} />
      ) : (
        <div className="stats">
          <p>Sorry but we do not have enough data. </p>
        </div>
      )}
    </div>
  );
};

export default OneYearDifficulties;
