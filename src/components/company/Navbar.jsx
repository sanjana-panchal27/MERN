import "./Navbar.css";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  // dropdown menu navigation
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <nav>
          <ul className="nav-list">
            <li className="div-name">
              <p>Welcome,</p>
              <h2>Rai University</h2>
            </li>

            {/* rightside navbar icon in one div: right-icon */}
            <div className="right-icon">
              {/* unique class for navbar notification icon */}
              <li className="nav-notification">
                <a href="/" className="nav-icon">
                  <IoIosNotifications />
                </a>
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

export default Navbar;
