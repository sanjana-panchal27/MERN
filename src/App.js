// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
// import "./App.css";

// import LandingPage from "./router/LandingPage";
// import StudentRoutes from "./router/StudentRoutes";
// import CompanyRoutes from "./router/CompanyRoutes";
// import AdminRoutes from "./router/AdminRoutes";

// import SDashboard from "./components/Student/SDashboard";
// import CDashboard from "./components/Company/CDashboard";
// import ADashboard from "./components/Admin/ADashboard";
// import Login from "./components/Login/Login";

// function App() {
//   const theme = {
//     media: {
//       sm: "640px",
//       md: "768px",
//       lg: "992px",
//       xl: "1200px",
//     },
//   };

//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role"); // Assuming role is stored as 'student', 'company', 'admin'

//   return (
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<Login />} />

//           {/* Redirect to respective dashboard if user is logged in */}
//           <Route
//             path="/dashboard"
//             element={
//               token ? (
//                 role === "student" ? (
//                   <Navigate to="/student-dashboard" replace />
//                 ) : role === "company" ? (
//                   <Navigate to="/company-dashboard" replace />
//                 ) : role === "admin" ? (
//                   <Navigate to="/admin-dashboard" replace />
//                 ) : (
//                   <Navigate to="/" replace />
//                 )
//               ) : (
//                 <Navigate to="/login" replace />
//               )
//             }
//           />

//           {/* Protected Routes - Dashboards */}
//           <Route
//             path="/student-dashboard/*"
//             element={
//               token && role === "student" ? (
//                 <StudentRoutes />
//               ) : (
//                 <Navigate to="/login" replace />
//               )
//             }
//           >
//             <Route index element={<SDashboard />} />
//           </Route>
//           <Route
//             path="/company-dashboard/*"
//             element={
//               token && role === "company" ? (
//                 <CompanyRoutes />
//               ) : (
//                 <Navigate to="/login" replace />
//               )
//             }
//           >
//             <Route index element={<CDashboard />} />
//           </Route>
//           <Route
//             path="/admin-dashboard/*"
//             element={
//               token && role === "admin" ? (
//                 <AdminRoutes />
//               ) : (
//                 <Navigate to="/login" replace />
//               )
//             }
//           >
//             <Route index element={<ADashboard />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";

// import AdminDashboard from "./pages/Admin/AdminDashboard";
// import StudentDashboard from "./pages/Student/StudentDashboard";
// import CompanyDashboard from "./pages/Company/CompanyDashboard";

// import Logout from "./pages/Logout";

import Home from "./pages/Navbar/Home";
import AboutUs from "./pages/Navbar/AboutUs";
import Service from "./pages/Navbar/Service";
import Contact from "./pages/Navbar/Contact";
import FAQs from "./pages/Navbar/FAQs";
import Login from "./pages/Login/Login";
import Footer from "./pages/Navbar/Footer";
import Header from "./pages/Navbar/Header";
import Error from "./Error";

import LoginSignup from "./router/LoginSignup";
function App() {
  const theme = {
    media: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/login" element={<LoginSignup />} />

          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/*" element={<Error />}></Route>
        </Routes>

        {/* <Route path="/admin-dashboard/*" element={<AdminDashboard />} /> */}
        {/* <Route path="/company-dashboard/*" element={<CompanyDashboard />} /> */}
        {/* <Route path="/student-dashboard/*" element={<StudentDashboard />} /> */}
        {/* <Route path="/logout" element={<Logout />}></Route> */}

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
