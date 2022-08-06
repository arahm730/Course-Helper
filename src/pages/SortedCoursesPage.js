import React from 'react'
import Navigation from '../components/Navigation'
import SortedCoursesTable from '../components/SortedCoursesTable'
import "./SortedCoursePage.css"

const SortedCoursesPage = ({courseFiveYearData}) => {
  return (
    <div>
      <Navigation />
      <h1>All Courses Sorted by Difficulty</h1>
      <SortedCoursesTable courseFiveYearData={courseFiveYearData}/>
    </div>
  );
}

export default SortedCoursesPage