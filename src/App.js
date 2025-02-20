import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StuNav from "./components/Student/StuNav";
import StuSidebar from "./components/Student/StuSidebar";
import StudentHome from "./components/Student/StudentHome";
import StudentProfile from "./components/Student/StudentProfile";
import SJobSearch from "./components/Student/SJobSearch";
import SJobAlert from "./components/Student/SJobAlert";
import STrackPerformance from "./components/Student/STrackPerformance";
import SAnalytics from "./components/Student/SAnalytics";
import SResources from "./components/Student/SResources";
import SNotification from "./components/Student/SNotification";

function App() {
  return (
    <BrowserRouter>
      <div className="student-profile">
        <StuNav />
        <StuSidebar />

        <Routes>
          <Route exact path="/" element={<StudentHome />} />
          <Route exact path="/s-profile" element={<StudentProfile />}></Route>
          <Route exact path="/s-job-search" element={<SJobSearch />}></Route>
          <Route exact path="/s-job-alert" element={<SJobAlert />}></Route>
          <Route
            exact
            path="/s-track-performance"
            element={<STrackPerformance />}
          ></Route>
          <Route
            exact
            path="/s-placement-analytics"
            element={<SAnalytics />}
          ></Route>

          <Route exact path="/s-resources" element={<SResources />}></Route>
          <Route
            exact
            path="/s-notification"
            element={<SNotification />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
