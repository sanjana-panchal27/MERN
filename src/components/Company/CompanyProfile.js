import React, { useState } from "react";
import "./CompanyHome.css";
import { motion, AnimatePresence} from "framer-motion";
import { useActionData } from "react-router-dom";

const CompanyProfile = () => {

const [companyName, setCompanyName] = useState("");
const [industryType, setIndustryType] = useState("");
const [location, setLocation] = useState("");
const [website, setWebsite] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [aboutUs, setAboutUs] = useState("");

  const [activeSection, setActiveSection] = useState("company");

  return (
    <>
      <div className="com-container">
        <h1>Company Profile</h1>

        <div className="c-profile-container">
            <div className="c-form-nav">
              <button onClick={() => setActiveSection("company")}>
                Company Info
              </button>
            
              <button onClick={() => setActiveSection("contact")}>
                Contact Details
              </button>
            </div>
        </div>

        {/* Section content with smooth transition */}
        <diiv className="c-form-section">
            <AnimatePresence mode="wait">
              {activeSection === "company" && (
                <motion.div
                key="company"
                initial={{ opacity: 0, x: -50}}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50}}
                transition={{ duration: 0.4}}
                >
                  <h2> Company Information</h2>

                  <label>
  Company Name
                  </label>
                  <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

                 <label>
                  Industry Type
                 </label>
                 <select value={industryType} onChange={(e) => setIndustryType(e.target.value)}>
                         <option value="Engineering">Engineering</option>
                         <option value="Pharmacy">Pharmacy</option>
                         <option value="Science">Science</option>
                         <option value="Management">Management</option>
                         <option value="Law">Law</option>
                         <option value="Design">Design</option>
                 </select>

                 <label>Location</label>
                 <input type="text" value={location} onchange={(e) => setLocation(e.target.value)}/>

                 <label>Website:</label>
      <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Phone:</label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <label>About Us:</label>
      <textarea value={aboutUs} onChange={(e) => setAboutUs(e.target.value)}></textarea>

      <button
                  className="form-sec-btn"
                  onClick={() => setActiveSection("education")}
                >
                  Next
                </button>
                </motion.div>
              )}
            </AnimatePresence>
        </diiv>
      </div>
    </>
  );
};

export default CompanyProfile;
