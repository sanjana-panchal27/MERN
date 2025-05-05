import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

const Setting = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/student-dashboard');
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <p>Here you can manage your profile, preferences, etc.</p>

      <div className="settings-section">
        <h3>Update Name</h3>
        <input type="text" placeholder="Enter new name" />
        <button>Save Name</button>
      </div>

      <div className="settings-section">
        <h3>Change Password</h3>
        <input type="password" placeholder="Current password" />
        <input type="password" placeholder="New password" />
        <input type="password" placeholder="Confirm new password" />
        <button>Change Password</button>
      </div>

      <div className="settings-section">
        <h3>Notification Preferences</h3>
        <label>
          <input type="checkbox" />
          Email Notifications
        </label>
        <label>
          <input type="checkbox" />
          SMS Alerts
        </label>
        <button>Save Preferences</button>
      </div>

      {/* Back to Dashboard Button */}
      <div className="back-btn-wrapper">
        <button className="back-btn" onClick={handleBack}>
          ⬅ Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Setting;
