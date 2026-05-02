import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaHandshake, FaGlobe, FaBullseye, FaBuilding, FaUserTie } from 'react-icons/fa';
import './NavHome.css';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      {/* Page Header */}
      <section className="about-hero">
        <div className="hero-background-overlay"></div>
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-title">About <span className="text-gradient">Us</span></h1>
          <div className="header-underline"></div>
        </motion.div>
      </section>

      <section className="about-content">
        {/* Intro */}
        <motion.div 
          className="about-intro glass"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-icon-wrapper"><FaGraduationCap /></div>
          <p className="about-desc">
            At <strong>Rai University</strong>, we strive to bridge the gap between talented students and leading companies. 
            Our Placement Cell is dedicated to providing career opportunities, industry exposure, and skill development 
            programs to help students transition seamlessly into the professional world.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div 
          className="about-section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Our Mission</h2>
        </motion.div>

        <div className="mission-grid">
          <motion.div className="mission-card glass" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <FaHandshake className="mission-icon" />
            <p>Connect students with reputed organizations for internships and full-time job placements.</p>
          </motion.div>
          <motion.div className="mission-card glass" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <FaGlobe className="mission-icon" />
            <p>Enhance employability through training, workshops, and industry interactions.</p>
          </motion.div>
          <motion.div className="mission-card glass" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <FaBullseye className="mission-icon" />
            <p>Provide a seamless, transparent, and efficient placement process for all.</p>
          </motion.div>
        </div>

        {/* Offerings */}
        <motion.div 
          className="about-section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>What We Offer</h2>
        </motion.div>

        <div className="offerings-container">
          <motion.div 
            className="offering-card glass"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="offering-header">
              <FaUserTie className="offering-icon text-gradient" />
              <h3>For Students</h3>
            </div>
            <ul className="offering-list">
              <li>A user-friendly platform to explore job and internship opportunities.</li>
              <li>Profile management for easy application tracking and showcase.</li>
              <li>Direct access to industry mentorship and career guidance.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="offering-card glass"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="offering-header">
              <FaBuilding className="offering-icon text-gradient" />
              <h3>For Companies</h3>
            </div>
            <ul className="offering-list">
              <li>A structured hiring process to find highly skilled candidates quickly.</li>
              <li>Dedicated company profiles and streamlined job postings.</li>
              <li>Direct communication with potential hires through the platform.</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

