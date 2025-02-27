import React from "react";
import "./AdminHome.css";
const AdminHome = () => {
  return (
    <>
      <div className="admin-container">
        <div className="a-grid-container">
          <div className="a-grid-box blue">
            <h2 className="a-grid-title">Total Students</h2>
            <p className="a-grid-p"> 51</p>
          </div>

          <div className="a-grid-box yellow">
            <h2 className="a-grid-title">Total Companies</h2>
            <p className="a-grid-p"> 50 </p>
          </div>

          {/* job offere recieved */}
          <div className="a-grid-box green">
            <h2 className="a-grid-title">Placed Students</h2>
            <p className="a-grid-p"> 11 </p>
          </div>

          {/* shortlisted application */}
          <div className="a-grid-box purple">
            <h2 className="a-grid-title">Placement Rate</h2>
            <p className="a-grid-p"> 3%</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
