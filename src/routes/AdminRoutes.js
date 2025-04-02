import { Navigate, Outlet } from "react-router-dom";

const StudentRoutes = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default StudentRoutes;
