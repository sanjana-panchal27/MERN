import React, { useState } from "react";
import "./StudentHome.css";

const SJobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const jobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Remote",
      type: "Full Time",
      category: "engineering",
    },
    {
      title: "UI/UX Designer",
      company: "Accenture",
      location: "Remote",
      type: "Full Time",
      category: "design",
    },
    {
      title: "Pharma Analyst",
      company: "Sun Pharma",
      location: "Ahmedabad",
      type: "Full Time",
      category: "pharmacy",
    },
    {
      title: "Legal Advisor",
      company: "Tata Group",
      location: "Mumbai",
      type: "Part Time",
      category: "law",
    },
  ];

  const handleSearch = () => {
    // No need to do anything here if using filteredJobs inline below
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || job.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="stu-container">
      <h1>Job Search</h1>

      <div className="s-job-search">
        <input
          type="text"
          className="search"
          placeholder="Search for jobs.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>

        <div className="s-filter-opt">
          <select
            className="s-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="engineering">Engineering</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="management">Management</option>
            <option value="design">Design</option>
            <option value="law">Law</option>
          </select>
        </div>

        <div className="s-cards">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div key={index} className="s-card">
                <h2>{job.title}</h2>
                <p>{job.company}</p>
                <p>{job.location}</p>
                <p>{job.type}</p>
                <button>Apply</button>
              </div>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SJobSearch;
