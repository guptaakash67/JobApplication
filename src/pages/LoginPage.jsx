import React from "react";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = ({ handleLogin }) => {
  return (
    <div>
      <LoginForm handleLogin={handleLogin} />
      <div className="text-center mt-4">
        <p>Don't have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
