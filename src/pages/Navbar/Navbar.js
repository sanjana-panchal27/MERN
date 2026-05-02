import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import './Navbar.css';
// import logo from '../../Assets/images/logo.png';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar glass sticky-nav">
      <div className="navbar-brand">
        <h2 className="text-gradient">RU Placement</h2>
      </div>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">ABOUT US</NavLink>
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
        <li className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </li>
        <li className="login">
          <NavLink to="/login">LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
