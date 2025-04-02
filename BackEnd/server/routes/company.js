import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CompanyHome from '../components/Company/CompanyHome';
import CompanyProfile from '../components/Company/CompanyProfile';
import CPostJob from '../components/Company/CPostJob';
import CAccess from '../components/Company/CAccess';
import CShortlist from '../components/Company/CShortlist';
import CFeedback from '../components/Company/CFeedback';
import ProtectedRoute from '../ProtectedRoute';
import ComNav from '../components/Company/ComNav';
import ComSidebar from '../components/Company/ComSidebar';

const CompanyRoutes = () => {
  return (
    <Route element={<ProtectedRoute allowedRoles={["Company"]} />}>
      <Route
        path="/company-dashboard/*"
        element={
          <div className="company-profile">
            <ComNav />
            <ComSidebar />
            <Routes>
              <Route path="/" element={<CompanyHome />} />
              <Route path="/c-profile" element={<CompanyProfile />} />
              <Route path="/c-postjob" element={<CPostJob />} />
              <Route path="/c-access" element={<CAccess />} />
              <Route path="/c-shortlist" element={<CShortlist />} />
              <Route path="/c-feedback" element={<CFeedback />} />
            </Routes>
          </div>
        }
      />
    </Route>
  );
};

export default CompanyRoutes;