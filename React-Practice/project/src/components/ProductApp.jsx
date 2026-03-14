import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import ProductCard from "../Product_Store_App/Components/ProductCard";

function ProductApp() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
  ]);

  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
  });

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = useCallback(
    (id) => {
      const updated = products.filter((product) => product.id !== id);
      setProducts(updated);
    },
    [products]
  );

  const handleAdd = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: formData.productName,
      price: formData.productPrice,
    };

    setProducts([...products, newProduct]);

    setFormData({
      productName: "",
      productPrice: "",
    });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const totalPrice = useMemo(() => {
    return products.reduce((acc, item) => acc + Number(item.price), 0);
  }, [products]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">

      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Product Manager
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded-lg shadow-md w-[400px] space-y-4"
      >
        <div>
          <label className="block font-semibold mb-1">
            Product Name
          </label>

          <input
            name="productName"
            placeholder="Enter Product Name"
            value={formData.productName}
            onChange={handleChange}
            ref={inputRef}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Product Price
          </label>

          <input
            name="productPrice"
            placeholder="Enter Product Price"
            value={formData.productPrice}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </form>

      {/* PRODUCT LIST */}
      <div className="mt-8 w-[400px] space-y-4">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <ProductCard name={product.name} price={product.price} />

            <button
              onClick={() => handleDelete(product.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}

      </div>

      {/* TOTAL PRICE */}
      <div className="mt-6 text-xl font-bold text-green-600">
        Total Price: ₹{totalPrice}
      </div>
    </div>
  );
}

export default ProductApp;