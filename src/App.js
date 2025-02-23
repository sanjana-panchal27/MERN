import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminNavbar from "./components/Admin/AdminNavbar";
import AdminSidebar from "./components/Admin/AdminSidebar";
import AdminHome from "./components/Admin/AdminHome";
import AManageC from "./components/Admin/AManageC";
import AManageS from "./components/Admin/AManageS";
import ATrackPerformance from "./components/Admin/ATrackPerformance";
import AReports from "./components/Admin/AReports";
import ANotification from "./components/Admin/ANotification";

function App() {
  return (
    <BrowserRouter>
      <div className="admin-profile">
        <AdminNavbar />
        <AdminSidebar />

        <Routes>
          <Route exact path="/" element={<AdminHome />}></Route>
          <Route exact path="/a-manage-student" element={<AManageS />}></Route>
          <Route exact path="/a-manage-company" element={<AManageC />}></Route>
          <Route
            exact
            path="/a-track-performance"
            element={<ATrackPerformance />}
          ></Route>
          <Route exact path="/a-reports" element={<AReports />}></Route>
          <Route
            exact
            path="/a-notification"
            element={<ANotification />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
