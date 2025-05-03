// Navbar.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/images/logo.png";


const Navbar = () => {
  return (
    <div className="hero-section-navbar">
      <nav className="navbar">
        <NavLink to="/logo">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">ABOUTUS</NavLink>
          </li>
          <li>
            <NavLink to="/service">SERVICE</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/faqs">FAQs</NavLink>
          </li>
          <li className="login">
            <NavLink to="/login">LOGIN</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
