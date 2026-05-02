import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="text-gradient">RU Placement Cell</h2>
          <p className="footer-tagline">Empowering careers, connecting futures.</p>
        </div>

        <div className="footer-social">
          <a href="/" className="social-icon"><FaLinkedin /></a>
          <a href="/" className="social-icon"><SiLeetcode /></a>
          <a href="/" className="social-icon"><FaTwitter /></a>
          <a href="/" className="social-icon"><FaInstagram /></a>
        </div>

        <div className="footer-newsletter">
          <div className="input-container">
            <input
              className="footer-input"
              placeholder="Enter your email"
            />
            <button className="news-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RU Placement Cell. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

