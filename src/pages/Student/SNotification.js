import React from "react";
import "./StudentHome.css";
import { FaRegBookmark } from "react-icons/fa6";
const SNotification = () => {
  return (
    <>
      <div className="stu-container">
        <h1>Notification</h1>

        <div className="s-notification">
          <h2>Upcoming Placement Drive - Google</h2>
          <p>
            Google is conducting a placement drive on March 10.
            <strong>Register Now!</strong>
          </p>
          <p>Feb 20, 2025</p>
          <h3 className="notification-btn">Placement Drive</h3>
          <button className="save-btn">
            <FaRegBookmark />
          </button>
        </div>

        <div className="s-notification-1">
          <h2>Resume Submission Deadline</h2>
          <p>
            Submit your updated resume by Feb 25 for TCS Recruitment.
            <strong>Register Now!</strong>
          </p>
          <p>Feb 22, 2025</p>
          <h3 className="notification-btn">Deadline Reminder</h3>
        </div>
      </div>
    </>
  );
};

export default SNotification;
