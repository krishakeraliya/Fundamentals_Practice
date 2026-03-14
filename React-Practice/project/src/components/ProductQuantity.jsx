import React, { useState } from "react";

function ProductQuantity() {
  const [quantity, setQuantity] = useState(1);
  const [removed, setRemoved] = useState(false);

  if (removed) {
    return (
      <h2 className="text-center text-red-500 text-2xl mt-10">
        No Product in cart
      </h2>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-[300px]">

        <h1 className="text-2xl font-bold mb-4 text-blue-600">
          Product : Laptop
        </h1>

        <h2 className="text-xl mb-4">
          Quantity: <span className="font-bold">{quantity}</span>
        </h2>

        <div className="flex justify-center gap-4 mb-4">

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            +
          </button>

          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
            disabled={quantity === 1}
            className="bg-red-500 text-white px-4 py-2 rounded 
            hover:bg-red-600 
            disabled:bg-gray-400 
            disabled:cursor-not-allowed"
          >
            -
          </button>

        </div>

        {quantity === 1 && (
          <p className="text-sm text-gray-500 mb-4">
            Minimum quantity reached
          </p>
        )}

        <button
          onClick={() => setRemoved(true)}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default ProductQuantity;