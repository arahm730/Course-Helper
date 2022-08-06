import React, { useState } from "react";
// import courses from "../data/courses.json";
import "./CourseDropDown.css";

const CourseDropDown = ({ setClickedCourse, courseData }) => {
  const allCourses = courseData
    .filter((course) => course.course.id !== "165" && course.course.id !== "199" &&
        course.course.id !== "231" && course.course.id !== "419/467")
    .sort((a, b) => (a.course.id > b.course.id ? 1 : -1))
    .map((course) => course.course.subject + course.course.id + " " + course.course.name);

  const [displayedCourse, setDisplayedCourse] = useState("CS161");
  const handleChange = (event) => {
    setDisplayedCourse(event.target.value);
  };

  return (
    <div className="dropdown">
      <label htmlFor="course">Choose a course:</label>
      <select id="course" value={displayedCourse} onChange={(e) => {
          setClickedCourse(e.target.value);
          handleChange(e);
        }}>
        {allCourses.map((course) => (
          // regex used so value has a 3 digit class number
          <option key={course} value={course.match(/\d/g).join("")}> {course}</option> 
        ))}
      </select>
    </div>
  );
};

export default CourseDropDown;
