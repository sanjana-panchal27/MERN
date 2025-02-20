import "./StudentHome.css";

const StudentHome = () => {
  return (
    <>
      <div className="stu-container">
        <div className="profile-card">
          <h2>Profile Summary</h2>
          <p>Name: Sanjana Panchal</p>
          <p>UID: 123456789</p>
          <p>Course: B.Sc.IT</p>
          <p>Department: CSA</p>
        </div>

        <div className="job-opportunity">
          <h2>Job & Inertnship Oppotunities</h2>
          <p>Job Name - Company name (Deadline: month, date)</p>
          <p>UI/UX Internship - Microsoft (Deadline: March, 1)</p>
        </div>
      </div>
    </>
  );
};

export default StudentHome;
