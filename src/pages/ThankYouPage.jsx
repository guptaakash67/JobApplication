import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Thank You!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your application has been successfully submitted. We will review your
          application and get back to you soon.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
