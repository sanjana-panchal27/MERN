import { useState } from "react";
import "./CompanyHome.css";

const jobPostings = [
  {
    id: 1,
    title: "Frontend Developer",
    postedDate: "2025-02-25",
    applications: 12,
  },
  {
    id: 2,
    title: "Backend Developer",
    postedDate: "2025-02-24",
    applications: 8,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    postedDate: "2025-02-23",
    applications: 15,
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

  const handleUpdateStatus = (index, status) => {
    const updatedInterviews = [...interviews];
    updatedInterviews[index].status = status;
    setInterviews(updatedInterviews);
  };

  const handleFeedbackChange = (index, feedback) => {
    const updatedInterviews = [...interviews];
    updatedInterviews[index].feedback = feedback;
    setInterviews(updatedInterviews);
  };

  return (
    <>
      <div className="com-container">
        <div className="c-hero">
          <div className="c-grid-container">
            <div className="c-grid-box blue">
              <h2 className="c-grid-title">Total Job Postings</h2>
              <p className="c-grid-p"> 30</p>
            </div>

            <div className="c-grid-box purple">
              <h2 className="c-grid-title">Total Applications Received</h2>
              <p className="c-grid-p"> 10 </p>
            </div>

            <div className="c-grid-box yellow">
              <h2 className="c-grid-title">No. of Students Shortlisted</h2>
              <p className="c-grid-p"> 11 </p>
            </div>

            <div className="c-grid-box green">
              <h2 className="c-grid-title">No. of Students Hired</h2>
              <p className="c-grid-p"> 21</p>
            </div>
          </div>

          <div className="job-grid">
            {jobPostings.map((job) => (
              <div key={job.id} className="job-card">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-info">Posted on: {job.postedDate}</p>
                <p className="job-info">Applications: {job.applications}</p>
                <div className="job-buttons">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            ))}
          </div>

          <div className="stu-access">
            <h2>Student Applications</h2>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Skills</th>
                  <th>Year</th>
                  <th>CGPA</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.skills}</td>
                    <td>{student.year}</td>
                    <td>{student.cgpa}</td>
                    <td>
                      <button
                        className="c-short-btn"
                        onClick={() =>
                          handleStatusChange(student.id, "Shortlisted")
                        }
                      >
                        Shortlist
                      </button>
                      <button
                        className="c-reject-btn"
                        onClick={() =>
                          handleStatusChange(student.id, "Rejected")
                        }
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="interview-card">
            <h2 className="text-xl font-semibold mb-4">Interview Scheduling</h2>

            {/* Schedule Interview Form */}
            <div className="mb-4 flex gap-2">
              <input
                type="text"
                placeholder="Student Name"
                value={newInterview.student}
                onChange={(e) =>
                  setNewInterview({ ...newInterview, student: e.target.value })
                }
                className="border p-2 rounded w-1/3"
              />
              <input
                type="date"
                value={newInterview.date}
                onChange={(e) =>
                  setNewInterview({ ...newInterview, date: e.target.value })
                }
                className="border p-2 rounded w-1/3"
              />
              <button
                onClick={handleAddInterview}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>

            {/* Interview List */}
            <table className="interview-card">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {interviews.map((interview, index) => (
                  <tr key={index} >
                    <td>{interview.student}</td>
                    <td>{interview.date}</td>
                    <td>
                      <select
                        value={interview.status}
                        onChange={(e) =>
                          handleUpdateStatus(index, e.target.value)
                        }
                        className="border p-1"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Attended">Attended</option>
                        <option value="Not Attended">Not Attended</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Add feedback"
                        value={interview.feedback}
                        onChange={(e) =>
                          handleFeedbackChange(index, e.target.value)
                        }
                      
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyHome;