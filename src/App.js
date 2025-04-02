import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";

import LandingPage from "./routes/LandingPage";
import StudentRoutes from "./routes/StudentRoutes";
import CompanyRoutes from "./routes/CompanyRoutes";
import AdminRoutes from "./routes/AdminRoutes";

import SDashboard from "./components/Student/SDashboard";
import CDashboard from "./components/Company/CDashboard";
import ADashboard from "./components/Admin/ADashboard";
import Login from "./components/Login/Login";

function App() {
  const theme = {
    media: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  };

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // Assuming role is stored as 'student', 'company', 'admin'

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />

          {/* Redirect to respective dashboard if user is logged in */}
          <Route
            path="/dashboard"
            element={
              token ? (
                role === "student" ? (
                  <Navigate to="/student-dashboard" replace />
                ) : role === "company" ? (
                  <Navigate to="/company-dashboard" replace />
                ) : role === "admin" ? (
                  <Navigate to="/admin-dashboard" replace />
                ) : (
                  <Navigate to="/" replace />
                )
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Protected Routes - Dashboards */}
          <Route
            path="/student-dashboard/*"
            element={
              token && role === "student" ? (
                <StudentRoutes />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          >
            <Route index element={<SDashboard />} />
          </Route>
          <Route
            path="/company-dashboard/*"
            element={
              token && role === "company" ? (
                <CompanyRoutes />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          >
            <Route index element={<CDashboard />} />
          </Route>
          <Route
            path="/admin-dashboard/*"
            element={
              token && role === "admin" ? (
                <AdminRoutes />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          >
            <Route index element={<ADashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
