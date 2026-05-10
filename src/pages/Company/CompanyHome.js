import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CompanyHome.css";
import { FaBriefcase, FaUsers, FaClipboardCheck, FaUserTie } from 'react-icons/fa';

const jobPostings = [
  {
    id: 1,
    title: "Frontend Developer",
    postedDate: "2025-02-25",
    applications: 12,
    status: "Active"
  },
  {
    id: 2,
    title: "Backend Developer",
    postedDate: "2025-02-24",
    applications: 8,
    status: "Active"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    postedDate: "2025-02-23",
    applications: 15,
    status: "Closed"
  },
];

const studentsData = [
  {
    id: 1,
    name: "Alice",
    skills: "React, Node.js",
    year: 2024,
    cgpa: 8.5,
    status: "Applied",
  },
  {
    id: 2,
    name: "Bob",
    skills: "Python, Django",
    year: 2023,
    cgpa: 7.8,
    status: "Applied",
  },
  {
    id: 3,
    name: "Charlie",
    skills: "Java, Spring",
    year: 2025,
    cgpa: 9.0,
    status: "Applied",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CompanyHome = () => {
  const [students, setStudents] = useState(studentsData);
  const [search, setSearch] = useState("");

  const handleStatusChange = (id, newStatus) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, status: newStatus } : student
      )
    );
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.skills.toLowerCase().includes(search.toLowerCase())
  );

  const [interviews, setInterviews] = useState([]);
  const [newInterview, setNewInterview] = useState({
    student: "",
    date: "",
    status: "Pending",
    feedback: "",
  });

  const handleAddInterview = () => {
    if (newInterview.student && newInterview.date) {
      setInterviews([...interviews, newInterview]);
      setNewInterview({
        student: "",
        date: "",
        status: "Pending",
        feedback: "",
      });
    }
  };

  return (
    <motion.div 
      className="modern-company-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="company-header">
        <motion.h1 variants={itemVariants} className="company-title">
          Company Portal
        </motion.h1>
        <motion.p variants={itemVariants} className="company-subtitle">
          Manage your job postings, review applicants, and schedule interviews.
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="c-stats-grid">
        <motion.div whileHover={{ scale: 1.05 }} className="c-stat-card blue-glass">
          <div className="c-stat-icon"><FaBriefcase /></div>
          <div>
            <h3>Active Job Postings</h3>
            <p className="c-stat-value">30</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="c-stat-card purple-glass">
          <div className="c-stat-icon"><FaUsers /></div>
          <div>
            <h3>Total Applications</h3>
            <p className="c-stat-value">10</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="c-stat-card yellow-glass">
          <div className="c-stat-icon"><FaClipboardCheck /></div>
          <div>
            <h3>Students Shortlisted</h3>
            <p className="c-stat-value">11</p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="c-stat-card green-glass">
          <div className="c-stat-icon"><FaUserTie /></div>
          <div>
            <h3>Students Hired</h3>
            <p className="c-stat-value">21</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="c-content-grid">
        {/* Left Column */}
        <div className="c-col-left">
          {/* Job Postings */}
          <motion.div variants={itemVariants} className="c-modern-card">
            <div className="card-header">
              <h2>Recent Job Postings</h2>
            </div>
            <div className="job-cards-container">
              <AnimatePresence>
                {jobPostings.map((job) => (
                  <motion.div 
                    key={job.id} 
                    className="modern-job-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  >
                    <div className="job-card-top">
                      <h3 className="job-title">{job.title}</h3>
                      <span className={`status-badge ${job.status === 'Active' ? 'active' : 'closed'}`}>
                        {job.status}
                      </span>
                    </div>
                    <p className="job-info">Posted: {job.postedDate}</p>
                    <div className="job-card-bottom">
                      <div className="applicant-count">
                        <FaUsers className="applicant-icon" /> {job.applications} Applicants
                      </div>
                      <div className="job-actions">
                        <button className="c-btn-edit">Edit</button>
                        <button className="c-btn-delete">Close</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Interview Scheduling */}
          <motion.div variants={itemVariants} className="c-modern-card interview-schedule-card">
            <div className="card-header">
              <h2>Schedule Interview</h2>
            </div>
            <div className="modern-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Student Name</label>
                  <input
                    type="text"
                    placeholder="E.g., Alice Smith"
                    value={newInterview.student}
                    onChange={(e) =>
                      setNewInterview({ ...newInterview, student: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Date & Time</label>
                  <input
                    type="datetime-local"
                    value={newInterview.date}
                    onChange={(e) =>
                      setNewInterview({ ...newInterview, date: e.target.value })
                    }
                  />
                </div>
              </div>
              <button onClick={handleAddInterview} className="btn-primary">
                Schedule Interview
              </button>
            </div>

            {interviews.length > 0 && (
              <div className="scheduled-list">
                <h4>Upcoming Interviews</h4>
                {interviews.map((int, idx) => (
                  <div key={idx} className="scheduled-item">
                    <div className="int-info">
                      <strong>{int.student}</strong>
                      <span>{new Date(int.date).toLocaleString()}</span>
                    </div>
                    <span className="int-status">{int.status}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="c-col-right">
          {/* Student Applications */}
          <motion.div variants={itemVariants} className="c-modern-card applicants-card">
            <div className="card-header flex-between">
              <h2>Student Applications</h2>
              <input
                type="text"
                placeholder="Search by name or skill..."
                className="modern-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="table-responsive">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Skills</th>
                    <th>CGPA</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {filteredStudents.map((student) => (
                      <motion.tr 
                        key={student.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        layout
                      >
                        <td><strong>{student.name}</strong><br/><small>{student.year}</small></td>
                        <td>{student.skills}</td>
                        <td><span className="cgpa-badge">{student.cgpa}</span></td>
                        <td>
                          <span className={`status-text ${student.status.toLowerCase()}`}>
                            {student.status}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            {student.status === 'Applied' && (
                              <>
                                <button
                                  className="btn-shortlist"
                                  onClick={() => handleStatusChange(student.id, "Shortlisted")}
                                >
                                  Shortlist
                                </button>
                                <button
                                  className="btn-reject"
                                  onClick={() => handleStatusChange(student.id, "Rejected")}
                                >
                                  Reject
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyHome;
