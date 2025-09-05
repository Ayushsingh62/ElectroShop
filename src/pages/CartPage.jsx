import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, checkout } = useCart();

  if (cart.length === 0) {
    return <div className="p-6 text-lg">🛒 Your cart is empty.</div>;
  }

  const grandTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🛒 Your Cart</h2>
      <ul className="space-y-4">
        {cart.map((item, i) => (
          <li
            key={i}
            className="flex justify-between items-center border p-3 rounded-lg"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">
                ₹{item.price} × {item.qty} ={" "}
                <span className="font-bold">₹{item.price * item.qty}</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQty(item.name, item.qty - 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => updateQty(item.name, item.qty + 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.name)}
                className="ml-3 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right text-lg font-bold">
        Total: ₹{grandTotal}
      </div>
      <button
        onClick={checkout}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        ✅ Checkout
      </button>
    </div>
  );
}