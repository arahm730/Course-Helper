import React from "react";
import CourseDifficultyEntry from "./CourseDifficultyEntry";
import "./SortedCourseTable.css";

const SortedCoursesTable = ({ courseFiveYearData }) => {
  const data = courseFiveYearData;
  const fiveYearData = data
    .filter((entry) => 2018 <= parseInt(entry.year) && parseInt(entry.year) <= 2022)
    .sort((a, b) => a.year - b.year || a.course.id - b.course.id);    //sorts by increasing year/id

  const organizedData = {};
  for (const obj of fiveYearData) {
    if (
      obj.course.id === "165" || obj.course.id === "199" || 
      obj.course.id === "231" || obj.course.id === "419"
    ) {
      continue;
    }
    let title = `${obj.course.subject}${obj.course.id} ${obj.course.name}`;
    if (obj.course.id === "419/467") {
      title = `${obj.course.subject}467 ${obj.course.name}`;
    }
    if (title in organizedData) {
      organizedData[title].push(obj.aggregate.mean);
    } else {
      organizedData[title] = [obj.aggregate.mean];
    }
  }
  
  const calculateAverage = (array) =>(array.reduce((a, b) => a + b) / array.length).toFixed(2);

  Object.keys(organizedData).forEach((key) => {
    organizedData[key] = calculateAverage(organizedData[key]);
  });

  return (
    <table id="sorted-course-table">
      <thead>
        <tr>
          <th>Course</th>
          <th>Difficulty</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(organizedData)
          .sort((a, b) => a[1] - b[1])
          .map(([key, value]) => (
            <CourseDifficultyEntry key={key} name={key} value={value}></CourseDifficultyEntry>
          ))}
      </tbody>
    </table>
  );
};

export default SortedCoursesTable;
