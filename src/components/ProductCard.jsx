import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ name, description, price }) {
  const { addToCart, buyNow } = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-4 border rounded-xl shadow hover:shadow-lg">
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="mt-2 font-bold text-green-600">₹{price}</p>
      <div className="flex gap-2 mt-3">
        <button
          onClick={() => addToCart({ name, price })}
          className="px-3 py-1 bg-yellow-400 rounded-lg hover:bg-yellow-500"
        >
          Add to Cart
        </button>
        <button
          onClick={() => buyNow({ name, price }, navigate)}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
