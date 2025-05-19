// src/components/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill out all fields.');
    } else {
      console.log('Logging in with:', { email, password });
      setError('');
      // Redirect or handle successful login here
    }
  };

  return (
    <div className="w-full h-screen flex">
      {/* Left side: Welcome and Registration */}
      <div className="w-1/2 h-full bg-red-700 p-10 rounded-tl-3xl rounded-br-3xl flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-white mb-4">Hello, Welcome!</h2>
        <p className="font-bold text-black mb-6">Don't have an account?</p>
        <button className="px-6 py-3 bg-white text-red-700 rounded-lg hover:bg-gray-300 transition duration-200">
          Registration
        </button>
      </div>

      {/* Right side: Login Form */}
      <div className="w-1/2 h-full bg-gray-800 p-10 rounded-tr-3xl rounded-bl-3xl flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-white mb-8">Login</h2>

        {error && <p className="text-red-900 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm">
          {/* Username */}
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Username</label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 text-sm border-0 focus:ring-2 focus:ring-red-600 focus:border-transparent rounded-lg"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-full">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="flex items-center border-2 border-gray-300 rounded-lg">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 text-sm border-0 focus:ring-2 focus:ring-red-600 focus:border-transparent rounded-lg"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-red-600 hover:text-white transition duration-200"
              onClick={() => console.log("Forgot password clicked")}
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 transition duration-200"
            >
              Login
            </button>
          </div>

          {/* Social Login Icons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-blue-600 text-white p-3 rounded-full">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="bg-gray-900 text-white p-3 rounded-full">
              <i className="fab fa-google"></i>
            </button>
            <button className="bg-black text-white p-3 rounded-full">
              <i className="fab fa-tiktok"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
