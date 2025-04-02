import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import StuNav from "./StuNav";
import StuSidebar from "./StuSidebar";
import StudentHome from "./StudentHome";
import StudentProfile from "./StudentProfile";
import SJobSearch from "./SJobSearch";
import SJobAlert from "./SJobAlert";
import SAnalytics from "./SAnalytics";
import SResources from "./SResources";
import SNotification from "./SNotification";
import STrackPerformance from "./STrackPerformance";
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
    <>
      <div className="s-dashboard">
        <StuNav />
        <StuSidebar />

        <Routes>
          <Route index element={<StudentHome />} />
          <Route exact path="s-profile" element={<StudentProfile />} />
          <Route exact path="s-job-search" element={<SJobSearch />} />
          <Route exact path="s-job-alert" element={<SJobAlert />} />
          <Route exact path="s-analytics" element={<SAnalytics />} />
          <Route exact path="s-resources" element={<SResources />} />
          <Route
            exact
            path="s-notification"
            element={<SNotification />}
          ></Route>
          <Route
            exact
            path="s-track-performance"
            element={<STrackPerformance />}
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default SDashboard;
