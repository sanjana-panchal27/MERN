import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { AuthProvider } from './context/AuthContext';
import AdminDashboard from './pages/Admin/AdminDashboard';
import StudentDashboard from './pages/Student/StudentDashboard';
import CompanyDashboard from './pages/Company/CompanyDashboard';
import Logout from './pages/Logout';
import Settings from './pages/Settings';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LandingPage />} />

          <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
          <Route path="/company-dashboard/*" element={<CompanyDashboard />} />
          <Route path="/student-dashboard/*" element={<StudentDashboard />} />
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
