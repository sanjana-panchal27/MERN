import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosNotifications } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import './CompanyNavbar.css';

const CompanyNavbar = ({ companyName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="modern-navbar company-navbar-theme">
      <div className="navbar-left">
        <p className="welcome-text">Partner Portal,</p>
        <h2 className="user-name">{companyName || 'Company'}</h2>
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
            <FaUserCircle className="profile-icon company-profile-icon" />
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
                  <strong>{companyName || 'Company'}</strong>
                  <span>Company Portal</span>
                </div>
                <div className="dropdown-divider"></div>
                <NavLink to="/settings" state={{ userType: 'company' }} className="dropdown-item" onClick={() => setDropdownOpen(false)}>
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

export default CompanyNavbar;
