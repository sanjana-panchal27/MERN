import React from 'react';
import { NavLink } from 'react-router-dom';
import "./CompanyHome.css";

const CAccess = () => {
  // Array of multiple students
  const students = [
    {
      name: "Sanjana Panchal",
      email: "sanjana@example.com",
      education: "BSc IT - 3rd Year",
      skills: "React, Node.js, MongoDB, UI/UX",
      experience: "Frontend Intern at Shadowfox",
      resumeLink: "/resumes/sanjana_resume.pdf",
    },
    {
      name: "Aarav Mehta",
      email: "aarav.mehta@example.com",
      education: "BSc IT - Final Year",
      skills: "Next.js, Tailwind CSS, Firebase",
      experience: "Web Dev Intern at CodeLab",
      resumeLink: "/resumes/aarav_resume.pdf",
    },
    {
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      education: "BSc CS - 2nd Year",
      skills: "HTML, CSS, JavaScript, Figma",
      experience: "UI Designer Intern at DesignX",
      resumeLink: "/resumes/priya_resume.pdf",
    },
    {
      name: "Rohan Desai",
      email: "rohan.desai@example.com",
      education: "BSc IT - 3rd Year",
      skills: "MERN Stack, Docker, Git",
      experience: "Fullstack Intern at WebNest",
      resumeLink: "/resumes/rohan_resume.pdf",
    },
  ];

  return (
    <div className="com-container">
      <h1>Access Student Profiles</h1>

      <div className="c-access-grid">
        {students.map((student, index) => (
          <div className="student-list" key={index}>
            <h3>{student.name}</h3>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Education:</strong> {student.education}</p>
            <p><strong>Skills:</strong> {student.skills}</p>
            <p><strong>Experience:</strong> {student.experience}</p>
            <NavLink
              className="access-link"
              to={student.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CAccess;
