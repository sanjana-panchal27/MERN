import React from 'react';
import './StudentHome.css';
import { FaBook } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { FaChalkboardUser } from 'react-icons/fa6';
import { FaVideo } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SResources = () => {
  return (
    <>
      <div className="stu-container">
        <h1 className='student-heading'>Resources & Guidance</h1>

        <div className="s-resources">
          <div className="s-grid-resource">
            <div className="s-grid-box1">
              <NavLink to="/student-dashboard/s-video-page/resume-tips">
                <h2 className="grid-1">Resume Building Tips</h2>
                <div className="s-icon-text">
                  <FaBook className="s-resource-icon" />
                  <p>Guidelines and samples to create a strong Resume</p>
                </div>
              </NavLink>
            </div>

            <div className="s-grid-box2">
              <NavLink to="/student-dashboard/s-video-page/interview-prep">
                <h2 className="grid-2">Interview Preparation</h2>
                <div className="s-icon-text">
                  <FaBriefcase className="s-resource-icon" />
                  <p>Common interview questions and best practices.</p>
                </div>
              </NavLink>
            </div>

            <div className="s-grid-box3">
              <NavLink to="/student-dashboard/s-video-page/aptitude-tests">
                <h2 className="grid-3">Aptitude & Technical Tests</h2>
                <div className="s-icon-text">
                  <FaLaptopCode className="s-resource-icon" />
                  <p>Practice tests and study resources for Placements.</p>
                </div>
              </NavLink>
            </div>

            <div className="s-grid-box4">
              <NavLink to="/student-dashboard/s-video-page/internship-portals">
                <h2>Internship & Job Portals</h2>
                <div className="s-icon-text">
                  <FaBriefcase className="s-resource-icon" />
                  <p>Useful links to apply for internships and jobs.</p>
                </div>
              </NavLink>
            </div>

            <div className="s-grid-box5">
              <NavLink to="/student-dashboard/s-video-page/career-guidance">
                <h2>Career Guidance</h2>
                <div className="s-icon-text">
                  <FaChalkboardUser className="s-resource-icon" />
                  <p>Expert advice and articles for career growth.</p>
                </div>
              </NavLink>
            </div>

            <div className="s-grid-box6">
              <NavLink to="/student-dashboard/s-video-page/webinars-workshops">
                <h2>Webinars & Workshops</h2>
                <div className="s-icon-text">
                  <FaVideo className="s-resource-icon" />
                  <p>Upcoming sessions and recordings from past events.</p>
                </div>
              </NavLink>
            </div>

            <div className="s-grid-box7">
              <NavLink to="/student-dashboard/s-video-page/company-insights">
                <h2>Company Insights</h2>
                <div className="s-icon-text">
                  <FaBuilding className="s-resource-icon" />
                  <p>Information about recruiting companies and job roles.</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SResources;
