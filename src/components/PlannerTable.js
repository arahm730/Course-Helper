import React from 'react'
import PlannerEntry from './PlannerEntry';
import "./PlannerTable.css"

const PlannerTable = ({ array }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {array.map((entry, i) => (
            <PlannerEntry entry={entry} key={entry.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PlannerTable;