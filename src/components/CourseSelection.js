import React from 'react'
import CourseDropDown from './CourseDropDown'
import Searchbar from "../components/Searchbar";
import "./CourseSelection.css"

const CourseSelection = ({ setClickedCourse, courseData }) => {
  return (
    <div className="selection">
      <CourseDropDown setClickedCourse={setClickedCourse} courseData={courseData}/>
      <span>or</span>
      <Searchbar setClickedCourse={setClickedCourse} />
    </div>
  );
};

export default CourseSelection