import "./StudentHome.css";
import { FaBriefcase } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { RiFilePaperFill } from "react-icons/ri";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { IoAnalyticsSharp } from "react-icons/io5";
const StudentHome = () => {
  return (
    <>
      <div className="stu-container">
        <div className="profile-card">
          <h2 className="dash-title">Profile Summary</h2>
          <p className="dash-text">
            <b>Name:</b> Sanjana Panchal
          </p>
          <p className="dash-text">
            <b>UID:</b> 123456789
          </p>
          <p className="dash-text">
            <b>Course: </b>B.Sc.IT
          </p>
          <p className="dash-text">
            <b>Department:</b> CSA
          </p>
        </div>

        <div className="job-opportunity">
          <h2 className="dash-title">
            <FaBriefcase className="s-dash-icon" />
            Job & Inertnship Oppotunities
          </h2>
          <p className="dash-text">
            Job Name - Company name (Deadline: month, date)
          </p>
          <p className="dash-text">
            UI/UX Internship - Microsoft (Deadline: March, 1)
          </p>
        </div>

        <div className="s-dash-notification">
          <h2 className="dash-title">
            Notifications & Updates
            <p className="dash-text">
              <AiFillNotification className="s-dash-icon" />
              New Placement Drive: Infosys - Apply by Feb 28
            </p>
            <p className="dash-text">
              <FaRegEdit className="s-dash-icon" />
              Aptitude Test Scheduled for Feb 26
            </p>
          </h2>
        </div>

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

        <div className="s-dash-analytics">
          <h2 className="dash-title">
            {" "}
            <IoAnalyticsSharp className="s-dash-icon" />
            Placement Analytics
          </h2>
          <p className="dash-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            cumque temporibus molestiae iusto inventore doloribus eum tenetur
            ad, mollitia quaerat provident iure consequuntur? Deleniti numquam
            quasi qui, iure quam expedita.
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentHome;
