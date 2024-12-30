import React from "react";
import { Link } from "react-router-dom";

const ThankYouMessage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your application has been successfully submitted. We will review your
          application and get back to you soon.
        </p>
        <Link to="/">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouMessage;
