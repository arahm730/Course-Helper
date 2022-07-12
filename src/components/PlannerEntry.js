import React from "react";
import "./PlannerEntry.css";

const PlannerEntry = ({ entry }) => {
  return (
    <tr>
      <td>{entry.course}</td>
      <td>
        {entry.difficulty ? entry.difficulty.toFixed(2) : entry.difficulty}
      </td>
    </tr>
  );
};

export default PlannerEntry;
