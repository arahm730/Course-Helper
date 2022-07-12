import React, { useState } from "react";
import courses from "../data/courses.json";
import "./CourseDropDown.css"

const CourseDropDown = ({setClickedCourse}) => {
  const allCourses = courses
    .filter(
      (course) =>
        course.id !== "165" &&
        course.id !== "199" &&
        course.id !== "231" &&
        course.id !== "419/467"
    )
    .map((course) => course.subject + course.id + " " + course.name);

  const [displayedCourse, setDisplayedCourse] = useState("CS161");
  const handleChange = (event) => {
    setDisplayedCourse(event.target.value);
  };


  return (
    <div className="dropdown">
      <label htmlFor="course">Choose a course:</label>

      <select
        id="course"
        value={displayedCourse}
        onChange={(e) => {
          setClickedCourse(e.target.value);
          handleChange(e);
        }}
      >
        {allCourses.map((course) => (
          // regex used so value has a 3 digit class number
          <option value={course.match(/\d/g).join("")}>{course}</option>
        ))}
      </select>
    </div>
  );
};

export default CourseDropDown;
