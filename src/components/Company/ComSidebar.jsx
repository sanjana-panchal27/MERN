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
        <div className="inputs">
          <ul>
            {/* home link */}
            <li className="input">
              <NavLink to="/" className="icon">
                <FaHome />
                <span> Dashboard</span>
              </NavLink>
            </li>

            {/* Profile Create */}
            <li className="input">
              <NavLink to="/c-profile" className="icon">
                <FaUserEdit />
                <span>Create Profile</span>
              </NavLink>
            </li>

            {/* post job openings */}
            <li className="input">
              <NavLink to="/c-postjob" className="icon">
                <FaBriefcase />
                <span>Post Job Openings</span>
              </NavLink>
            </li>

            {/* Access Student Profiles */}
            <li className="input">
              <NavLink to="/c-access" className="icon">
                <PiStudentBold />
                <span> Access Student Profiles</span>
              </NavLink>
            </li>

            {/* Shortlist & Schedule Interview */}
            <li className="input">
              <NavLink to="/c-shortlist" className="icon">
                <MdEventAvailable />
                <span> Shortlist & Schedule Interview</span>
              </NavLink>
            </li>

            {/* feedback */}
            <li className="input">
              <NavLink to="/c-feedback" className="icon">
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
