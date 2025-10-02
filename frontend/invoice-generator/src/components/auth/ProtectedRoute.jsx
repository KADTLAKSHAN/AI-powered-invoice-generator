import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

const ProtectedRoute = ({ children }) => {
  // WILL INTEGRATE THESE VALUES LATER
  const isAuthenticated = true;
  const loading = false;

  if (loading) {
    // SPINNER HERE
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <DashboardLayout>{children ? children : <Outlet />}</DashboardLayout>;
};

export default ProtectedRoute;
