import React from "react";
import "./Navbar.css";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <h1>RU Logo</h1>
          </div>
          <nav>
            {/* navigation links */}
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Contact</li>
              <li>FAQs</li>

              {/* Login btn */}
              <li>Login</li>
            </ul>
            {/* dark/light mode toggle */}
            <div className="toggle-mode"></div>
          </nav>
        </div>
      </header>

      {/* main section */}
      <main>
        {/* <div className="img-slider">
          {/* slider images */}
        {/* <div>
            <img src="img1.jpg" alt="Image1"></img>
          </div>
        </div> */}
      </main>

      {/* footer */}
      <footer>
        <p>&copy; 2025 Rai University Placement Cell. All Rights Reserved.</p>
        <div className="social-media">
          <a href="/">
            <FaLinkedin className="linkedin-icon" />
          </a>

          <a href="/">
            <SiLeetcode className="leetcode-icon" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
