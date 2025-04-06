import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear admin-related data from localStorage
    localStorage.removeItem("studentName");
    localStorage.removeItem("authToken"); // if you’re using token-based auth

    // Redirect to login page
    navigate("/"); // change the path as per your routes
  }, [navigate]);

  return (
    <>
      <div className="logout-container">
        <h3>Are you sure you want to log out?</h3>
        <button>Log out</button>
        <button>Cancel</button>
      </div>
    </>
  );
};

export default Logout;
