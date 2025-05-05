import React from "react";
import "./StudentHome.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiDeleteBin6Fill } from "react-icons/ri";

const StudentProfile = () => {
  const [activeSection, setActiveSection] = useState("personal");

  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    link: "",
  });
  const [resume, setResume] = useState(null);
  const [resumeUrl, setResumeUrl] = useState("");
  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleProjectChange = (e) => {
    console.log(e.target.name, e.target.value); // Debugging
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const addProject = () => {
    if (newProject.title.trim() && newProject.description.trim()) {
      setProjects([...projects, newProject]);
      console.log("Project Added:", newProject); // Debugging
      setNewProject({ title: "", description: "", link: "" }); // Reset input fields
    } else {
      console.log("Please enter title and description.");
    }
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const uploadResume = async () => {
    if (!resume) {
      alert("Please select a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
  };

  return (
    <div className="stu-container">
      <h1 className="student-heading">Student Profile</h1>

      <div className="profile-container">
        {/* Navigation Buttons */}
        <div className="s-form-nav">
          <button onClick={() => setActiveSection("personal")}>
            Personal Info
          </button>
          <button onClick={() => setActiveSection("education")}>
            Education
          </button>
          <button onClick={() => setActiveSection("resume")}>Resume</button>

          <button onClick={() => setActiveSection("skill")}>Skill</button>

          <button onClick={() => setActiveSection("project")}>Project</button>
        </div>

        {/* Section Content with Smooth Transition */}
        <div className="s-form-section">
          <AnimatePresence mode="wait">
            {activeSection === "personal" && (
              <motion.div
                key="personal"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
              >
                <h2>Personal Information</h2>

                <label>
                  Full Name
                  <input type="text" placeholder="Full Name" required />
                </label>

                <label>
                  Email
                  <input type="email" placeholder="Email" required />
                </label>

                <label>
                  Phone no.
                  <input type="text" placeholder="Phone Number" required />
                </label>

                <label>
                  Birth Date
                  <input type="date" required />
                </label>

                <label>
                  Branch
                  <input type="text" placeholder="Branch" required />
                </label>

                <label>
                  Department
                  <input type="text" placeholder="Department" required />
                </label>

                <label>
                  Address
                  <input type="text" placeholder="Address" required />
                </label>

                <button
                  className="form-sec-btn"
                  onClick={() => setActiveSection("education")}
                >
                  Next
                </button>
              </motion.div>
            )}

            {activeSection === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
              >
                <h2>Education Information</h2>

                <label>
                  Degree
                  <input type="text" placeholder="Degree" required />
                </label>

                <label>
                  Board
                  <input type="text" placeholder="Board" required />
                </label>

                <label>
                  School Name
                  <input type="text" placeholder="School Name" required />
                </label>

                <label>
                  Passing Month
                  <input type="text" placeholder="Passing Month" required />
                </label>

                <label>
                  Passing Year
                  <input type="text" placeholder="Passing Year" required />
                </label>

                <label>
                  Seat No.
                  <input type="text" placeholder="Seat No." required />
                </label>

                <label>
                  Passed from State
                  <input type="text" placeholder="Passed from State" required />
                </label>

                <label>
                  Passed from District
                  <input
                    type="text"
                    placeholder="Passed from District"
                    required
                  />
                </label>

                <label>
                  Place of Study (City/Town)
                  <input type="text" placeholder="Place of Study" required />
                </label>

                <label>
                  Medium of Instruction
                  <input type="text" placeholder="Medium" required />
                </label>

                <label>
                  Total Marks (Overall)
                  <input type="text" placeholder="Total Marks" required />
                </label>

                <label>
                  Obtained Marks (Overall)
                  <input type="text" placeholder="Obtained Marks" required />
                </label>

                <label>
                  Percentage
                  <input type="text" placeholder="Percentage" required />
                </label>

                <p>Upload Degree Certificate</p>
                <div className="btn-container">
                  <button
                    className="form-sec-btn"
                    onClick={() => setActiveSection("personal")}
                  >
                    Back
                  </button>

                  <button
                    className="form-sec-btn"
                    onClick={() => setActiveSection("resume")}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {activeSection === "resume" && (
              <motion.div
                key="resume"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
              >
                <h2>Resume</h2>

                <div className="resume-container">
                  <input type="file" onChange={handleResumeChange} />
                  <button onClick={uploadResume}>Upload Resume</button>

                  {resumeUrl && (
                    <div>
                      <h3>Resume:</h3>
                      <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a>
                    </div>
                  )}
                </div>

                <div className="btn-container">
                  <button
                    className="form-sec-btn"
                    onClick={() => setActiveSection("education")}
                  >
                    Back
                  </button>

                  <button
                    className="form-sec-btn"
                    onClick={() => setActiveSection("skill")}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {activeSection === "skill" && (
              <motion.div
                key="skill"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
              >
                <h2>Skills</h2>

                <div className="skills-container">
                  <input
                    type="text"
                    className="skills-input"
                    placeholder="Enter a skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />
                  <button className="add-skill-btn" onClick={addSkill}>
                    Add Skill
                  </button>

                  {/* Skills List */}
                  <ul className="skills-list">
                    {skills.map((skill, index) => (
                      <li key={index} className="skill-item">
                        {skill}
                        <button
                          className="remove-skill-btn"
                          onClick={() => removeSkill(index)}
                        >
                          <RiDeleteBin6Fill />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="btn-container">
                  <button
                    className="form-sec-btn"
                    onClick={() => setActiveSection("resume")}
                  >
                    Back
                  </button>

                  <button
                    className="form-sec-btn"
                    onClick={() => setActiveSection("project")}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {activeSection === "project" && (
              <motion.div
                key="project"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
              >
                <h2>Projects</h2>

                <div className="project-container">
                  <input
                    type="text"
                    name="title"
                    value={newProject.title}
                    onChange={handleProjectChange}
                    placeholder="Project Title"
                    className="project-input"
                    required
                  />
                  <textarea
                    name="description"
                    value={newProject.description}
                    onChange={handleProjectChange}
                    placeholder="Project Description"
                    className="project-textarea"
                    required
                  />
                  <input
                    type="text"
                    name="link"
                    value={newProject.link}
                    onChange={handleProjectChange}
                    placeholder="Project Link (optional)"
                    className="project-input"
                  />
                  <button className="add-project-btn" onClick={addProject}>
                    Add Project
                  </button>

                  {/* Display added projects */}
                  <ul className="project-list">
                    {projects.map((project, index) => (
                      <li key={index}>
                        <strong>{project.title}</strong>: {project.description}{" "}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Project
                          </a>
                        )}
                        <button onClick={() => removeProject(index)}>
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="btn-container">
                    <button
                      className="form-sec-btn"
                      onClick={() => setActiveSection("skill")}
                    >
                      Back
                    </button>

                    <button
                      className="form-sec-btn"
                      onClick={() => setActiveSection("")}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
