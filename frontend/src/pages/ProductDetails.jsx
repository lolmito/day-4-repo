import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const { product_id } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/products/${product_id}`
        );
        console.log(response.data);
        setProductDetails(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductDetails();
  }, [product_id]);

  return (
    <div className="bg-white">
      <div className="pt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <ChevronRightIcon className="h-5 w-5 text-gray-300" />
            </li>
            <li>
              <span className="text-gray-700">
                {productDetails.product_name}
              </span>
            </li>
          </ol>
        </nav>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image */}
          <div className="lg:col-span-2 w-full">
            <img
              src={`http://127.0.0.1:8000/${productDetails.image}`}
              alt="Product"
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {productDetails.product_name}
              </h1>
              <p className="mt-2 text-xl text-indigo-600 font-semibold">
                ₱{productDetails.product_price}
              </p>
            </div>

            <p className="text-sm font-medium text-gray-700">
              Available Stock: {productDetails.countInStock}
            </p>

            <div className="flex items-center space-x-4">
              <button
                disabled
                className="p-2 bg-gray-200 rounded disabled:opacity-50"
              >
                &minus;
              </button>
              <span className="w-8 text-center">1</span>
              <button
                disabled
                className="p-2 bg-gray-200 rounded disabled:opacity-50"
              >
                +
              </button>
            </div>

            <button className="w-full py-3 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Add to Cart
            </button>

            {/* <p className="text-sm text-red-600 mt-2">
              Error or status message here
            </p> */}
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">Description</h2>
          <p className="mt-4 text-gray-700">{productDetails.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
