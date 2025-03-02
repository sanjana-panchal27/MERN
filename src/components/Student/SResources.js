import React from "react";
import "./StudentHome.css";
import { FaBook } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
const SResources = () => {
  return (
    <>
      <div className="stu-container">
        <h1>Resources & Guidance</h1>

        <div className="s-resources">
          <div className="s-grid-resource">
            <div className="s-grid-box1">
              <h2 className="grid-1">Resume Building Tips</h2>
              <div className="s-icon-text">
                <FaBook className="s-resource-icon" />
                <p>Guidelines and samples to create a strong Resume</p>
              </div>
            </div>

            <div className="s-grid-box2">
              <h2 className="grid-2">Interview Preparation</h2>
              <div className="s-icon-text">
                <FaBriefcase className="s-resource-icon" />
                <p>Common interview questions and best practices.</p>
              </div>
            </div>

            <div className="s-grid-box3">
              <h2 className="grid-3">Aptitude & Technical Tests</h2>
              <div className="s-icon-text">
                <FaLaptopCode className="s-resource-icon" />
                <p>Practise tests and study resources for Placements.</p>
              </div>
            </div>

            <div className="s-grid-box4">
              <h2>Internship & Job Portals</h2>
              <div className="s-icon-text">
                <FaBriefcase className="s-resource-icon" />
                <p>Useful links to apply for internships and Jobs.</p>
              </div>
            </div>

            <div className="s-grid-box5">
              <h2>Career Guidance</h2>
              <div className="s-icon-text">
                <FaChalkboardUser className="s-resource-icon" />
                <p>Expert advice and articles for career growth.</p>
              </div>
            </div>

            <div className="s-grid-box6">
              <h2>Webinars & Workshops</h2>
              <div className="s-icon-text">
                <FaVideo className="s-resource-icon" />
                <p>Upcoming sessions and recordings from past events.</p>
              </div>
            </div>

            <div className="s-grid-box7">
              <h2>Company Insights</h2>
              <div className="s-icon-text">
                <FaBuilding className="s-resource-icon" />
                <p>Information about recruiting companies and job roles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SResources;
