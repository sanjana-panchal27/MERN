import React from "react";
import "./StudentHome.css";
const SAnalytics = () => {
  return (
    <>
      <div className="stu-container">
        <h1>Student Analytics</h1>

        <div className="s-analytics">
          <h2 className="text-xl font-semibold mb-2">Job Applications</h2>
          <table>
            <th>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
              </tr>

              <tr>
                <th>Google</th>
                <th>Frontend Developer</th>
                <th>Shoerlisted</th>
              </tr>

              <tr>
                <th>Microsft</th>
                <th>Node.js developer</th>
                <th>Rejected</th>
              </tr>
            </th>
          </table>
        </div>
      </div>
    </>
  );
};

export default SAnalytics;
