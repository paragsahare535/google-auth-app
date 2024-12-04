import React from "react";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="welcome-container">
      <h1>Welcome, {user?.name}</h1>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
