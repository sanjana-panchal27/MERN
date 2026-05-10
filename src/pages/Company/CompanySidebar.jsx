import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserEdit, FaSearch, FaCommentDots } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import './CompanySidebar.css';

const CompanySidebar = () => {
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
              className="modern-sidebar company-sidebar-theme"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            >
              <div className="sidebar-header">
                <h2>Company Portal</h2>
              </div>
              <div className="sidebar-links">
                <NavLink to="/company-dashboard" end className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaHome className="nav-icon" />
                  <span>Dashboard</span>
                </NavLink>
                <NavLink to="/company-dashboard/c-profile" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaUserEdit className="nav-icon" />
                  <span>Company Profile</span>
                </NavLink>
                <NavLink to="/company-dashboard/c-postjob" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <MdOutlineWork className="nav-icon" />
                  <span>Post a Job</span>
                </NavLink>
                <NavLink to="/company-dashboard/c-access" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaSearch className="nav-icon" />
                  <span>Access Students</span>
                </NavLink>
                <NavLink to="/company-dashboard/c-shortlist" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaSearch className="nav-icon" />
                  <span>Shortlisted</span>
                </NavLink>
                <NavLink to="/company-dashboard/c-feedback" className={({isActive}) => isActive ? "nav-item active" : "nav-item"} onClick={closeMobileSidebar}>
                  <FaCommentDots className="nav-icon" />
                  <span>Feedback</span>
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CompanySidebar;
