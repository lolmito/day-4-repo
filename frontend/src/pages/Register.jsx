import React from "react";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>
        <form className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>
          </div>
          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#FFFAFA] text-black font-semibold py-2 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-primary"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
