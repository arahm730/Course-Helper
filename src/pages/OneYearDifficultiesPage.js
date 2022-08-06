import "../App.css";
import Navigation from "../components/Navigation";
import React, { useState } from "react";
import LineChart from "../components/LineChart";
import Stats from "../components/Stats";
import CourseSelection from "../components/CourseSelection";

const OneYearDifficulties = ({ courseOneYearData, courseData }) => {
  const quarterData = courseOneYearData;
  const [clickedCourse, setClickedCourse] = useState("161");

  const oneYearData = quarterData.filter( (entry) => entry.course.course.id === clickedCourse &&
      ((entry.quarter.quarter.term === "Spring" && entry.quarter.quarter.year === "2021") ||
        (entry.quarter.quarter.term === "Summer" && entry.quarter.quarter.year === "2021") ||
        (entry.quarter.quarter.term === "Fall" && entry.quarter.quarter.year === "2021") ||
        (entry.quarter.quarter.term === "Winter" && entry.quarter.quarter.year === "2022")) );

  const oneYearDataSorted = [];
  for (let obj of oneYearData) {
    if (obj.quarter.quarter.term === "Spring") {
      oneYearDataSorted[0] = obj;
    } else if (obj.quarter.quarter.term === "Summer") {
      oneYearDataSorted[1] = obj;
    } else if (obj.quarter.quarter.term === "Fall") {
      oneYearDataSorted[2] = obj;
    } else {
      oneYearDataSorted[3] = obj;
    }
  }

  const oneYearDifficulties = oneYearDataSorted.map((obj) =>
    parseFloat(obj.aggregate.aggregate.mean)
  );
  
  const xAxisLabels = ["Spring 2021", "Summer 2021", "Fall 2021", "Winter 2022"];

  //parses json to remove duplicate nested key. 
  //for example: entry.quarter.quarter.year becomes just entry.quarter.year.
  const cleanedOneYearData = [];
  for (const entry of oneYearDataSorted) {
    let d = {};
    d["course"] = entry.course.course;
    d["quarter"] = entry.quarter.quarter.year;
    d["aggregate"] = entry.aggregate.aggregate;
    cleanedOneYearData.push(d);
  }

  const allData = [cleanedOneYearData, oneYearDifficulties];

  return (
    <div className="App">
      <Navigation />
      <h1>Course Difficulty Over the Past Year</h1>
      <CourseSelection setClickedCourse={setClickedCourse} courseData={courseData}/>
      <LineChart xAxisLabels={xAxisLabels} difficulties={oneYearDifficulties} />
      {oneYearDifficulties.length > 1 ? (<Stats xAxisLabels={xAxisLabels} allData={allData} />) : 
         (<div className="stats"><p>Sorry but we do not have enough data. </p></div>)}
    </div>
  );
};

export default OneYearDifficulties;
