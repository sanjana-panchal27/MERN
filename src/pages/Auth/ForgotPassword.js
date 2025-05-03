import React from 'react';
import './Auth.css';
import forgotImg from '../../Assets/images/forgotps.jpeg';
import { NavLink, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSendResetLink = () => {
    // Simulate sending email
    alert("Reset link sent to your email!");
    navigate("/reset-password/sampletoken123"); // Simulate email click
  };

  return (
    <>
      <div className="forgot-password-container">
        <div className="forgot-password-grid">
          <div className="image-side">
            <img
              src={forgotImg}
              alt="Confused Girl"
              className="forgot-password-image"
            />
          </div>

          <div className="forgot-password-box">
            <h2>Forgot Password?</h2>
            <p>
              Don't worry, we'll help you reset it. Enter your email address
              below.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="forgot-input"
            />
            <button className="forgot-button" onClick={handleSendResetLink}>
              Send Reset Link
            </button>

            <NavLink to="/" className="back-to-login">
              Back to Login
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
