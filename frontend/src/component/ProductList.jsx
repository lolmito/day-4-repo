import React from "react";
import { products } from "./products";

const ProductList = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly gap-2 mt-25">
        {products.map((product, index) => (
          <div key={index} className="w-80 shadow-xl p-8">
            <a>
              <img src={product.image} alt="" />
              <span className="font-bold">{product.name}</span>
              <div className="flex flex-wrap justify-between text-sm">
                <p>{product.brand}</p>
                <p>{product.price}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
