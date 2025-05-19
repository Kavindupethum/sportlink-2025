// src/Components/Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    dob: '',
    address: '',
  });

  const [activeTab, setActiveTab] = useState(1); // State to control active tab

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-red-600 to-black">
      <div className="w-full sm:w-3/4 lg:w-1/3 bg-white p-8 rounded-2xl shadow-2xl">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-black mb-8">Create Your Account</h1>

        {/* Tabs for form sections */}
        <div className="flex justify-between mb-6">
          <button
            onClick={() => setActiveTab(1)}
            className={`py-2 px-4 rounded-lg text-white ${activeTab === 1 ? 'bg-red-600' : 'bg-gray-600'}`}
          >
            Personal Info
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`py-2 px-4 rounded-lg text-white ${activeTab === 2 ? 'bg-red-600' : 'bg-gray-600'}`}
          >
            Contact Info
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className={`py-2 px-4 rounded-lg text-white ${activeTab === 3 ? 'bg-red-600' : 'bg-gray-600'}`}
          >
            Account Info
          </button>
        </div>

        {/* Form Sections */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tab 1: Personal Info */}
          {activeTab === 1 && (
            <>
              <div className="w-full">
                <label className="text-gray-600 block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div className="w-full">
                <label className="text-gray-600 block mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                  placeholder="Enter your username"
                />
              </div>
            </>
          )}

          {/* Tab 2: Contact Info */}
          {activeTab === 2 && (
            <>
              <div className="w-full">
                <label className="text-gray-600 block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div className="w-full">
                <label className="text-gray-600 block mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </>
          )}

          {/* Tab 3: Account Info */}
          {activeTab === 3 && (
            <>
              <div className="w-full">
                <label className="text-gray-600 block mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                  placeholder="Enter your password"
                />
              </div>

              <div className="w-full">
                <label className="text-gray-600 block mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                />
              </div>

              <div className="w-full">
                <label className="text-gray-600 block mb-2">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 transition duration-300"
                  placeholder="Enter your address"
                ></textarea>
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="w-full flex justify-center mt-6">
            <Link to="/home">
            <button
              type="submit"
              className="px-8 py-3 bg-red-600 text-white rounded-lg text-xl font-semibold hover:bg-red-700 focus:outline-none transition duration-200"
            >
                Registration
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
