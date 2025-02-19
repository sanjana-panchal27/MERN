import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import "./StuSidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="stu-sidebar">
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
              <NavLink to="/" className="icon">
                <FaHome />
                <span> Dashboard</span>
              </NavLink>
            </li>

            {/* create profile */}
            <li className="input">
              <NavLink to="/" className="icon">
                <FaUserEdit />
                <span>Create Profile</span>
              </NavLink>
            </li>

            {/* search job */}
            <li className="input">
              <NavLink to="/" className="icon">
                <FaSearch />
                <span>Search Job</span>
              </NavLink>
            </li>

            {/* notifications about new job postings */}
            <li className="input">
              <NavLink to="/" className="icon">
                <IoIosNotifications />
                <span>Job Alert</span>
              </NavLink>
            </li>

            {/* Track Performance */}
            <li className="input">
              <NavLink to="/" className="icon">
                <FaChartBar />
                <span>Track Performance</span>
              </NavLink>
            </li>

            {/* placement analytics */}
            <li className="input">
              <NavLink to="/" className="icon">
                <IoAnalytics />
                <span>Placement Analytics</span>
              </NavLink>
            </li>

            {/* notification */}
            <li className="input">
              <NavLink to="/" className="icon">
                <IoIosNotifications />
                <span>Notification</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
