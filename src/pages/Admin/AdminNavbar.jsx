import React, { useState } from 'react';
import './AdminNavbar.css';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const AdminNavbar = ({ adminName }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [showCount, setShowCount] = useState(true);
  const [notificationCount, setNotificationCount] = useState(3);

  const notifications = [
    'New student registered',
    'Company profile approved',
    'Job posted by TCS',
  ];

  return (
    <>
      <div className="admin-navbar">
        <nav>
          <ul className="nav-list">
            <li className="div-name">
              <p className="admin-welcome">Welcome,</p>
              <h2>{adminName || 'Name'}</h2>
            </li>

            <div className="right-icon">
              <div style={{ position: 'relative' }}>
                <button
                  className="admin-notification"
                  onClick={() => setNotifOpen(!notifOpen)}
                >
                  <IoIosNotifications size={24} />
                  {showCount && notificationCount > 0 && (
                    <span className="notification-count">
                      {notificationCount}
                    </span>
                  )}
                </button>

                {notifOpen && (
                  <div className="notification-dropdown">
                    <h4>Notifications</h4>
                    <ul>
                      {notifications.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                    <button
                      className="clear-btn"
                      onClick={() => {
                        setNotificationCount(0);
                        setShowCount(false);
                        setNotifOpen(false);
                      }}
                    >
                      Clear All
                    </button>
                  </div>
                )}
              </div>

              <div className="user-profile">
                <button
                  className="profile-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <FaUserCircle className="profile-icon" />
                </button>

                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <NavLink to="/settings" state={{ userType: 'admin' }}>
                          Setting
                        </NavLink>
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

export default AdminNavbar;
