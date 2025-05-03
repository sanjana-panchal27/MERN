import React from 'react';
import './Auth.css';
import resetImg from '../../Assets/images/resetps.jpeg';
import { NavLink } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <>
      <div className="reset-password-container">
        <div className="reset-password-grid">
          <div className="image-side">
            <img
              src={resetImg}
              alt="Reset Password Illustration"
              className="reset-password-image"
            />
          </div>

          <div className="reset-password-box">
            <h2>Reset Your Password</h2>
            <p>Please enter your new password below.</p>
            <input
              type="password"
              placeholder="New Password"
              className="reset-input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="reset-input"
            />
            <button className="reset-button">Reset Password</button>

            <NavLink to="/" className="back-to-login">
              Back to Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
