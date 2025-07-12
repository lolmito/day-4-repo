import { ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Cart = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-20 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h2>

        <ul className="divide-y divide-gray-200 mb-8">
          <li className="flex items-center py-6">
            <img
              src="https://via.placeholder.com/100x100.png?text=Product"
              alt="Product Name"
              className="h-24 w-24 rounded object-cover"
            />
            <div className="flex-1 ml-6">
              <h3 className="text-lg font-medium text-gray-900">
                Product Name
              </h3>
              <div className="mt-1">
                <label className="text-sm text-gray-500 mr-2">Qty:</label>
                <select className="border rounded px-2 py-1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <p className="text-sm text-gray-900 mt-2 font-semibold">
                ₱1,999.99
              </p>
            </div>
            <button className="text-gray-400 hover:text-red-600 ml-4">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </li>

          <li className="flex items-center py-6">
            <img
              src="https://via.placeholder.com/100x100.png?text=Product"
              alt="Product Name"
              className="h-24 w-24 rounded object-cover"
            />
            <div className="flex-1 ml-6">
              <h3 className="text-lg font-medium text-gray-900">
                Another Product
              </h3>
              <div className="mt-1">
                <label className="text-sm text-gray-500 mr-2">Qty:</label>
                <select className="border rounded px-2 py-1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <p className="text-sm text-gray-900 mt-2 font-semibold">
                ₱2,499.99
              </p>
            </div>
            <button className="text-gray-400 hover:text-red-600 ml-4">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </li>
        </ul>

        <div className="bg-gray-50 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Order Summary
          </h3>
          <div className="space-y-2 text-gray-700 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₱4,499.98</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>₱4,499.98</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 text-base font-medium">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
