import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./components/Navbar/Home";
// import AboutUs from "./components/Navbar/AboutUs";
// import Service from "./components/Navbar/Service";
// import Contact from "./components/Navbar/Contact";
// import FAQs from "./components/Navbar/FAQs";
// import Login from "./components/Login/Login";
// import Footer from "./components/Navbar/Footer";

import StuNav from "./components/Student/StuNav";
import StuSidebar from "./components/Student/StuSidebar";
import "./App.css";
import StudentHome from "./components/Student/StudentHome";

function App() {
  return (
    <BrowserRouter>
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

      <div className="student-profile">
        <StuNav />
        <StuSidebar />

        <Routes>
          <Route exact path="/" element={<StudentHome />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
