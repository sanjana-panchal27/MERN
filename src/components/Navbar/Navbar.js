import React from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

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
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">AboutUs</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/faqs">FAQs</NavLink>
              </li>

              {/* Login btn */}
              <li>Login</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
