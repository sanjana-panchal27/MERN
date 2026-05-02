import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUserTie, FaBuilding, FaChalkboardTeacher } from 'react-icons/fa';
import './NavHome.css';
import './AboutUs.css'; // Reuse some about us styles

const Service = () => {
  const techStack = [
    { name: 'MERN Stack', desc: 'MongoDB, Express, React, Node.js for scalable web applications.', color: '#4ade80' },
    { name: 'Cloud Computing', desc: 'AWS, Azure, and Google Cloud Platform for deployment and scaling.', color: '#60a5fa' },
    { name: 'AI & Machine Learning', desc: 'Python, TensorFlow, and PyTorch for intelligent solutions.', color: '#c084fc' },
    { name: 'Cybersecurity', desc: 'Ethical hacking and network security best practices.', color: '#f87171' },
  ];

  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background-overlay"></div>
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-title">Our <span className="text-gradient">Services</span></h1>
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
          <div className="about-icon-wrapper"><FaChalkboardTeacher /></div>
          <p className="about-desc">
            At <strong>Rai University Placement Cell</strong>, we provide a range of services to
            help students achieve their career goals and assist companies in finding the best talent.
          </p>
        </motion.div>

        {/* Offerings */}
        <motion.div 
          className="about-section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: '60px' }}
        >
          <h2>Our Offerings</h2>
        </motion.div>

        <div className="offerings-container">
          <motion.div 
            className="offering-card glass"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="offering-header">
              <FaUserTie className="offering-icon text-gradient" />
              <h3>For Students</h3>
            </div>
            <ul className="offering-list">
              <li><strong>Job & Internship Opportunities:</strong> Browse and apply for job listings from top companies.</li>
              <li><strong>Profile Management:</strong> Maintain an updated resume and portfolio for recruiters.</li>
              <li><strong>Career Counseling:</strong> Get expert guidance on career choices, resume building, and interview preparation.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="offering-card glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="offering-header">
              <FaBuilding className="offering-icon text-gradient" />
              <h3>For Companies</h3>
            </div>
            <ul className="offering-list">
              <li><strong>Job Posting:</strong> Post job openings and manage applications efficiently.</li>
              <li><strong>Recruitment Drives:</strong> Conduct placement drives both online and offline.</li>
              <li><strong>Brand Collaboration:</strong> Partner with Rai University to promote job opportunities and internships.</li>
            </ul>
          </motion.div>
        </div>

        {/* Interactive New Technology Section */}
        <motion.div 
          className="about-section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: '60px' }}
        >
          <h2><FaLaptopCode className="inline-icon"/> Emerging <span className="text-gradient">Technologies</span></h2>
          <p className="subtitle">We prepare our students for the future with interactive training in cutting-edge tech.</p>
        </motion.div>

        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <motion.div 
              key={index}
              className="tech-card glass"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 0 20px ${tech.color}40`,
                borderColor: tech.color
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3 style={{ color: tech.color, marginBottom: '10px' }}>{tech.name}</h3>
              <p>{tech.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="s-msg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ marginTop: '80px', textAlign: 'center' }}
        >
          <h2>
            Our goal is to ensure a smooth and transparent placement process for
            both students and recruiters. 🚀
          </h2>
        </motion.div>
      </section>
    </div>
  );
};

export default Service;

