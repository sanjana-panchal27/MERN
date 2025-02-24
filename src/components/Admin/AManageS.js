import React, { useState, useEffect } from "react";
import "./AdminHome.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";

const AManageS = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    resume: "",
  });

  useEffect(() => {
    setStudents([
      {
        _id: 1,
        name: "John Doe",
        email: "john@example.com",
        course: "BSc IT",
        status: "Pending",
        resume: "resume1.pdf",
      },
      {
        _id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        course: "BCA",
        status: "Approved",
        resume: "resume2.pdf",
      },
    ]);
  }, []);

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student._id !== id));
  };

  const handleStatusChange = (id, status) => {
    setStudents(
      students.map((student) =>
        student._id === id ? { ...student, status } : student
      )
    );
  };

  const openEditModal = (student) => {
    setSelectedStudent(student);
    setFormData({
      name: student.name,
      email: student.email,
      course: student.course,
      resume: student.resume,
    });
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    setStudents(
      students.map((student) =>
        student._id === selectedStudent._id
          ? { ...selectedStudent, ...formData }
          : student
      )
    );
    setIsModalOpen(false);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="admin-container">
        <h1>Manage Students</h1>
        <input
          type="text"
          placeholder="Search students..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Status</th>
              <th>Resume</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td
                  className={
                    student.status === "Approved" ? "approved" : "pending"
                  }
                >
                  {student.status}
                </td>
                <td>
                  <a
                    href={student.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineFilePdf className="a-icon" />
                  </a>
                </td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => openEditModal(student)}
                  >
                    <FaEdit className="a-icon" />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(student._id)}
                  >
                    <MdDelete className="a-icon" />
                  </button>
                  {student.status === "Pending" ? (
                    <button
                      className="approve-btn"
                      onClick={() =>
                        handleStatusChange(student._id, "Approved")
                      }
                    >
                      <FaCheckCircle className="a-icon" />
                    </button>
                  ) : (
                    <button
                      className="reject-btn"
                      onClick={() =>
                        handleStatusChange(student._id, "Rejected")
                      }
                    >
                      <FaTimesCircle className="a-icon" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3>Edit Student</h3>
              <label>Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <label>Course</label>
              <input
                type="text"
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
              />
              <button onClick={handleUpdate}>Save Changes</button>
              <button
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AManageS;
