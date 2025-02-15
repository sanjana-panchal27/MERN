import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div>
          <h1 className="title">Admin Dashboard</h1>
        </div>

        {/* horizontal line */}
        <hr />

        {/* Sidebar links */}
        <div className="inputs">
          <ul>
            {/* home link */}
            <li className="input">
              <a href="/" className="icon">
                <FaHome />
                <span> Dashboard</span>
              </a>
            </li>

            {/* Students */}
            <li className="input">
              <a href="/" className="icon">
                <PiStudentFill />
                <span>Student</span>
              </a>
            </li>

            {/* company */}
            <li className="input">
              <a href="/" className="icon">
                <FaUser />
                <span>Company</span>
              </a>
            </li>

            {/* Track Performance */}
            <li className="input">
              <a href="/" className="icon">
                <FaChartBar />
                <span>Track Performance</span>
              </a>
            </li>

            {/* generate placement reports */}
            <li className="input">
              <a href="/" className="icon">
                <TbReportSearch />
                <span>Generate Placement Report</span>
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

export default AdminSidebar;
