import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <>
      <div className="admin-sidebar">
        <div>
          <h1 className="title">Admin Dashboard</h1>
        </div>

        {/* horizontal line */}
        <hr />

        {/* Sidebar links */}
        <div className="a-inputs">
          <ul>
            {/* home link */}
            <li className="a-input">
              <NavLink to="/admin-dashboard" className="icon">
                <FaHome />
                <span> Dashboard</span>
              </NavLink>
            </li>

            {/* Students */}
            <li className="a-input">
              <NavLink to="/admin-dashboard/a-manage-student" className="icon">
                <PiStudentFill />
                <span>Manage Student</span>
              </NavLink>
            </li>

            {/* company */}
            <li className="a-input">
              <NavLink to="/admin-dashboard/a-manage-company" className="icon">
                <FaUser />
                <span>Manage Company</span>
              </NavLink>
            </li>

            {/* Track Performance */}
            <li className="a-input">
              <NavLink
                to="/admin-dashboard/a-track-performance"
                className="icon"
              >
                <FaChartBar />
                <span>Track Performance</span>
              </NavLink>
            </li>

            {/* generate placement reports */}
            <li className="a-input">
              <NavLink to="/admin-dashboard/a-reports" className="icon">
                <TbReportSearch />
                <span>Generate Placement Report</span>
              </NavLink>
            </li>

            {/* notification */}
            {/* <li className="a-input">
              <NavLink to="/admin-dashboard/a-notification" className="icon">
                <IoIosNotifications />
                <span>Notification</span>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
