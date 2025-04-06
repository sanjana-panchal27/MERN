import { Navigate, Outlet } from "react-router-dom";

const StudentRoutes = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return token && role === "student" ? <Outlet /> : <Navigate to="/login" />;
};

export default StudentRoutes;