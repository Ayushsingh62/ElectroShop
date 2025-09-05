import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Store, History, Home } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-bold">ElectroShop</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-yellow-400">
            <Home size={18} /> Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="flex items-center gap-1 hover:text-yellow-400">
            <Store size={18} /> Shop
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="flex items-center gap-1 hover:text-yellow-400 relative"
          >
            <ShoppingCart size={18} /> Cart
            {cart.length > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-yellow-400 text-black text-xs rounded-full">
                {cart.reduce((sum, i) => sum + i.qty, 0)}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link
            to="/history"
            className="flex items-center gap-1 hover:text-yellow-400"
          >
            <History size={18} /> History
          </Link>
        </li>
      </ul>
    </nav>
  );
}