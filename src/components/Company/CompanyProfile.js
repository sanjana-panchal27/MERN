import React from "react";
import "./CompanyHome.css";
const CompanyProfile = () => {
  return (
    <>
      <div className="com-container">
        <h1>Company Profile</h1>

        <div className="c-profile-container">
            <div className="c-form-nav">
              <button>
                Company Info
              </button>
            
              <button>
                Contact Details
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
