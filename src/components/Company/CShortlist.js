import React from "react";
import "./CompanyHome.css";
const CShortlist = () => {
  return (
    <>
      <div className="com-container">
        <h1>Shortlist Students</h1>

        <div className="c-shortlist">
          <h2>Student Profiles</h2>

          <div className="shortlist-stu-list">
            <h3>Student Name</h3>
            <p>Email</p>
            <p>Skills</p>
            <div className="shortlist-btn">
              <button className="shortlist">Shortlist</button>
              <button className="schedule">Schedule Interview</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CShortlist;
