import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './NavHome.css';
import {
  FaHandshake,
  FaRocket,
  FaBriefcase,
  FaUserFriends,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { img1, img3, img4, img5, img6, img7 } from '../../Assets/images';

const FeatureCard = ({ icon, title, description, image, reversed }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className={`feature-card glass ${reversed ? 'reversed' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="feature-text">
        <div className="feature-icon-wrapper">{icon}</div>
        <h3 className="feature-title text-gradient">{title}</h3>
        <p className="feature-desc">{description.substring(0, 150)}...</p>
        
        {/* Toggle Up Feature: Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="feature-expanded-content"
            >
              <p>{description.substring(150)}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          className="toggle-expand-btn" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <>Read Less <FaChevronUp/></> : <>Read More <FaChevronDown/></>}
        </button>
      </div>
      <div className="feature-image-wrapper">
        <img src={image} alt={title} className="feature-img" />
      </div>
    </motion.div>
  );
};

const Home = () => {
  const images = [img1, img3, img4, img5, img6, img7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Unlocking Potential, <br/> <span className="text-gradient">Creating Opportunities</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Where students and recruiters unite in a seamless, modern ecosystem.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <NavLink to="/login" className="hero-cta-btn">
              Get Started
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Dynamic Image Carousel */}
        <div className="hero-slider">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Hero Slider"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="hero-slider-img"
            />
          </AnimatePresence>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose RU Placement?</h2>
          <div className="header-underline"></div>
        </motion.div>

        <div className="features-grid">
          <FeatureCard 
            icon={<FaHandshake />}
            title="Top Companies Hiring"
            description="We partner with leading companies to offer the best career opportunities. RU Placement Cell connects students with top-tier recruiters from various domains, including IT, Pharmacy, and Science, Design, and more. Our system ensures a smooth hiring process through a user-friendly interface for students, companies, and admin panels. We make sure students are always one step closer to their dream careers. Built with the MERN stack, our platform is scalable — tailored to support the placement goals of every student at RU."
            image={img4}
            reversed={false}
          />

          <FeatureCard 
            icon={<FaRocket />}
            title="Success Stories"
            description="Hear from students who landed their dream jobs through RU Placement Cell. Through interactive dashboards, students stay informed and prepared for every opportunity. The placement cell not only supports job applications but also enhances student confidence by offering a smooth, reliable, and tech-driven journey toward career success."
            image={img5}
            reversed={true}
          />

          <FeatureCard 
            icon={<FaBriefcase />}
            title="Career Guidance"
            description="Get expert advice and resources to enhance your career journey. RU Placement Cell goes beyond just placements — we provide students with the mentorship and guidance needed to build long-term career success. From resume-building workshops and mock interviews to personalized counseling sessions, we ensure every student is industry-ready. The platform also includes curated content on career planning, skill development, and interview preparation strategies. Whether you're exploring your first job or planning future growth, our system is designed to support every step of your career path."
            image={img6}
            reversed={false}
          />

          <FeatureCard 
            icon={<FaUserFriends />}
            title="Testimonials"
            description="Hear from our students and recruiters about their experience. Building a community of trusted professionals and providing a platform for authentic feedback is at the core of our values. The shared experiences help future candidates navigate their paths successfully."
            image={img7}
            reversed={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

