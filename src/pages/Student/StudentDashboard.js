import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import StudentNavbar from "./StudentNavbar";
import StudentSidebar from "./StudentSidebar";
import StudentHome from "./StudentHome";
import StudentProfile from "./StudentProfile";
import SJobSearch from "./SJobSearch";
import SJobAlert from "./SJobAlert";
import SAnalytics from "./SAnalytics";
import SResources from "./SResources";
import SNotification from "./SNotification";
import STrackPerformance from "./STrackPerformance";
import "./StudentHome.css";

const student = {
  name: "Sanjana",
};

const SDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5050/api/student/student-dashboard", {
      method: "GET",
      credentials: "include", // if using authentication
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching dashboard:", err));
  }, []);

  return (
    <div className="s-dashboard">
      <StudentNavbar studentName={student.name} />
      <StudentSidebar />
      <Routes>
        <Route index element={<StudentHome />} />
        <Route path="s-profile" element={<StudentProfile />} />
        <Route path="s-job-search" element={<SJobSearch />} />
        <Route path="s-job-alert" element={<SJobAlert />} />
        <Route path="s-analytics" element={<SAnalytics />} />
        <Route path="s-resources" element={<SResources />} />
        <Route path="s-notification" element={<SNotification />} />
        <Route path="s-track-performance" element={<STrackPerformance />} />
      </Routes>
    </div>
  );
};

export default SDashboard;
