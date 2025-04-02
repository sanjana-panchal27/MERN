import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdEventAvailable } from "react-icons/md";
import { MdFeedback } from "react-icons/md";

import "./ComSidebar.css";

const ComSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div>
          <h1 className="title">Company Dashboard</h1>
        </div>

        {/* horizontal line */}
        <hr />

        {/* sidebar links */}
        <div className="c-c-inputs">
          <ul>
            {/* home link */}
            <li className="c-input">
              <NavLink to="/company-dashboard" className="icon">
                <FaHome />
                <span> Dashboard</span>
              </NavLink>
            </li>

            {/* Profile Create */}
            <li className="c-input">
              <NavLink to="/company-dashboard/c-profile" className="icon">
                <FaUserEdit />
                <span>Create Profile</span>
              </NavLink>
            </li>

            {/* post job openings */}
            <li className="c-input">
              <NavLink to="/company-dashboard/c-postjob" className="icon">
                <FaBriefcase />
                <span>Post Job Openings</span>
              </NavLink>
            </li>

            {/* Access Student Profiles */}
            <li className="c-input">
              <NavLink to="/company-dashboard/c-access" className="icon">
                <PiStudentBold />
                <span> Access Student Profiles</span>
              </NavLink>
            </li>

            {/* Shortlist & Schedule Interview */}
            <li className="c-input">
              <NavLink to="/company-dashboard/c-shortlist" className="icon">
                <MdEventAvailable />
                <span> Shortlist & Schedule Interview</span>
              </NavLink>
            </li>

            {/* feedback */}
            <li className="c-input">
              <NavLink to="/company-dashboard/c-feedback" className="icon">
                <MdFeedback />
                <span> Feedback</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ComSidebar;
