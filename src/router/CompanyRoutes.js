import { Navigate, Outlet } from "react-router-dom";

const CompanyRoutes = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return token && role === "company" ? <Outlet /> : <Navigate to="/login" />;
};

export default CompanyRoutes;