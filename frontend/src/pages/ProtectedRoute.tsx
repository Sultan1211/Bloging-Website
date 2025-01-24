import { Navigate, Outlet, useLocation } from "react-router-dom";


const ProtectedRoute: React.FC = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
