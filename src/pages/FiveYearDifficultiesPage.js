import Navigation from "../components/Navigation";
import data from "../data/course_year_aggregate.json";
import React, { useState } from "react";
import LineChart from "../components/LineChart";
import Stats from "../components/Stats";
import CourseSelection from "../components/CourseSelection";

const FiveYearDifficulties = () => {
  const [clickedCourse, setClickedCourse] = useState("161");

  const fiveYearData = data.filter(
    (entry) => 2018 <= parseInt(entry.year) && parseInt(entry.year) <= 2022
  );
  
  const clickedCourseData = fiveYearData.filter(
    (element) => element.course.id === clickedCourse
  );
  const difficulties = clickedCourseData.map((obj) =>
    parseFloat(obj.aggregate.mean)
  );

  const xAxisLabels = [2018, 2019, 2020, 2021, 2022];
  
  const allData = [clickedCourseData, difficulties];
  
  return (
    <div className="App">
      <Navigation />
      <h1>Course Difficulty Over Past 5 Years</h1>
      <CourseSelection setClickedCourse={setClickedCourse} />
      <LineChart xAxisLabels={xAxisLabels} difficulties={difficulties} />
      <Stats xAxisLabels={xAxisLabels} allData={allData} />
    </div>
  );
};

export default FiveYearDifficulties;
