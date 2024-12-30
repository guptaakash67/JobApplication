import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailVerificationPage = ({ handleEmailVerification }) => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const navigate = useNavigate();

  const handleVerifyEmail = () => {
    // Simulate email verification
    setIsEmailVerified(true);
    handleEmailVerification();
    navigate("/login"); // After verification, redirect to login page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
        <p>A verification link has been sent to your email address.</p>
        <button
          onClick={handleVerifyEmail}
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Verify Email
        </button>
        {isEmailVerified && (
          <p className="text-green-600 mt-4">Your email is now verified!</p>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationPage;
