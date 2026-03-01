import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const role = localStorage.getItem("role");

  // If not logged in as admin → redirect to home
  if (!role || role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}