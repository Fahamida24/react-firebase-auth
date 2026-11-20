import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // Not logged in -> redirect to the Login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
