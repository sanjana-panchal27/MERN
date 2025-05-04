import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';
import { TbReportSearch } from 'react-icons/tb';
import { FaChartBar } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger stays on screen always */}
      <button className="hamburger-fixed" onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </button>

      <div className={`admin-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div>
          <h1 className="admin-header">Admin Dashboard</h1>
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
