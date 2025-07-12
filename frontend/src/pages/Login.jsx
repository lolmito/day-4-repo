const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome to RivanShop
        </h2>

        <form className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-10">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500"
              >
                Show
              </button>
            </div>
            <p className="text-red-500 mt-4">Error message here</p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#FFFAFA] text-black font-semibold py-2 rounded-lg shadow-lg hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-primary"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
