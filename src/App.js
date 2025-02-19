import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StuNav from "./components/Student/StuNav";
import StuSidebar from "./components/Student/StuSidebar";
import StudentHome from "./components/Student/StudentHome";
import StudentProfile from "./components/Student/StudentProfile";

function App() {
  return (
    <BrowserRouter>
      <div className="student-profile">
        <StuNav />
        <StuSidebar />

        <Routes>
          <Route exact path="/" element={<StudentHome />} />
          <Route exact path="/stuprofile" element={<StudentProfile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
