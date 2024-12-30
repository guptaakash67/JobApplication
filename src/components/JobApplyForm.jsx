// src/components/JobApplyForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    coverLetter: "",
    jobPosition: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate the form submission
    alert("Application submitted!");
    
    // After form submission, navigate to the Thank You page
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Job Application Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="resume" className="block text-gray-700">Resume Link</label>
            <input
              type="url"
              id="resume"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="coverLetter" className="block text-gray-700">Cover Letter</label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="jobPosition" className="block text-gray-700">Job Position</label>
            <select
              id="jobPosition"
              name="jobPosition"
              value={formData.jobPosition}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg mt-1"
            >
              <option value="">Select a Position</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Product Manager">Product Manager</option>
              <option value="UX Designer">UX Designer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplyForm;
