import React from 'react';
import { NavLink } from 'react-router-dom';
import './CompanyHome.css';
const CAccess = () => {
  return (
    <>
      <div className="com-container">
        <h1>Access Student Profile</h1>

        <div className="c-access">
          <div className="student-list">
            <h3>Student Name</h3>
            <p>Email </p>
            <p>Education</p>
            <p>Skills</p>
            <p>Experience</p>
            <NavLink className="access-link">View Resume</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default CAccess;
