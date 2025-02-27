import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/Navbar/Home";
// import AboutUs from "./components/Navbar/AboutUs";
// import Service from "./components/Navbar/Service";
// import Contact from "./components/Navbar/Contact";
// import FAQs from "./components/Navbar/FAQs";
// import Login from "./components/Login/Login";
// import Footer from "./components/Navbar/Footer";

// import AdminNavbar from "./components/Admin/AdminNavbar";
// import AdminSidebar from "./components/Admin/AdminSidebar";
// import AdminHome from "./components/Admin/AdminHome";
// import AManageC from "./components/Admin/AManageC";
// import AManageS from "./components/Admin/AManageS";
// import ATrackPerformance from "./components/Admin/ATrackPerformance";
// import AReports from "./components/Admin/AReports";
// import ANotification from "./components/Admin/ANotification";

// import ComNav from "./components/Company/ComNav";
// import ComSidebar from "./components/Company/ComSidebar";
// import CompanyHome from "./components/Company/CompanyHome";
// import CompanyProfile from "./components/Company/CompanyProfile";
// import CPostJob from "./components/Company/CPostJob";
// import CAccess from "./components/Company/CAccess";
// import CShortlist from "./components/Company/CShortlist";
// import CFeedback from "./components/Company/CFeedback";

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
<StuNav />
<StuSidebar />
<div className="stu-container">


<Routes>
          <Route exact path="/" element={<StudentHome />} />
          <Route exact path="/s-profile" element={<StudentProfile />}></Route>
          <Route exact path="/s-job-search" element={<SJobSearch />}></Route>
          <Route exact path="/s-job-alert" element={<SJobAlert />}></Route>
          <Route exact path="/s-analytics" element={<SAnalytics />}></Route>
          <Route exact path="/s-resources" element={<SResources />}></Route>
          <Route exact path="/s-notification" element={<SNotification />}></Route>
          <Route
            exact
            path="/s-track-performance"
            element={<STrackPerformance />}
           ></Route>
     
            </Routes>
</div>

{/* <div className="app-container">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="aboutus" element={<AboutUs />} />
            <Route exact path="service" element={<Service />} />
            <Route exact path="contact" element={<Contact />} />
            <Route exact path="faqs" element={<FAQs />} />
            <Route exact path="login" element={<Login />}></Route>
          </Routes>
        </div>
        <Footer />
      </div> */}

 {/* <div className="admin-profile">
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
      </div> */}


     {/* <div className="company-profile">
        <ComNav />
        <ComSidebar />

        <Routes>
          <Route exact path="/" element={<CompanyHome />}></Route>
          <Route exact path="/c-profile" element={<CompanyProfile />}></Route>
          <Route exact path="/c-postjob" element={<CPostJob />}></Route>
          <Route exact path="/c-access" element={<CAccess />}></Route>
          <Route exact path="/c-shortlist" element={<CShortlist />}></Route>
          <Route exact path="/c-feedback" element={<CFeedback />}></Route>
        </Routes>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
