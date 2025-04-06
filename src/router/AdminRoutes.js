import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return token && role === "admin" ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoutes;