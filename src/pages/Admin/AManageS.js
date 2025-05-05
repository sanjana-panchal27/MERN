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
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    setStudents([
      {
        _id: 1,
        name: "John Doe",
        email: "john@example.com",
        course: "BSc IT",
        status: "Denied",
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
      {
        _id: 3,
        name: "Enola Holmes",
        email: "enola@example.com",
        course: "MBA",
        status: "Pending",
        resume: "resume3.pdf",
      },
      {
        _id: 4,
        name: "Rachel Green",
        email: "rachel@example.com",
        course: "B.Sc.Fashion Design",
        status: "Approved",
        resume: "resume4.pdf",
      },
      {
        _id: 5,
        name: "Ross",
        email: "ross@example.com",
        course: "B.Design",
        status: "Denied",
        resume: "resume5.pdf",
      },
      {
        _id: 6,
        name: "Matt le blac",
        email: "joe@example.com",
        course: "B.Pharmacy",
        status: "Pending",
        resume: "resume6.pdf",
      },
      {
        _id: 7,
        name: "Monica geller",
        email: "mon@example.com",
        course: "M.Sc.Micro",
        status: "Approved",
        resume: "resume7.pdf",
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
          ? { ...student, ...formData }
          : student
      )
    );
    setIsModalOpen(false);
  };

  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((student) =>
      statusFilter ? student.status === statusFilter : true
    );

  return (
    <>
      <div className="admin-container">
        <h1 className="admin-heading">Manage Students</h1>

        <div className="a-manage-s-hero">
          <div className="s-header">
            <input
              type="text"
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="a-search-bar"
            />

            <select
              className="s-status-filter"
              onChange={(e) => setStatusFilter(e.target.value)}
              value={statusFilter}
            >
              <option value="">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Denied">Denied</option>
              {/* <option value="Completed">Completed</option>
          <option value="Scheduled">Scheduled</option> */}
            </select>
          </div>
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
                  <td className={`status-${student.status.toLowerCase()}`}>
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
          <div className="edit-student">
            {isModalOpen && (
              <div className="modal">
                <h3>Edit Student</h3>
                <div className="modal-content">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label>Course</label>
                    <input
                      type="text"
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                    />
                  </div>
                  <div className="s-btn">
                    <button className="save-btn" onClick={handleUpdate}>
                      Save Changes
                    </button>
                    <button
                      className="close-btn"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AManageS;
