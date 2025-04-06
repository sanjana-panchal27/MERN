import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import "./AdminHome.css";  


const ANotifications = ({ showCount }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "A new student has registered." },
    { id: 2, message: "XYZ Company has added a new job posting." },
    { id: 3, message: "Student ABC has been placed at XYZ Company." },
    { id: 4, message: "A new placement report has been generated." },
    { id: 5, message: "Server maintenance scheduled for tomorrow." },
    { id: 6, message: "Company ABC has sent a message." },
    { id: 7, message: "5 students have applied for XYZ job." },
    { id: 8, message: "Admin meeting scheduled for Friday." },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="notification-container">
      {/* Notification Bell Icon */}
      <button className="notification-icon" onClick={() => setIsOpen(!isOpen)}>
        <IoIosNotifications />
        {showCount && notifications.length > 0 && (
          <span className="notification-count">{notifications.length}</span>
        )}
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="notification-dropdown">
          <h4>Notifications</h4>
          <ul>
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <li key={notif.id}>{notif.message}</li>
              ))
            ) : (
              <li>No new notifications</li>
            )}
          </ul>
          <button className="clear-btn" onClick={() => setNotifications([])}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default ANotifications;
