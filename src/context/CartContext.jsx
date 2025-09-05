import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (name, qty) => {
    if (qty <= 0) {
      removeFromCart(name);
    } else {
      setCart((prev) =>
        prev.map((i) => (i.name === name ? { ...i, qty } : i))
      );
    }
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  const checkout = () => {
    if (cart.length === 0) return;
    const order = {
      id: Date.now(),
      items: cart,
      date: new Date().toLocaleString(),
    };
    setHistory((prev) => [order, ...prev]);
    setCart([]);
  };

  
  const buyNow = (item, navigate) => {
    const order = {
      id: Date.now(),
      items: [{ ...item, qty: 1 }],
      date: new Date().toLocaleString(),
    };
    setHistory((prev) => [order, ...prev]);
    if (navigate) navigate("/history"); 
  };

  return (
    <CartContext.Provider
      value={{ cart, history, addToCart, updateQty, removeFromCart, checkout, buyNow }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
