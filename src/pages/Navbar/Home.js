import React, { useEffect, useState } from 'react';
import './NavHome.css';
import {
  FaHandshake,
  FaRocket,
  FaBriefcase,
  FaUserFriends,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { img1, img3, img4, img5, img6, img7 } from '../../Assets/images';

const Home = () => {
  const images = [img1, img3, img4, img5, img6, img7]; // add more as needed
  const [currentIndex, setCurrentIndex] = useState(0);

  const getIndex = (offset) =>
    (currentIndex + offset + images.length) % images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="hero-section">
        <header className="hero-header">
          <div className="slider-wrapper">
            <img
              src={images[getIndex(-1)]}
              alt="Left Slide"
              className="slider-img small"
            />
            <img
              src={images[getIndex(0)]}
              alt="Center Slide"
              className="slider-img active"
            />
            <img
              src={images[getIndex(1)]}
              alt="Right Slide"
              className="slider-img small"
            />
          </div>

          <h2>Unlocking potential, creating opportunities</h2>
          <p>Where students and recruiters unite!</p>

          <button className="hero-btn">
            <NavLink to="/login">Get Started</NavLink>
          </button>
        </header>
      </div>

      <div className="home-sec">
        {/* Home Company Section */}
        <div className="home-company">
          <section className="section-container">
            <div className="text-container">
              <FaHandshake className="home-icon" />
              <h3 className="head-3">Top Companies Hiring</h3>
              <p className="home-para">
                We partner with leading companies to offer the best career
                opportunities. RU Placement Cell connects students with top-tier
                recruiters from various domains, including IT, Pharmacy, and
                Science, Design, and more. Our system ensures a smooth hiring
                process through a user-friendly interface for students,
                companies, and admin panels. we make sure students are always
                one step closer to their dream careers. Built with the MERN
                stack, our platform is scalable — tailored to support the
                placement goals of every student at RU.
              </p>
            </div>

            <img src={img4} alt="logo" className="images" />
          </section>
        </div>

        {/* Success Stories Section */}
        <div className="success-stories">
          <section className="section-container">
            <img src={img5} alt="logo" className="images" />
            <div className="text-container">
              <FaRocket className="home-icon" />
              <h3 className="head-3">Success Stories</h3>
              <p className="home-para">
                Hear from students who landed their dream jobs through RU
                Placement Cell. Through interactive dashboards, students stay
                informed and prepared for every opportunity. The placement cell
                not only supports job applications but also enhances student
                confidence by offering a smooth, reliable, and tech-driven
                journey toward career success.
              </p>
            </div>
          </section>
        </div>

        {/* Career Guidance Section */}
        <div className="career-guid">
          <section className="section-container">
            <div className="text-container">
              <FaBriefcase className="home-icon" />
              <h3 className="head-3">Career Guidance</h3>
              <p className="home-para">
                Get expert advice and resources to enhance your career journey.
                RU Placement Cell goes beyond just placements — we provide
                students with the mentorship and guidance needed to build
                long-term career success. From resume-building workshops and
                mock interviews to personalized counseling sessions, we ensure
                every student is industry-ready. The platform also includes
                curated content on career planning, skill development, and
                interview preparation strategies. Whether you're exploring your
                first job or planning future growth, our system is designed to
                support every step of your career path.
              </p>
            </div>
            <NavLink to="/">
              <img src={img6} alt="logo" className="images" />
            </NavLink>
          </section>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <section className="section-container">
            <NavLink to="/">
              <img src={img7} alt="logo" className="images" />
            </NavLink>
            <div className="text-container">
              <FaUserFriends className="home-icon" />
              <h3 className="head-3">Testimonials</h3>
              <p className="home-para">
                Hear from our students and recruiters about their experience.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
