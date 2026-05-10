import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaBuilding, FaChartLine, FaFileAlt } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { HiMenuAlt2 } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import './AdminSidebar.css';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button className="mobile-toggle-btn" onClick={toggleSidebar}>
        <HiMenuAlt2 />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileSidebar}
            />
            <motion.div 
              className="modern-sidebar admin-sidebar-theme"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            >
              <div className="sidebar-header">
                <h2>Admin Portal</h2>
              </div>
              <div className="sidebar-links">
                <NavLink to="/admin-dashboard" end className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaHome className="nav-icon" />
                  <span>Dashboard</span>
                </NavLink>
                <NavLink to="/admin-dashboard/a-manage-student" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaUsers className="nav-icon" />
                  <span>Manage Students</span>
                </NavLink>
                <NavLink to="/admin-dashboard/a-manage-company" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaBuilding className="nav-icon" />
                  <span>Manage Companies</span>
                </NavLink>
                <NavLink to="/admin-dashboard/a-track-performance" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaChartLine className="nav-icon" />
                  <span>Track Performance</span>
                </NavLink>
                <NavLink to="/admin-dashboard/a-reports" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaFileAlt className="nav-icon" />
                  <span>Generate Reports</span>
                </NavLink>
                <NavLink to="/admin-dashboard/a-notification" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <IoIosNotifications className="nav-icon" />
                  <span>System Alerts</span>
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminSidebar;
