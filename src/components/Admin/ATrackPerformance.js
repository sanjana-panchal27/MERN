import React from "react";
import "./AdminHome.css";

import { FiTrendingUp } from "react-icons/fi";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, Legend } from "recharts";

const chartData = [
  { month: "January", placed: 10, applied: 50 },
  { month: "February", placed: 15, applied: 65 },
  { month: "March", placed: 20, applied: 70 },
  { month: "April", placed: 18, applied: 60 },
  { month: "May", placed: 22, applied: 75 },
  { month: "June", placed: 25, applied: 80 },
];

const ATrackPerformance = () => {
  return (
    <div className="admin-container">
      <h1>Admin Track Performance</h1>

      <div className="track-hero">
        <div className="performance-card">
          <div className="performance-header">
            <h2>Placement Performance</h2>
            <p>January - June 2025</p>
          </div>

          <div className="performance-content">
            <BarChart width={500} height={300} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <Tooltip cursor={{ fill: "#f3f3f3" }} />
              <Legend />
              <Bar
                dataKey="placed"
                fill="#4CAF50"
                radius={4}
                name="Placed Students"
              />
              <Bar
                dataKey="applied"
                fill="#2196F3"
                radius={4}
                name="Applied Students"
              />
            </BarChart>
          </div>

          <div className="performance-footer">
            <div className="performance-trend">
              <span>Placement rate increasing</span>
              <FiTrendingUp className="icon" />
            </div>
            <p className="muted-text">
              Showing student placement trends over the last 6 months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATrackPerformance;
