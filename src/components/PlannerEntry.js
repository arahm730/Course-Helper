import React from "react";
import "./PlannerEntry.css";
import Checkbox from "@mui/material/Checkbox";

const PlannerEntry = ({ entry }) => {
  return (
    <tr>
      <td>{entry.course}</td>
      <td>
        {entry.difficulty ? entry.difficulty.toFixed(2) : entry.difficulty}
      </td>
      <td>
        <Checkbox />
      </td>
    </tr>
  );
};

export default PlannerEntry;
