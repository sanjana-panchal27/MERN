import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import authService from "../utils/auth";
import "./Login.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Login"); // Default to login
  const [userType, setUserType] = useState("Student"); // Dropdown state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [apiStatus, setApiStatus] = useState("Checking API connection...");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Test API connection on component mount
  useEffect(() => {
    const testApi = async () => {
      try {
        // First check if the server is running at all
        const mainApiResponse = await fetch("http://localhost:5050/");
        if (mainApiResponse.ok) {
          try {
            // Then check if the auth routes are working
            const testResponse = await authService.testConnection();
            setApiStatus(`API connected: ${testResponse.message || "Success"}`);
          } catch (err) {
            setApiStatus(
              "Main API is running, but auth routes are not available"
            );
            console.error("Auth API test failed:", err);
          }
        } else {
          setApiStatus("API server is running but returned an error");
        }
      } catch (err) {
        setApiStatus(
          "Failed to connect to API. Please check if server is running."
        );
        console.error("API connection test failed:", err);
      }
    };


    testApi();
  }, []);

  // Modified section of your Login component

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
  
    try {
      // Trim whitespace from all inputs
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
      const trimmedName = name.trim();
  
      if (action === "Login") {
        console.log("Login attempt client-side:", {
          email: trimmedEmail,
          passwordLength: trimmedPassword.length,
          userType
        });
  
        // Make sure password isn't empty
        if (!trimmedPassword) {
          setError("Password cannot be empty");
          setIsLoading(false);
          return;
        }
  
        const response = await fetch("http://localhost:5050/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: trimmedEmail,
            password: trimmedPassword, // Send password as-is, no additional processing
            userType
          }),
          credentials: "include",
        });
  
        console.log("Raw response status:", response.status);
        
        const responseData = await response.json();
        console.log("API Response:", responseData);
  
        if (!response.ok) {
          throw new Error(
            responseData.message || "Login failed. Please try again."
          );
        }
  
        // Rest of your login success handling...
      } else {
        // Sign Up logic
        if (trimmedPassword !== confirmPassword.trim()) {
          setError("Passwords do not match");
          setIsLoading(false);
          return;
        }
  
        // Make sure password isn't empty
        if (!trimmedPassword) {
          setError("Password cannot be empty");
          setIsLoading(false);
          return;
        }
  
        console.log("Sign up attempt client-side:", {
          name: trimmedName,
          email: trimmedEmail,
          passwordLength: trimmedPassword.length,
          userType
        });
  
        // Call your signup function
        const signupResponse = await fetch("http://localhost:5050/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            password: trimmedPassword,
            userType
          })
        });
  
        const signupData = await signupResponse.json();
        
        if (!signupResponse.ok) {
          throw new Error(
            signupData.message || "Registration failed. Please try again."
          );
        }
  
        // Switch to login page after successful signup
        setAction("Login");
        setEmail(trimmedEmail);
        setPassword("");
        setError("Registration successful! Please login.");
      }
    } catch (err) {
      console.error("Authentication error:", err);
      setError(err.message || "Authentication failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div
          className="api-status"
          style={{
            fontSize: "12px",
            color: apiStatus.includes("connected") ? "green" : "red",
          }}
        >
          {apiStatus}
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
      <form className="hero-inputs" onSubmit={handleSubmit}>
        {action === "Sign Up" ? null : (
          <div className="hero-input">
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
        {action === "Login" ? null : (
          <div className="hero-input">
            <FaUser className="icon" />
            <input
              className="login-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="hero-input">
          <FaEnvelope className="icon" />
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="hero-input">
          <FaLock className="icon" />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {action === "Sign Up" && (
          <div className="hero-input">
            <FaLock className="icon" />
            <input
              className="login-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        {action === "Login" && (
          <div className="forgot-password">
            Forgot password?<span> Click here</span>
          </div>
        )}
        <div className="submit-container">
          {action === "Login" ? (
            <button
              type="button"
              className="submit signup-btn"
              onClick={() => setAction("Sign Up")}
            >
              Sign Up
            </button>
          ) : (
            <button
              type="button"
              className="submit login-btn"
              onClick={() => setAction("Login")}
            >
              Login
            </button>
          )}

          <button
            type="submit"
            className="submit"
            disabled={isLoading || apiStatus.includes("Failed")}
          >
            {isLoading ? "Processing..." : action}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
