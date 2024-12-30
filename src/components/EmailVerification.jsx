import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailVerification = ({ handleEmailVerification }) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const navigate = useNavigate();

  const handleVerifyEmail = () => {
    setIsVerifying(true); // Set to true to show loading state

    // Simulate a delay of 5 seconds for email verification
    setTimeout(() => {
      handleEmailVerification(); // Simulate email verification
      navigate("/login"); // Redirect to login page after verification
    }, 5000); // 5 seconds delay
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Email Verification</h1>
        
        <p className="mb-6 text-gray-700">
          We've sent a verification link to your email. Please check your inbox and click the link to verify your email address.
        </p>

        {isVerifying ? (
          <div className="text-center">
            <div className="spinner-border animate-spin border-t-4 border-blue-600 border-solid rounded-full w-12 h-12 mb-4" />
            <p className="text-blue-600">Verifying email...</p>
            <p className="text-sm text-gray-500">Please wait while we verify your email. This may take a few seconds.</p>
          </div>
        ) : (
          <button
            onClick={handleVerifyEmail}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
          >
            Verify Email
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
