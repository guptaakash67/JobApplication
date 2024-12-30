// src/components/ThankYouPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-600">Thank You for Applying!</h1>
        <p className="text-center text-gray-700 mb-6">
          Your job application has been submitted successfully. Our team will review your application and get back to you soon.
        </p>
        <div className="text-center">
          <Link to="/" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
