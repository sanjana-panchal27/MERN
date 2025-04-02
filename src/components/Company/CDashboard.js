import React from "react";
import { Routes, Route } from "react-router-dom";

import ComNav from "./ComNav";
import ComSidebar from "./ComSidebar";
import CompanyHome from "./CompanyHome";
import CompanyProfile from "./CompanyProfile";
import CPostJob from "./CPostJob";
import CAccess from "./CAccess";
import CShortlist from "./CShortlist";
import CFeedback from "./CFeedback";

const CDashboard = () => {
  return (
    <>
      <div className="c-dashboard">
        <ComNav />
        <ComSidebar />

        <Routes>
          <Route index element={<CompanyHome />}></Route>
          <Route exact path="c-profile" element={<CompanyProfile />}></Route>
          <Route exact path="c-postjob" element={<CPostJob />}></Route>
          <Route exact path="c-access" element={<CAccess />}></Route>
          <Route exact path="c-shortlist" element={<CShortlist />}></Route>
          <Route exact path="c-feedback" element={<CFeedback />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default CDashboard;
