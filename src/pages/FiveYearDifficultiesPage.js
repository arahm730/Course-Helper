import Navigation from "../components/Navigation";
import React, { useState } from "react";
import LineChart from "../components/LineChart";
import Stats from "../components/Stats";
import CourseSelection from "../components/CourseSelection";

const FiveYearDifficulties = ({ courseFiveYearData, courseData }) => {
  const data = courseFiveYearData;
  const [clickedCourse, setClickedCourse] = useState("161");

  const fiveYearData = data.filter(
    (entry) => 2018 <= parseInt(entry.year) && parseInt(entry.year) <= 2022
  );

  // sorts data increasing by year
  const clickedCourseData = fiveYearData
    .filter((element) => element.course.id === clickedCourse)
    .sort((a, b) => (a.year > b.year ? 1 : -1));

  const difficulties = clickedCourseData.map((obj) =>
    parseFloat(obj.aggregate.mean)
  );

  const xAxisLabels = [2018, 2019, 2020, 2021, 2022];
  const allData = [clickedCourseData, difficulties];

  return (
    <div className="App">
      <Navigation />
      <h1>Course Difficulty Over Past 5 Years</h1>
      <CourseSelection
        setClickedCourse={setClickedCourse}
        courseData={courseData}
      />
      <LineChart xAxisLabels={xAxisLabels} difficulties={difficulties} />
      <Stats xAxisLabels={xAxisLabels} allData={allData} />
    </div>
  );
};

export default FiveYearDifficulties;
