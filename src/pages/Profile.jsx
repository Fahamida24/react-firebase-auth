import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="page">
      <h1>Profile</h1>
      <p>Email: <strong>{user.email}</strong></p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
