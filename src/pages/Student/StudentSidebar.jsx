import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { IoAnalytics } from 'react-icons/io5';
import { GrResources } from 'react-icons/gr';
import { IoIosNotifications } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

import './StudentSidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger stays on screen always */}
      <button className="hamburger-student" onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </button>

      <div className={`student-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div>
          <h1 className="student-header">Student Dashboard</h1>
        </div>

        {/* horizontal line */}
        <hr />

        {/* Sidebar links */}
        <div className="s-inputs">
          <ul>
            {/* home link: dashboard */}
            <li className="s-input">
              <NavLink to="/student-dashboard" className="icon">
                <FaHome />
                <span> Dashboard</span>
              </NavLink>
            </li>

            {/* create profile */}
            <li className="s-input">
              <NavLink to="/student-dashboard/s-profile" className="icon">
                <FaUserEdit />
                <span>Create Profile</span>
              </NavLink>
            </li>

            {/* search job */}
            <li className="s-input">
              <NavLink to="/student-dashboard/s-job-search" className="icon">
                <FaSearch />
                <span>Search Job</span>
              </NavLink>
            </li>

            {/* notifications about new job postings */}
            <li className="s-input">
              <NavLink to="/student-dashboard/s-job-alert" className="icon">
                <IoIosNotifications />
                <span>Job Alert</span>
              </NavLink>
            </li>

            {/* Track Performance */}
            <li className="s-input">
              <NavLink
                to="/student-dashboard/s-track-performance"
                className="icon"
              >
                <FaChartBar />
                <span>Track Performance</span>
              </NavLink>
            </li>

            {/* placement analytics */}
            <li className="s-input">
              <NavLink to="/student-dashboard/s-analytics" className="icon">
                <IoAnalytics />
                <span>Placement Analytics</span>
              </NavLink>
            </li>

            {/* resources */}
            <li className="s-input">
              <NavLink to="/student-dashboard/s-resources" className="icon">
                <GrResources />
                <span>Resources & Guidance</span>
              </NavLink>
            </li>
            {/* notification */}
            <li className="s-input">
              <NavLink to="/student-dashboard/s-notification" className="icon">
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
