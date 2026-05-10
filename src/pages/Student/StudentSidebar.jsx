import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserEdit, FaSearch, FaChartBar } from 'react-icons/fa';
import { IoAnalytics } from 'react-icons/io5';
import { GrResources } from 'react-icons/gr';
import { IoIosNotifications } from 'react-icons/io';
import { HiMenuAlt2 } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import './StudentSidebar.css';

const Sidebar = () => {
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
              className="modern-sidebar"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            >
              <div className="sidebar-header">
                <h2>Student Portal</h2>
              </div>
              <div className="sidebar-links">
                <NavLink to="/student-dashboard" end className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaHome className="nav-icon" />
                  <span>Dashboard</span>
                </NavLink>
                <NavLink to="/student-dashboard/s-profile" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaUserEdit className="nav-icon" />
                  <span>Create Profile</span>
                </NavLink>
                <NavLink to="/student-dashboard/s-job-search" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaSearch className="nav-icon" />
                  <span>Search Job</span>
                </NavLink>
                <NavLink to="/student-dashboard/s-job-alert" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <IoIosNotifications className="nav-icon" />
                  <span>Job Alerts</span>
                </NavLink>
                <NavLink to="/student-dashboard/s-track-performance" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaChartBar className="nav-icon" />
                  <span>Track Performance</span>
                </NavLink>
                <NavLink to="/student-dashboard/s-analytics" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <IoAnalytics className="nav-icon" />
                  <span>Placement Analytics</span>
                </NavLink>
                <NavLink to="/student-dashboard/s-resources" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <GrResources className="nav-icon" />
                  <span>Resources</span>
                </NavLink>
                <NavLink to="/student-dashboard/s-notification" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <IoIosNotifications className="nav-icon" />
                  <span>Notifications</span>
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
