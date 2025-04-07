import React from "react";
import "./CompanyHome.css";

const CShortlist = () => {
  const students = [
    {
      name: "Sanjana Panchal",
      email: "sanjana@example.com",
      skills: "React, Node.js, MongoDB, UI/UX",
    },
    {
      name: "Aarav Mehta",
      email: "aarav@example.com",
      skills: "Python, Django, PostgreSQL",
    },
    {
      name: "Riya Sharma",
      email: "riya@example.com",
      skills: "Java, Spring Boot, AWS",
    },
  ];

  return (
    <div className="com-container">
      <h1>Shortlist Students</h1>

      <div className="c-shortlist">
        <h2>Student Profiles</h2>

        {students.map((student, index) => (
          <div key={index} className="shortlist-stu-list">
            <h3>{student.name}</h3>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Skills:</strong> {student.skills}</p>
            <div className="shortlist-btn">
              <button className="shortlist">Shortlist</button>
              <button className="schedule">Schedule Interview</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CShortlist;
