import React, { useState } from 'react';
import "./CompanyHome.css";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdOutlineSecurityUpdateGood } from 'react-icons/md';

const CPostJob = () => {
  const [jobs, setJobs] = useState([]);

  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    skills: '',
    deadline: '',
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setJobForm({ ...jobForm, [e.target.name]: e.target.value });
  };

  const addJob = () => {
    const { title, company, location, salary, skills, deadline } = jobForm;
    if (!title || !company) {
      return alert("Job Title and Company Name are required.");
    }

    const newJob = {
      id: Date.now(),
      ...jobForm,
    };

    setJobs([...jobs, newJob]);
    setJobForm({ title: '', company: '', location: '', salary: '', skills: '', deadline: '' });
  };

  const updateJob = (id) => {
    const job = jobs.find((job) => job.id === id);
    setJobForm({
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      skills: job.skills,
      deadline: job.deadline,
    });
    setEditingId(id);
  };

  const saveUpdate = () => {
    const updatedJobs = jobs.map((job) =>
      job.id === editingId ? { ...job, ...jobForm } : job
    );
    setJobs(updatedJobs);
    setEditingId(null);
    setJobForm({ title: '', company: '', location: '', salary: '', skills: '', deadline: '' });
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <div className="com-container">
      <h1  className="company-heading">Post Job</h1>

      <div className="c-post-job">
        <h2>Job Openings</h2>

        <div className="form">
          <input type="text" name="title" placeholder="Job Title" value={jobForm.title} onChange={handleChange} />
          <input type="text" name="company" placeholder="Company Name" value={jobForm.company} onChange={handleChange} />
          <input type="text" name="location" placeholder="Location" value={jobForm.location} onChange={handleChange} />
          <input type="text" name="salary" placeholder="Salary / Stipend" value={jobForm.salary} onChange={handleChange} />
          <input type="text" name="skills" placeholder="Required Skills (comma-separated)" value={jobForm.skills} onChange={handleChange} />
          <input type="date" name="deadline" placeholder="Application Deadline" value={jobForm.deadline} onChange={handleChange} />

          {editingId ? (
            <button className="post-job-btn" onClick={saveUpdate}>
              <MdOutlineSecurityUpdateGood /> Save Changes
            </button>
          ) : (
            <button className="post-job-btn" onClick={addJob}>
              <FaPlus /> Post a Job
            </button>
          )}
        </div>

        <div>
          {jobs.map((job) => (
            <div key={job.id} className="c-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p><strong>Skills:</strong> {job.skills}</p>
              <p><strong>Deadline:</strong> {job.deadline}</p>

              <div>
                <button onClick={() => updateJob(job.id)} className="update">
                  <MdOutlineSecurityUpdateGood />
                </button>
                <button onClick={() => deleteJob(job.id)} className="delete">
                  <FaMinus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CPostJob;
