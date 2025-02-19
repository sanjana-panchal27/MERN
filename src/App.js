import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComNav from "./components/Company/ComNav";
import ComSidebar from "./components/Company/ComSidebar";
import CompanyHome from "./components/Company/CompanyHome";
import CompanyProfile from "./components/Company/CompanyProfile";
import CPostJob from "./components/Company/CPostJob";
import CAccess from "./components/Company/CAccess";
import CShortlist from "./components/Company/CShortlist";
import CFeedback from "./components/Company/CFeedback";
function App() {
  return (
    <BrowserRouter>
      <div className="company-profile">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
