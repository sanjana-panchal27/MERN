import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosNotifications } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import './StudentNavbar.css';

const StuNav = ({ studentName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="modern-navbar">
      <div className="navbar-left">
        <p className="welcome-text">Welcome back,</p>
        <h2 className="user-name">{studentName || 'Student'}</h2>
      </div>

      <div className="navbar-right">
        <button className="nav-icon-btn">
          <IoIosNotifications />
          <span className="notification-dot"></span>
        </button>

        <div className="profile-menu-container">
          <button
            className="profile-trigger"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaUserCircle className="profile-icon" />
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                className="modern-dropdown"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="dropdown-header">
                  <strong>{studentName || 'Student'}</strong>
                  <span>Student Portal</span>
                </div>
                <div className="dropdown-divider"></div>
                <NavLink to="/settings" state={{ userType: 'student' }} className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <FiSettings /> Settings
                </NavLink>
                <NavLink to="/logout" className="dropdown-item text-danger" onClick={() => setDropdownOpen(false)}>
                  <FiLogOut /> Log Out
                </NavLink>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default StuNav;
