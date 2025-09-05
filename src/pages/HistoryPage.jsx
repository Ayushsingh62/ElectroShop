import React from "react";
import { useCart } from "../context/CartContext";

export default function HistoryPage() {
  const { history } = useCart();

  if (history.length === 0) {
    return <div className="p-6 text-lg">📜 No purchase history yet.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📜 Purchase History</h2>
      {history.map((order) => {
        const total = order.items.reduce(
          (sum, item) => sum + item.price * item.qty,
          0
        );
        return (
          <div
            key={order.id}
            className="border p-4 rounded-lg mb-4 shadow-sm bg-gray-50"
          >
            <p className="text-sm text-gray-600">Order Date: {order.date}</p>
            <ul className="mt-2 space-y-1">
              {order.items.map((item, i) => (
                <li key={i} className="text-gray-800">
                  {item.name} (x{item.qty}) – ₹{item.price * item.qty}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-bold">Total: ₹{total}</p>
          </div>
        );
      })}
    </div>
  );
}