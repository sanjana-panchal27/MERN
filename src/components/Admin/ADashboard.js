import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import AdminHome from "./AdminHome";
import AManageC from "./AManageC";
import AManageS from "./AManageS";
import ATrackPerformance from "./ATrackPerformance";
import AReports from "./AReports";
import ANotification from "./ANotification";

const ADashboard = () => {
  return (
    <div>
      <div className="a-dashboard">
        <AdminNavbar />
        <AdminSidebar />

        <Routes>
          <Route index element={<AdminHome />}></Route>
          <Route exact path="a-manage-student" element={<AManageS />}></Route>
          <Route exact path="a-manage-company" element={<AManageC />}></Route>
          <Route
            exact
            path="a-track-performance"
            element={<ATrackPerformance />}
          ></Route>
          <Route exact path="a-reports" element={<AReports />}></Route>
          <Route
            exact
            path="a-notification"
            element={<ANotification />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default ADashboard;
