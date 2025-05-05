import React from "react";
import "./StudentHome.css";
const SJobAlert = () => {
  const jobAlerts = [
    {
      title: "Frontend Developer Intern",
      company: "ABC Tech",
      type: "Remote",
      deadline: "Feb 25, 2025",
    },
    {
      title: "MERN Stack Developer",
      company: "Tech",
      type: "Internship",
      deadline: "March 2, 2025",
    },
    {
      title: "Full Stack Developer",
      company: "ABC Tech",
      type: "Full Time",
      deadline: "March 14, 2025",
    },
  ];

  return (
    <>
      <div className="stu-container">
        <h1 className="student-heading">Job Alert</h1>

        <div className="s-job-alert">
          {jobAlerts.map((job, index) => (
            <div key={index} className="alert-card">
              <div className="alert-content">
                <h2>{job.title}</h2>
                <p className="company">{job.company}</p>
                <p className="type">{job.type}</p>
                <p className="deadline">📅 Deadline: {job.deadline}</p>
              </div>
              <button className="alert-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SJobAlert;
