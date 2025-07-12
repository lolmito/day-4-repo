import React from "react";

const Profile = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <button className="text-sm font-medium text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <p className="text-lg text-gray-700">
            <span className="font-medium">Username:</span> username_here
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-medium">Email:</span> email_here@example.com
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Purchase History
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <img
                      src="image_url_here"
                      alt="product name here"
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    order_id_here
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 hover:underline">
                    product name here
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">date_here</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    amount_here
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
