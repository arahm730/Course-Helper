import React, { useState } from "react";
import CourseDropDown from "../components/CourseDropDown";
import Navigation from "../components/Navigation";
import "./PlannerPage.css";
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import AlertBox from "../components/AlertBox";
import Tables from "../components/Tables";

const Planner = ({ courseFiveYearData, courseData }) => {
  const [array, setArray] = useState([]);
  const [fallArray, setFallArray] = useState([]);
  const [winterArray, setWinterArray] = useState([]);
  const [springArray, setSpringArray] = useState([]);
  const [summerArray, setSummerArray] = useState([]);
  const [lastAddedArray, setLastAddedArray] = useState([]);
  const [displayedSemester, setDisplayedSemester] = useState("Fall");
  const [clickedCourse, setClickedCourse] = useState("161");

  const sortedFiveYearData = courseFiveYearData
    .filter(
      (entry) => 2018 <= parseInt(entry.year) && parseInt(entry.year) <= 2022
    )
    .sort((a, b) => a.year - b.year || a.course.id - b.course.id);

  const difficulties = sortedFiveYearData
    .filter((element) => element.course.id === clickedCourse)
    .map((obj) => parseFloat(obj.aggregate.mean));

  const average =
    difficulties.reduce((a, b) => a + b) / difficulties.length.toFixed(2);

  const handleAddClick = () => {
    let entry = {
      semester: displayedSemester,
      course: clickedCourse,
      difficulty: average,
    };
    let specificEntry = { course: clickedCourse, difficulty: average };
    setArray((array) => [...array, entry]);
    fillArrayOnAdd(displayedSemester, specificEntry);
  };

  // adds the clicked course to the designated semester array and last added array
  const fillArrayOnAdd = (chosenSemester, entry) => {
    if (chosenSemester === "Fall") {
      setFallArray((fallArray) => [...fallArray, entry]);
      setLastAddedArray(fallArray);
    } else if (chosenSemester === "Winter") {
      setWinterArray((winterArray) => [...winterArray, entry]);
      setLastAddedArray(winterArray);
    } else if (chosenSemester === "Spring") {
      setSpringArray((springArray) => [...springArray, entry]);
      setLastAddedArray(springArray);
    } else if (chosenSemester === "Summer") {
      setSummerArray((summerArray) => [...summerArray, entry]);
      setLastAddedArray(summerArray);
    }
  };

  const handleUndoClick = () => {
    let lastAddition = array.pop();
    if (lastAddition === undefined) return;
    setArrayOnUndo(lastAddition.semester);
  };

  // remove the clicked course from its designated array
  const setArrayOnUndo = (lastAddedSemester) => {
    if (lastAddedSemester === "Fall") {
      setFallArray((fallArray) => [
        ...fallArray.slice(0, fallArray.length - 1),
      ]);
    } else if (lastAddedSemester === "Winter") {
      setWinterArray((winterArray) => [
        ...winterArray.slice(0, winterArray.length - 1),
      ]);
    } else if (lastAddedSemester === "Spring") {
      setSpringArray((springArray) => [
        ...springArray.slice(0, springArray.length - 1),
      ]);
    } else if (lastAddedSemester === "Summer") {
      setSummerArray((summerArray) => [
        ...summerArray.slice(0, summerArray.length - 1),
      ]);
    }
  };

  const handleSemesterChange = (event) => {
    setDisplayedSemester(event.target.value);
  };

  const tablesData = [fallArray, winterArray, springArray, summerArray];

  return (
    <div>
      <Navigation />
      <h1>Plan out the most effective schedule for you!</h1>

      <div className="selections">
        <div id="first" className="child-div">
          <label htmlFor="semester">Choose a semester:</label>
          <select value={displayedSemester} onChange={handleSemesterChange}>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
          </select>
        </div>
        <div className="child-div">
          <CourseDropDown
            setClickedCourse={setClickedCourse}
            courseData={courseData}
          />
        </div>
        <Button
          variant="success"
          id="add-button"
          type="button"
          onClick={handleAddClick}
        >
          Add
        </Button>
        <OverlayTrigger
          delay={{ hide: 450, show: 300 }}
          overlay={(props) => (
            <Tooltip {...props}>Added the wrong class? Just undo!</Tooltip>
          )}
          placement="top"
        >
          <Button
            variant="danger"
            id="undo-button"
            type="button"
            onClick={handleUndoClick}
          >
            Undo
          </Button>
        </OverlayTrigger>
      </div>
      {lastAddedArray.length > 3 && (
        <div>
          <AlertBox lastAddedArray={lastAddedArray} />
        </div>
      )}
      <Tables tablesData={tablesData} />
    </div>
  );
};

export default Planner;
