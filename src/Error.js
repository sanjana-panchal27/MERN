import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="hero-error">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, The page you are looking for Does not Exists.</p>
        <NavLink to="/">
          <button className="error-btn">Go Back To Home </button>
        </NavLink>
      </div>
    </>
  );
};

export default Error;
