import React, { useState } from "react";
import "./CompanyHome.css";
import { motion, AnimatePresence } from "framer-motion";
import { useActionData } from "react-router-dom";

const CompanyProfile = () => {
  const [companyName, setCompanyName] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  // contact details
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    medium: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialMediaLinks({ ...socialMediaLinks, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Social Mediia Links: ", socialMediaLinks);
  };

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
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
              >
                <h2> Company Information</h2>

                <label>Company Name</label>
                <input
                  className="profile-input"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />

                <label>Industry Type</label>
                <select
                  className="profile-select"
                  value={industryType}
                  onChange={(e) => setIndustryType(e.target.value)}
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Science">Science</option>
                  <option value="Management">Management</option>
                  <option value="Law">Law</option>
                  <option value="Design">Design</option>
                  <option value="Other">Other</option>
                </select>

                <label>Location</label>
                <input
                  className="profile-input"
                  type="text"
                  value={location}
                  onchange={(e) => setLocation(e.target.value)}
                />

                <label>Website</label>
                <input
                  className="profile-input"
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />

                <label>Email</label>
                <input
                  className="profile-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>Phone</label>
                <input
                  className="profile-input"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <label>Description</label>
                <textarea
                  className="profile-textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <button
                  className="c-form-sec-btn"
                  onClick={() => setActiveSection("contact")}
                >
                  Next
                </button>
              </motion.div>
            )}

            {activeSection === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
              >
                <h2>Contact Details</h2>

                <label>Full Name</label>
                <input
                  className="profile-input"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="HR manager/ Hiring Manager"
                />

                <label>Designation</label>
                <input
                  className="profile-input"
                  type="text"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  placeholder="HR manager/ Recruiter"
                />

                <label>Street Address</label>
                <input
                  className="profile-input"
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />

                <label>City</label>
                <input
                  className="profile-input"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <label>State/Province</label>
                <input
                  className="profile-input"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />

                <label>Country</label>
                <input
                  className="profile-input"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />

                <label>ZIP Code</label>
                <input
                  className="profile-input"
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />

                <label>Contact Email</label>
                <input
                  className="profile-input"
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />

                <label>Contact Phone</label>
                <input
                  className="profile-input"
                  type="contactPhone"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />

                <label>LinkedIn</label>
                <input
                  className="profile-input"
                  type="link"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Facebook</label>
                    <input
                      className="profile-input"
                      type="url"
                      name="facebook"
                      value={socialMediaLinks.facebook}
                      onChange={handleChange}
                      placeholder="Enter Facebook URL"
                    />
                  </div>
                  <div className="form-group">
                    <label>Twitter</label>
                    <input
                      className="profile-input"
                      type="url"
                      name="twitter"
                      value={socialMediaLinks.twitter}
                      onChange={handleChange}
                      placeholder="Enter Twitter URL"
                    />
                  </div>
                  <div className="form-group">
                    <label>LinkedIn</label>
                    <input
                      className="profile-input"
                      type="url"
                      name="linkedin"
                      value={socialMediaLinks.linkedin}
                      onChange={handleChange}
                      placeholder="Enter LinkedIn URL"
                    />
                  </div>
                  <div className="form-group">
                    <label>Instagram</label>
                    <input
                      className="profile-input"
                      type="url"
                      name="instagram"
                      value={socialMediaLinks.instagram}
                      onChange={handleChange}
                      placeholder="Enter Instagram URL"
                    />
                  </div>
                  <div className="form-group">
                    <label>Website</label>
                    <input
                      className="profile-input"
                      type="url"
                      name="website"
                      value={socialMediaLinks.website}
                      onChange={handleChange}
                      placeholder="Enter Website URL"
                    />
                  </div>
                </form>
                <div className="c-btn-container">
                  <button
                    className="c-form-sec-btn"
                    onClick={() => setActiveSection("company")}
                  >
                    Back
                  </button>

                  <button className="c-form-sec-btn">Save</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </diiv>
      </div>
    </>
  );
};

export default CompanyProfile;
