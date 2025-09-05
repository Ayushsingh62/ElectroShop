import React from "react";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  const items = [
    { name: "Laptop", description: "High performance laptop.", price: 75000 },
    { name: "Headphones", description: "Noise cancelling headphones.", price: 2500 },
    { name: "Smartphone", description: "Latest smartphone model.", price: 30000 },
  ];

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <ProductCard
          key={i}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}