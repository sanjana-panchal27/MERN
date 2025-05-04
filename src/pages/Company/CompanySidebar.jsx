import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserEdit, FaBriefcase } from 'react-icons/fa';
import { PiStudentBold } from 'react-icons/pi';
import { MdEventAvailable, MdFeedback } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

import './CompanySidebar.css';

const CompanySidebar = () => {
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

      <div className={`company-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h1 className="company-header">Company Dashboard</h1>
        </div>
        <hr />

        <div className="c-inputs">
          <ul>
            <li className="c-input">
              <NavLink to="/company-dashboard" className="icon">
                <FaHome />
                <span> Dashboard</span>
              </NavLink>
            </li>

            <li className="c-input">
              <NavLink to="/company-dashboard/c-profile" className="icon">
                <FaUserEdit />
                <span>Create Profile</span>
              </NavLink>
            </li>

            <li className="c-input">
              <NavLink to="/company-dashboard/c-postjob" className="icon">
                <FaBriefcase />
                <span>Post Job Openings</span>
              </NavLink>
            </li>

            <li className="c-input">
              <NavLink to="/company-dashboard/c-access" className="icon">
                <PiStudentBold />
                <span>Access Student Profiles</span>
              </NavLink>
            </li>

            <li className="c-input">
              <NavLink to="/company-dashboard/c-shortlist" className="icon">
                <MdEventAvailable />
                <span>Shortlist & Schedule Interview</span>
              </NavLink>
            </li>

            <li className="c-input">
              <NavLink to="/company-dashboard/c-feedback" className="icon">
                <MdFeedback />
                <span>Feedback</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CompanySidebar;
