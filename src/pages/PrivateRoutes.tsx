import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem("responseId");
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
