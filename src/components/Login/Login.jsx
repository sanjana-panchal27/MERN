import React from "react";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Importing icons
import "./Login.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Login"); // Defualt to login
  const [userType, setUserType] = useState("Student"); // Dropdown state

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
      </div>

      {/* login */}
      <div className="inputs">
        {/* user type selection */}

        {/* dropdown menu cancel in signup page */}
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="input">
            <label>Select User Type:</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="Company">Company</option>
            </select>
          </div>
        )}

        {/* name cancel in login */}
        {action === "Login" ? (
          <div></div>
        ) : (
          // name input placeholder
          <div className="input">
            <FaUser className="icon" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        {/* email input*/}
        <div className="input">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="Email" />
        </div>

        {/* password input */}
        <div className="input">
          <FaLock className="icon" />
          <input type="password" placeholder="Password" />
        </div>

        {/* confirm password input */}
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <FaLock className="icon" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        )}

        {/*forgot password (visible only on login page)*/}
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot password?<span> Click here</span>
          </div>
        )}

        {/* submit btn Sign Up*/}
        <div className="submit-container">
          {action === "Sign Up" ? (
            <div
              className="submit signup-btn"
              onClick={() => setAction("Login")}
            >
              Sign Up
            </div>
          ) : (
            <div
              className="submit login-btn"
              onClick={() => setAction("Sign Up")}
            >
              Sign Up
            </div>
          )}

          {/* <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div> */}

          {/* Submit button LOGIN */}
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
