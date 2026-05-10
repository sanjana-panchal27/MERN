import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosNotifications } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { FiSettings, FiLogOut } from 'react-icons/fi';
import './AdminNavbar.css';

const AdminNavbar = ({ adminName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="modern-navbar admin-navbar-theme">
      <div className="navbar-left">
        <p className="welcome-text">System Administrator,</p>
        <h2 className="user-name">{adminName || 'Admin'}</h2>
      </div>

      <div className="navbar-right">
        <button className="nav-icon-btn">
          <IoIosNotifications />
        </button>

        <div className="profile-menu-container">
          <button
            className="profile-trigger"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaUserCircle className="profile-icon admin-profile-icon" />
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
                  <strong>{adminName || 'Admin'}</strong>
                  <span>Admin Portal</span>
                </div>
                <div className="dropdown-divider"></div>
                <NavLink to="/settings" state={{ userType: 'admin' }} className="dropdown-item" onClick={() => setDropdownOpen(false)}>
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

export default AdminNavbar;
