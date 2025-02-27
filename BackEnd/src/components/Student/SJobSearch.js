import React from "react";
import "./StudentHome.css";
const SJobSearch = () => {
  return (
    <>
      <div className="stu-container">
        <h1>Job Search</h1>

        <div className="s-job-search">
          <input
            type="text"
            className="search"
            placeholder="Search for jobs.."
          ></input>

          <button className="search-btn">Search</button>

          <div className="s-filter-opt">
            <select className="s-filter">
              <option value="all">All</option>
              <option value="engineering">Engineering</option>
              <option value="pharmacy">Pharmacy</option>
              <option value="management">Management</option>
              <option value="Design">Design</option>
              <option value="law">Law</option>
            </select>
          </div>

          <div className="s-cards">
            <h2>Frontend Developer</h2>
            <p>Google</p>
            <p>Remote</p>
            <p>Full Time</p>
            <button>Apply</button>

            <h2>UI/UX Designer</h2>
            <p>Accenture</p>
            <p>Remote</p>
            <p>Full Time</p>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SJobSearch;
