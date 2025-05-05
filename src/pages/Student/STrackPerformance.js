import React from "react";
import "./StudentHome.css";

const STrackPerformance = () => {
  return (
    <>
      <div className="stu-container">
        <h1 className="student-heading">Track Performance</h1>

        <div className="s-track">
          <h2>React Developer</h2>
          <button>Pending</button>

          <h2>Java Developer</h2>
          <button>Shortlisted</button>
        </div>
      </div>
    </>
  );
};

export default STrackPerformance;
