import "./StudentHome.css";
import { FaBriefcase } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { RiFilePaperFill } from "react-icons/ri";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { IoAnalyticsSharp } from "react-icons/io5";

const StudentHome = () => {
  return (
    <div className="stu-container">
      {/* Profile Summary - Left Side */}
      <div className="profile-card">
        <h2 className="dash-title">Profile Summary</h2>
        <p className="dash-text">
          <b>Name:</b> Sanjana Panchal
        </p>
        <p className="dash-text">
          <b>UID:</b> 123456789
        </p>
        <p className="dash-text">
          <b>Course:</b> B.Sc.IT
        </p>
        <p className="dash-text">
          <b>Department:</b> CSA
        </p>
      </div>

      {/* total applied jobs: grid */}
      <div className="s-grid-container">
        <div className="s-grid-box blue">
          <h2 className="s-grid-title">Total Applied jobs</h2>
          <p className="s-grid-p"> 5</p>
        </div>

        {/* job offere recieved */}
        <div className="s-grid-box green">
          <h2 className="s-grid-title">Job Offer Received</h2>
          <p className="s-grid-p"> 3</p>
        </div>

        {/* shortlisted application */}
        <div className="s-grid-box yellow">
          <h2 className="s-grid-title">Shortlisted Applications</h2>
          <p className="s-grid-p"> 3</p>
        </div>

        {/* interview scheduled */}
        <div className="s-grid-box purple">
          <h2 className="s-grid-title">Interview Scheduled</h2>
          <p className="s-grid-p"> 5</p>
        </div>
      </div>

      {/* Job & Internship - Right Side */}
      <div className="job-opportunity">
        <h2 className="dash-title">
          <FaBriefcase className="s-dash-icon" />
          Job & Internship Opportunities
        </h2>
        <p className="dash-text">
          Job Name - Company name (Deadline: month, date)
        </p>
        <p className="dash-text">
          UI/UX Internship - Microsoft (Deadline: March 1)
        </p>
      </div>

      {/* Notifications - Below Profile Summary */}
      <div className="s-dash-notification">
        <h2 className="dash-title">Notifications & Updates</h2>
        <p className="dash-text">
          <AiFillNotification className="s-dash-icon" />
          New Placement Drive: Infosys - Apply by Feb 28
        </p>
        <p className="dash-text">
          <FaRegEdit className="s-dash-icon" />
          Aptitude Test Scheduled for Feb 26
        </p>
      </div>

      {/* Resources & Guidance - Right Side */}
      <div className="s-dash-guid">
        <h2 className="dash-title">Resources & Guidance</h2>
        <p className="dash-text">
          <RiFilePaperFill className="s-dash-icon" />
          Resume Building Guide
        </p>
        <p className="dash-text">
          <PiMicrophoneStageFill className="s-dash-icon" />
          Interview Preparation Tips
        </p>
      </div>

      {/* Placement Analytics - Below Notifications, Aligned with Resources */}
      <div className="s-dash-analytics">
        <h2 className="dash-title">
          <IoAnalyticsSharp className="s-dash-icon" />
          Placement Analytics
        </h2>
        <p className="dash-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          cumque temporibus molestiae iusto inventore doloribus eum tenetur ad,
          mollitia quaerat provident iure consequuntur? Deleniti numquam quasi
          qui, iure quam expedita.
        </p>
      </div>
    </div>
  );
};

export default StudentHome;
