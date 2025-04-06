import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./StudentNavbar.css";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const StuNav = ({ studentName }) => {
  // dropdown menu navigation
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <nav>
          <ul className="nav-list">
            <li className="div-name">
              <p>Welcome,</p>
              <h2>{studentName || "StudentName"}</h2>
            </li>

            {/* rightside navbar icon in one div: right-icon */}
            <div className="right-icon">
              {/* unique class for navbar notification icon */}
              <li className="nav-notification">
                <NavLink to="/" className="nav-icon">
                  <IoIosNotifications />
                </NavLink>
              </li>

              {/* usercicle profile */}
              <div className="user-profile">
                <button
                  className="profile-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <FaUserCircle className="profile-icon" />
                </button>

                {/* profile drop-down menu*/}
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <NavLink to="/">Profile</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Setting</NavLink>
                      </li>
                      <li>
                        <NavLink to="/logout">Log Out</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default StuNav;
