import React from 'react'
import CourseDropDown from './CourseDropDown'
import Searchbar from "../components/Searchbar";
import "./CourseSelection.css"

const CourseSelection = ({setClickedCourse}) => {
  return (
    <div className='selection'>
      <CourseDropDown setClickedCourse={setClickedCourse} /> <span>or</span>
      <Searchbar setClickedCourse={setClickedCourse} />
    </div>
  );
};

export default CourseSelection