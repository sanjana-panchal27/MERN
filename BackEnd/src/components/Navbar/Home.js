import React from "react";
import "./NavHome.css";
import { FaHandshake } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <header className="hero-header">
          <h2>Unlocking potential, creating opportunities</h2>
          <p>Where students and recruiters unite!</p>
          <button className="hero-btn">Get Started</button>
        </header>
      </div>
      <div className="home-sec">
        <div className="home-company">
          <section>
            <FaHandshake className="home-icon" />
            <h3 className="head-3">Top Companies Hiring</h3>
            <p className="home-para">
              We partner with leading companies to offer the best career
              opportunities.
            </p>
          </section>
        </div>

        <div className="success-stories">
          <section>
            <FaRocket className="home-icon" />
            <h3 className="head-3">Success Stories</h3>
            <p className="home-para">
              Hear from students who landed their dream jobs through RU
              Placement Cell.
            </p>
          </section>
        </div>

        <div className="career-guid">
          <section>
            <FaBriefcase className="home-icon" />
            <h3 className="head-3">Career Guidance</h3>
            <p className="home-para">
              Get Expert Advice and resources to enhance your career journey.
            </p>
          </section>
        </div>

        <div className="testimonials">
          <section>
            <FaUserFriends className="home-icon" />
            <h3 className="head-3">Testimonials</h3>
            <p className="home-para">
              Hear from our students and recruiters about their experience.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
