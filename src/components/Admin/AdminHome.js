import React from "react";
import "./AdminHome.css";  

import {
  FaUserGraduate,
  FaBuilding,
  FaChartBar,
  FaFileAlt,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const AdminHome = () => {
  const performanceData = [
    { month: "Jan", students: 5, companies: 3 },
    { month: "Feb", students: 8, companies: 4 },
    { month: "Mar", students: 12, companies: 6 },
    { month: "Apr", students: 15, companies: 8 },
    { month: "May", students: 18, companies: 10 },
    { month: "Jun", students: 20, companies: 12 },
  ];

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

        {/* Performance Charts */}
        <div className="charts-container">
          {/* Bar Chart */}
          <div className="chart-box">
            <h3>Student & Company Growth</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#4C4CD4" name="Students" />
                <Bar dataKey="companies" fill="#E4B02B" name="Companies" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="chart-box">
            <h3>Placement Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#24A148"
                  name="Placed Students"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
