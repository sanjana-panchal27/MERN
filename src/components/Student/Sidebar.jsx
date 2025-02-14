import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div>
          <h1 className="title">Student Dashboard</h1>
        </div>

        {/* horizontal line */}
        <hr />

        {/* Sidebar links */}
        <div className="inputs">
          <ul>
            {/* home link: dashboard */}
            <li className="input">
              <a href="/" className="icon">
                <FaHome />
                <span> Dashboard</span>
              </a>
            </li>

            {/* create profile */}
            <li className="input">
              <a href="/" className="icon">
                <FaUserEdit />
                <span>Create Profile</span>
              </a>
            </li>

            {/* search job */}
            <li className="input">
              <a href="/" className="icon">
                <FaSearch />
                <span>Search Job</span>
              </a>
            </li>

            {/* notifications about new job postings */}
            <li className="input">
              <a href="/" className="icon">
                <IoIosNotifications />
                <span>Job Alert</span>
              </a>
            </li>

            {/* Track Performance */}
            <li className="input">
              <a href="/" className="icon">
                <FaChartBar />
                <span>Track Performance</span>
              </a>
            </li>

            {/* placement analytics */}
            <li className="input">
              <a href="/" className="icon">
                <IoAnalytics />
                <span>Placement Analytics</span>
              </a>
            </li>

            {/* notification */}
            <li className="input">
              <a href="/" className="icon">
                <IoIosNotifications />
                <span>Notification</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
