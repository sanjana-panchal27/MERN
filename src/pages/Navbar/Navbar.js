import React from "react";
import "./Navbar.css";
import logo from "../../Assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
        </NavLink>

        <div className="navbar">
          {/* navigation links */}
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
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

            {/* Login btn */}
            <li className="login">
              <NavLink to="/login"> LOGIN</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
