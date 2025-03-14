import React from 'react';
import './Navbar.css';

import { NavLink } from 'react-router-dom';

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
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
