import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">⚡ Welcome to ElectroShop!</h1>
        <p className="text-lg mb-6">Your hub for the latest gadgets and electronics.</p>
        <Link
          to="/shop"
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500"
        >
          Shop Now
        </Link>
      </section>

      {/* Categories */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { name: "Laptops", icon: "💻" },
            { name: "Smartphones", icon: "📱" },
            { name: "Accessories", icon: "🎧" },
          ].map((cat, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl shadow hover:shadow-lg cursor-pointer"
            >
              <p className="text-4xl mb-3">{cat.icon}</p>
              <h3 className="text-lg font-semibold">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">🔥 Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Laptop", price: "₹60,000" },
            { name: "Headphones", price: "₹3,000" },
            { name: "Smartphone", price: "₹25,000" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 border rounded-xl shadow hover:shadow-lg text-center"
            >
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-green-600 font-bold mt-2">{item.price}</p>
              <Link
                to="/shop"
                className="mt-3 inline-block px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center mt-12">
        <p>📧 Contact: support@electroshop.com</p>
        <p className="mt-2 text-sm">© {new Date().getFullYear()} ElectroShop. All rights reserved.</p>
      </footer>
    </div>
  );
}
