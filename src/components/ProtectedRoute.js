import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return token && allowedRoles.includes(role) ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;