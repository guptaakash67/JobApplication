import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold text-blue-600">
          <span className="border-b-2 border-blue-600 pb-1">Job</span>Portal
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/apply"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Apply for Jobs
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
