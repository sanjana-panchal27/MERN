import React, { useState } from "react";
import "./AdminHome.css";  

import { FiPhoneCall } from "react-icons/fi";

const initialCompanies = [
  {
    id: 1,
    name: "TechCorp",
    job: "Software Engineer",
    status: "Completed",
    students: "5 of 5",
    contact: "9876543210",
  },
  {
    id: 2,
    name: "InnovateX",
    job: "Frontend Developer",
    status: "Pending",
    students: "3 of 5",
    contact: "9876543211",
  },
  {
    id: 3,
    name: "DevHub",
    job: "Backend Developer",
    status: "Scheduled",
    students: "2 of 5",
    contact: "9876543212",
  },
];

const AManageC = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [companies, setCompanies] = useState(initialCompanies);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    status: "",
    students: "",
    contact: "",
  });

  const filteredCompanies = companies
    .filter(
      (company) =>
        company.name.toLowerCase().includes(search.toLowerCase()) ||
        company.job.toLowerCase().includes(search.toLowerCase())
    )
    .filter((company) =>
      statusFilter ? company.status === statusFilter : true
    );

  const openEditModal = (company) => {
    setSelectedCompany(company);
    setFormData({
      name: company.name,
      job: company.job,
      status: company.status,
      students: company.students,
      contact: company.contact,
    });
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    setCompanies(
      companies.map((company) =>
        company.id === selectedCompany.id
          ? { ...company, ...formData }
          : company
      )
    );
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="admin-container">
        <h1>Manage Companies</h1>

        <div className="a-manage-c-hero">
          <div className="c-header">
            <input
              type="text"
              placeholder="Search by company or job profile..."
              className="c-search-bar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="c-status-filter"
              onChange={(e) => setStatusFilter(e.target.value)}
              value={statusFilter}
            >
              <option value="">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Scheduled">Scheduled</option>
            </select>
          </div>

          <table className="company-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Job Profile</th>
                <th>Status</th>
                <th>Students</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredCompanies.map((company) => (
                <tr key={company.id}>
                  <td>{company.name}</td>
                  <td>{company.job}</td>
                  <td className={`status-${company.status.toLowerCase()}`}>
                    {company.status}
                  </td>
                  <td>{company.students}</td>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => openEditModal(company)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isModalOpen && (
            <div className="modal">
              <h3>Edit Company</h3>
              <div className="modal-content">
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Job Profile</label>
                  <input
                    type="text"
                    value={formData.job}
                    onChange={(e) =>
                      setFormData({ ...formData, job: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Scheduled">Scheduled</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Students</label>
                  <input
                    type="text"
                    value={formData.students}
                    onChange={(e) =>
                      setFormData({ ...formData, students: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Contact</label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
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
    </>
  );
};

export default AManageC;
