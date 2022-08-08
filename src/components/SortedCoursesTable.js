import React from "react";
import CourseDifficultyEntry from "./CourseDifficultyEntry";
import "./SortedCourseTable.css";

const SortedCoursesTable = ({ courseFiveYearData }) => {
  const organizedData = {};

  // Creates an array of all courses over the past year, sorted by year and id
  const fiveYearData = courseFiveYearData
    .filter(
      (entry) => 2018 <= parseInt(entry.year) && parseInt(entry.year) <= 2022
    )
    .sort((a, b) => a.year - b.year || a.course.id - b.course.id);

  const ignorableCourse = (courseId) => {
    if (
      courseId === "165" ||
      courseId === "199" ||
      courseId === "231" ||
      courseId === "419/467"
    ) {
      return true;
    }
    return false;
  };

  // Creates an object where the key is the course name and the value is its average difficulty
  const fillOrganizedData = () => {
    for (const obj of fiveYearData) {
      if (ignorableCourse(obj.course.id)) continue;
      let title = `${obj.course.subject}${obj.course.id} ${obj.course.name}`;
      if (obj.course.id === "419") {
        title = `${obj.course.subject}467 ${obj.course.name}`;
      }
      if (title in organizedData) {
        organizedData[title].push(obj.aggregate.mean);
      } else {
        organizedData[title] = [obj.aggregate.mean];
      }
    }
  };

  fillOrganizedData();

  const calculateAverage = (array) =>
    (array.reduce((a, b) => a + b) / array.length).toFixed(2);

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
            <CourseDifficultyEntry
              key={key}
              name={key}
              value={value}
            ></CourseDifficultyEntry>
          ))}
      </tbody>
    </table>
  );
};

export default SortedCoursesTable;
