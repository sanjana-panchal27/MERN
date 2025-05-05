import React, { useState, useEffect } from 'react';
import './AdminHome.css';

const AReports = () => {
  const [reportType, setReportType] = useState('students');
  const [year, setYear] = useState('');
  const [department, setDepartment] = useState('');
  const [placementStatus, setPlacementStatus] = useState('');
  const [reports, setReports] = useState([]); // Store fetched reports

  // Fetch reports from backend
  useEffect(() => {
    fetch('http://localhost:5050/api/reports') // ✅ Changed to correct port 5050
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched reports:', data); // Debug log
        setReports(data);
      })
      .catch((err) => console.error('Error fetching reports:', err));
  }, []);

  // Handle report generation
  const handleGenerateReport = async (format) => {
    console.log(`Generating ${format.toUpperCase()} report...`);

    fetch(`http://localhost:5050/api/reports/${format}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Student Placement Report',
        summary: 'This report contains placement details of students.',
      }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to generate report');

        // Get the response as a Blob (Binary Large Object)
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Report.${format === 'pdf' ? 'pdf' : 'xlsx'}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((err) => console.error('Error generating report:', err));
  };

  return (
    <>
      <div className="admin-container">
        <h1 className="admin-heading">Generate Reports</h1>

        <div className="reports-hero">
          <div className="filter-section">
            <label className="report-label">Report Type:</label>
            <select
              className="reports-select"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="students">Students</option>
              <option value="companies">Companies</option>
            </select>

            <label className="report-label">Year:</label>
            <input
              className="reports-input"
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />

            <label className="report-label">Department:</label>
            <input
              className="reports-input"
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />

            {reportType === 'students' && (
              <>
                <label>Placement Status:</label>
                <select
                  className="reports-select"
                  value={placementStatus}
                  onChange={(e) => setPlacementStatus(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="placed">Placed</option>
                  <option value="unplaced">Unplaced</option>
                </select>
              </>
            )}
          </div>

          <div className="button-section">
            <button
              onClick={() => handleGenerateReport('PDF')}
              className="pdf-btn"
            >
              Download PDF
            </button>
            <button
              onClick={() => handleGenerateReport('Excel')}
              className="pdf-btn"
            >
              Download Excel
            </button>
          </div>
        </div>

        {/* Display fetched reports */}
        <div className="reports-list">
          <h2 className="reports-h2">Available Reports</h2>
          {reports.length > 0 ? (
            reports.map((report, index) => (
              <div key={index} className="report-item">
                <h3>{report.title}</h3>
                <p>{report.summary}</p>
              </div>
            ))
          ) : (
            <p>No reports available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AReports;
