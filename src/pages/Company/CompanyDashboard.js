import React from "react";
import { Routes, Route } from "react-router-dom";

import CompanyNavbar from "./CompanyNavbar";
import CompanySidebar from "./CompanySidebar";
import CompanyHome from "./CompanyHome";
import CompanyProfile from "./CompanyProfile";
import CPostJob from "./CompanyPostJob";
import CompanyAccessS from "./CompanyAccessS";
import CShortlist from "./CompanyShortlist";
import CompanyFeedback from "./CompanyFeedback";
import "./CompanyHome.css";

const company = {
  name: "Google",
};

const CompanyDashboard = () => {
  return (
    <>
      <div className="c-dashboard">
        <CompanyNavbar companyName={company.name} />
        <CompanySidebar />

        <Routes>
          <Route index element={<CompanyHome />}></Route>
          <Route exact path="c-profile" element={<CompanyProfile />}></Route>
          <Route exact path="c-postjob" element={<CPostJob />}></Route>
          <Route exact path="c-access" element={<CompanyAccessS />}></Route>
          <Route exact path="c-shortlist" element={<CShortlist />}></Route>
          <Route exact path="c-feedback" element={<CompanyFeedback />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default CompanyDashboard;
