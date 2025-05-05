import React from "react";
import { useNavigate } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear admin-related data from localStorage
    localStorage.removeItem("studentName");
    localStorage.removeItem("authToken"); // if you’re using token-based auth

    // Redirect to login page
    navigate("/");
  };

  const handleCancel = () => {
    // Go back to previous page
    navigate(-1);
  };

  return (
    <div className="logout-container">
      <h3>Are you sure you want to log out?</h3>
      <button onClick={handleLogout}>Log out</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default Logout;
