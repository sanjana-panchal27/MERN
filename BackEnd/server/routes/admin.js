import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminHome from '../components/Admin/AdminHome';
import AManageC from '../components/Admin/AManageC';
import AManageS from '../components/Admin/AManageS';
import ATrackPerformance from '../components/Admin/ATrackPerformance';
import AReports from '../components/Admin/AReports';
import ANotification from '../components/Admin/ANotification';
import ProtectedRoute from '../ProtectedRoute';
import AdminNavbar from '../components/Admin/AdminNavbar';
import AdminSidebar from '../components/Admin/AdminSidebar';

const AdminRoutes = () => {
  return (
    <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
      <Route
        path="/admin-dashboard/*"
        element={
          <div className="admin-profile">
            <AdminNavbar />
            <AdminSidebar />
            <Routes>
              <Route path="/" element={<AdminHome />} />
              <Route path="/a-manage-student" element={<AManageS />} />
              <Route path="/a-manage-company" element={<AManageC />} />
              <Route path="/a-track-performance" element={<ATrackPerformance />} />
              <Route path="/a-reports" element={<AReports />} />
              <Route path="/a-notification" element={<ANotification />} />
            </Routes>
          </div>
        }
      />
    </Route>
  );
};

export default AdminRoutes;