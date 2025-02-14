import { FaHome } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdEventAvailable } from "react-icons/md";
import { MdFeedback } from "react-icons/md";

import "./Sidebar.css";

const Sidebar = () => {
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
              <a href="/" className="icon">
                <FaHome />
                <span> Dashboard</span>
              </a>
            </li>

            {/* Profile Create */}
            <li className="input">
              <a href="/" className="icon">
                <FaUserEdit />
                <span>Create Profile</span>
              </a>
            </li>

            {/* post job openings */}
            <li className="input">
              <a href="/" className="icon">
                <FaBriefcase />
                <span>Post Job Openings</span>
              </a>
            </li>

            {/* Access Student Profiles */}
            <li className="input">
              <a href="/" className="icon">
                <PiStudentBold />
                <span> Access Student Profiles</span>
              </a>
            </li>

            {/* Shortlist & Schedule Interview */}
            <li className="input">
              <a href="/" className="icon">
                <MdEventAvailable />
                <span> Shortlist & Schedule Interview</span>
              </a>
            </li>

            {/* feedback */}
            <li className="input">
              <a href="/" className="icon">
                <MdFeedback />
                <span> Feedback</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
