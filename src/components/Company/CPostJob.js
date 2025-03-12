import React, { useState } from 'react';
import './CompanyHome.css';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { MdOutlineSecurityUpdateGood } from 'react-icons/md';

const CPostJob = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'ABC' },
  ]);

  const addJob = () => {
    const newJob = {
      id: Date.now(),
      title: 'New Job',
      company: 'Company Name',
    };
    setJobs([...jobs, newJob]);
  };

  const updateJob = (id) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, title: 'Updated Job Title' } : job
    );
    setJobs(updatedJobs);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  return (
    <>
      <div className="com-container">
        <h1>Post Job</h1>

        <div className="c-post-job">
          <h2> Job Openings </h2>

          <button className="post-job-btn" onClick={addJob}>
            <FaPlus />
            Post a Job
          </button>

          <div>
            {jobs.map((job) => (
              <div key={job.id} className="c-card">
                <h3>{job.title}</h3>
                <p>{job.company}</p>

                <div>
                  <button onClick={() => updateJob(job.id)} className='update'>
                    <MdOutlineSecurityUpdateGood />
                  </button>

                  <button onClick={() => deleteJob(job.id)} className='delete'>
                    <FaMinus />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CPostJob;
