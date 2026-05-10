import React from "react";
import { motion } from "framer-motion";
import "./StudentHome.css";
import { FaBriefcase, FaRegEdit } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { RiFilePaperFill } from "react-icons/ri";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { IoAnalyticsSharp } from "react-icons/io5";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StudentHome = () => {
  return (
    <motion.div
      className="modern-dashboard-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="dashboard-header">
        <motion.h1 variants={itemVariants} className="dashboard-title">
          Student Dashboard
        </motion.h1>
        <motion.p variants={itemVariants} className="dashboard-subtitle">
          Welcome back, Sanjana. Here's what's happening today.
        </motion.p>
      </div>

      <div className="dashboard-grid">
        {/* Left Column */}
        <div className="dashboard-left-col">
          {/* Profile Card */}
          <motion.div variants={itemVariants} className="modern-card profile-card-glass">
            <div className="profile-header">
              <div className="profile-avatar">SP</div>
              <div>
                <h2>Sanjana Panchal</h2>
                <p>B.Sc.IT | CSA Department</p>
              </div>
            </div>
            <div className="profile-details">
              <div className="detail-item">
                <span className="label">UID</span>
                <span className="value">123456789</span>
              </div>
              <div className="detail-item">
                <span className="label">Status</span>
                <span className="value status-active">Active</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="stats-grid">
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card blue-glass">
              <h3>Applied Jobs</h3>
              <p className="stat-value">5</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card green-glass">
              <h3>Offers Received</h3>
              <p className="stat-value">3</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card yellow-glass">
              <h3>Shortlisted</h3>
              <p className="stat-value">3</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card purple-glass">
              <h3>Interviews</h3>
              <p className="stat-value">5</p>
            </motion.div>
          </motion.div>

          {/* Placement Analytics */}
          <motion.div variants={itemVariants} className="modern-card analytics-card">
            <div className="card-header">
              <IoAnalyticsSharp className="card-icon" />
              <h2>Placement Analytics</h2>
            </div>
            <div className="card-body">
              <p className="placeholder-text">
                Your profile is ranking in the top 15% of students in your department. Keep applying to increase your chances!
              </p>
              <div className="analytics-progress-bar">
                <motion.div 
                  className="analytics-progress-fill" 
                  initial={{ width: 0 }} 
                  animate={{ width: "85%" }} 
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
              <p className="analytics-hint">85% Profile Completion</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="dashboard-right-col">
          {/* Job Opportunities */}
          <motion.div variants={itemVariants} className="modern-card jobs-card">
            <div className="card-header">
              <FaBriefcase className="card-icon" />
              <h2>New Opportunities</h2>
            </div>
            <ul className="modern-list">
              <li className="list-item">
                <div className="item-content">
                  <h4>Software Engineer</h4>
                  <p>Google • Deadline: April 15</p>
                </div>
                <span className="badge new-badge">New</span>
              </li>
              <li className="list-item">
                <div className="item-content">
                  <h4>UI/UX Internship</h4>
                  <p>Microsoft • Deadline: March 1</p>
                </div>
                <span className="badge hot-badge">Hot</span>
              </li>
              <li className="list-item">
                <div className="item-content">
                  <h4>Data Analyst</h4>
                  <p>Amazon • Deadline: April 2</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Notifications */}
          <motion.div variants={itemVariants} className="modern-card notifications-card">
            <div className="card-header">
              <AiFillNotification className="card-icon" />
              <h2>Notifications & Updates</h2>
            </div>
            <ul className="modern-list">
              <li className="list-item">
                <div className="icon-wrapper blue-icon">
                  <FaRegEdit />
                </div>
                <div className="item-content">
                  <h4>Aptitude Test Scheduled</h4>
                  <p>Feb 26, 10:00 AM - Lab 3</p>
                </div>
              </li>
              <li className="list-item">
                <div className="icon-wrapper green-icon">
                  <AiFillNotification />
                </div>
                <div className="item-content">
                  <h4>New Placement Drive</h4>
                  <p>Infosys - Apply by Feb 28</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="modern-card resources-card">
            <div className="card-header">
              <RiFilePaperFill className="card-icon" />
              <h2>Resources & Guidance</h2>
            </div>
            <div className="resource-links">
              <motion.a whileHover={{ x: 5 }} href="#" className="resource-btn">
                <RiFilePaperFill className="btn-icon" /> Resume Building Guide
              </motion.a>
              <motion.a whileHover={{ x: 5 }} href="#" className="resource-btn">
                <PiMicrophoneStageFill className="btn-icon" /> Interview Prep Tips
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentHome;
