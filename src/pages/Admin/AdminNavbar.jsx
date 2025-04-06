import React, { useState } from "react";
import "./AdminNavbar.css";
import { FaUserCircle } from "react-icons/fa";
import ANotification from "./ANotification";

const AdminNavbar = ({ adminName }) => {
  // dropdown menu navigation
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <nav>
          <ul className="nav-list">
            <li className="div-name">
              <p>Welcome,</p>
              <h2>{adminName || "Name"}</h2>
            </li>

            {/* rightside navbar icon in one div: right-icon */}
            <div className="right-icon">
              {/* Notification Component */}
              <li className="nav-notification">
                <ANotification showCount={true} />
              </li>

              {/* usercircle profile */}
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
                        <a href="/">Profile</a>
                      </li>
                      <li>
                        <a href="/">Setting</a>
                      </li>
                      <li>
                        <a href="/">Log Out</a>
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

export default AdminNavbar;
