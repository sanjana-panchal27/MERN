import React from "react";
import "./NavHome.css";
import {
  FaHandshake,
  FaRocket,
  FaBriefcase,
  FaUserFriends,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { img1, img2, img3, img4, img5, img6, img7 } from "../../Assets/images";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <header className="hero-header">
          <div className="hero-img">
            <NavLink to="/">
              <img src={img1} alt="logo" className="img1" />
            </NavLink>

            <NavLink to="/">
              <img src={img2} alt="logo" className="img2" />
            </NavLink>

            <NavLink to="/">
              <img src={img3} alt="logo" className="img3" />
            </NavLink>
          </div>

          <h2>Unlocking potential, creating opportunities</h2>
          <p>Where students and recruiters unite!</p>

          <button className="hero-btn">
            <NavLink to="/login">Get Started </NavLink>
          </button>
        </header>
      </div>

      <div className="home-sec">
        <div className="home-company">
          <section>
            <div className="text-container">
              <FaHandshake className="home-icon" />
              <h3 className="head-3">Top Companies Hiring</h3>
              <p className="home-para">
                We partner with leading companies to offer the best career
                opportunities.
              </p>
            </div>
            <NavLink to="/">
              <img src={img4} alt="logo" className="images" />
            </NavLink>
          </section>
        </div>

        <div className="success-stories">
          <section>
            <NavLink to="/">
              <img src={img5} alt="logo" className="images" />
            </NavLink>
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

            <NavLink to="/">
              <img src={img6} alt="logo" className="images" />
            </NavLink>
          </section>
        </div>

        <div className="testimonials">
          <section>
            <NavLink to="/">
              <img src={img7} alt="logo" className="images" />
            </NavLink>
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
