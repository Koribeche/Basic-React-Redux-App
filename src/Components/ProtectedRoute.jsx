import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
  const location = useLocation();
  const user = useSelector((state) => state.auth);

  if (!user) return <Navigate to="/login" state={{ from: location }} />;

  return <Outlet />;
}
