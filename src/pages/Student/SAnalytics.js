import React from 'react';
import './StudentHome.css';

const SAnalytics = () => {
  return (
    <>
      <div className="stu-container">
        <h1 className="student-heading">Student Analytics</h1>

        <div className="s-analytics">
          <h2 className="text-xl font-semibold mb-2">Job Applications</h2>
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Google</td>
                <td>Frontend Developer</td>
                <td>Shortlisted</td>
              </tr>
              <tr>
                <td>Microsoft</td>
                <td>Node.js Developer</td>
                <td>Rejected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SAnalytics;
