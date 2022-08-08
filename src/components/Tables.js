import React from "react";
import PlannerTable from "./PlannerTable";

const Tables = ({ tablesData }) => {
  return (
    <div className="tables">
      <div className="semester-table">
        <h2>Fall</h2> <PlannerTable array={tablesData[0]} />
      </div>
      <div className="semester-table">
        <h2>Winter</h2> <PlannerTable array={tablesData[1]} />
      </div>
      <div className="semester-table">
        <h2>Spring</h2> <PlannerTable array={tablesData[2]} />
      </div>
      <div className="semester-table">
        <h2>Summer</h2> <PlannerTable array={tablesData[3]} />
      </div>
    </div>
  );
};

export default Tables;
