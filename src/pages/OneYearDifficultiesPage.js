import "../App.css";
import Navigation from "../components/Navigation";
import React, { useState } from "react";
import LineChart from "../components/LineChart";
import Stats from "../components/Stats";
import CourseSelection from "../components/CourseSelection";

const OneYearDifficulties = ({ courseOneYearData, courseData }) => {
  const quarterData = courseOneYearData;
  const [clickedCourse, setClickedCourse] = useState("161");

  const oneYearSortedData = [];
  const cleanedOneYearSortedData = [];

  const oneYearData = quarterData.filter(
    (entry) =>
      entry.course.course.id === clickedCourse &&
      ((entry.quarter.quarter.term === "Spring" &&
        entry.quarter.quarter.year === "2021") ||
        (entry.quarter.quarter.term === "Summer" &&
          entry.quarter.quarter.year === "2021") ||
        (entry.quarter.quarter.term === "Fall" &&
          entry.quarter.quarter.year === "2021") ||
        (entry.quarter.quarter.term === "Winter" &&
          entry.quarter.quarter.year === "2022"))
  );

  //sorts data as spring, summer, fall, winter
  const sortOneYearData = () => {
    for (let obj of oneYearData) {
      if (obj.quarter.quarter.term === "Spring") {
        oneYearSortedData[0] = obj;
      } else if (obj.quarter.quarter.term === "Summer") {
        oneYearSortedData[1] = obj;
      } else if (obj.quarter.quarter.term === "Fall") {
        oneYearSortedData[2] = obj;
      } else {
        oneYearSortedData[3] = obj;
      }
    }
  };

  sortOneYearData();

  //parses json to remove duplicate nested key.
  //for example entry.quarter.quarter.year becomes just entry.quarter.year.
  const cleanOneYearDataSorted = () => {
    for (const entry of oneYearSortedData) {
      let d = {};
      d["course"] = entry.course.course;
      d["quarter"] = entry.quarter.quarter.year;
      d["aggregate"] = entry.aggregate.aggregate;
      cleanedOneYearSortedData.push(d);
    }
  };

  cleanOneYearDataSorted();

  const oneYearDifficulties = cleanedOneYearSortedData.map((obj) =>
    parseFloat(obj.aggregate.mean)
  );

  const xAxisLabels = [
    "Spring 2021",
    "Summer 2021",
    "Fall 2021",
    "Winter 2022",
  ];

  const allData = [cleanedOneYearSortedData, oneYearDifficulties];

  return (
    <div className="App">
      <Navigation />
      <h1>Course Difficulty Over the Past Year</h1>
      <CourseSelection
        setClickedCourse={setClickedCourse}
        courseData={courseData}
      />
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
