import React from "react";
import "./StudentHome.css";
const SJobAlert = () => {
  return (
    <>
      <div className="stu-container">
        <h1>Job Alert</h1>

        <div className="s-job-alert">
          <div className="alert-1">
            <h2>Frontend Developer Intern</h2>
            <p>ABC Tech</p>
            <p>Remote</p>
            <p>Deadline: Feb 25,2025</p>
            <button className="alert-btn">Apply</button>
          </div>

          <div className="alert-2">
            <h2>MERN stack developer</h2>
            <p>Tech</p>
            <p>Internship</p>
            <p>Deadline: March 2,2025</p>
            <button className="alert-btn">Apply</button>
          </div>

          <div className="alert-3">
            <h2>Full stack developer</h2>
            <p>ABC Tech</p>
            <p>Full time</p>
            <p>Deadline: March 14,2025</p>
            <button className="alert-btn">Apply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SJobAlert;
