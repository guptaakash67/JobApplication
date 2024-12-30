import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import JobApplyForm from "./components/JobApplyForm";
import EmailVerification from "./components/EmailVerification";
import SignupPage from "./pages/SignupPage"; // Add if you have this
import ThankYouPage from "./components/ThankYouPage"; // Add Thank You page import

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleEmailVerification = () => {
    setIsEmailVerified(true);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<h1>Welcome to Job Portal</h1>} />
        <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-email" element={<EmailVerification handleEmailVerification={handleEmailVerification} />} />
        <Route path="/apply" element={isLoggedIn ? <JobApplyForm /> : <LoginForm handleLogin={handleLogin} />} />
        <Route path="/thank-you" element={<ThankYouPage />} /> {/* Thank You page route */}
      </Routes>
    </Router>
  );
};

export default App;
