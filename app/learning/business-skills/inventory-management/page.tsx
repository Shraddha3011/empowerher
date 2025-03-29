"use client";

import { useState } from "react";

export default function InventoryManagement() {
  const [stock, setStock] = useState<number>(10);
  const [message, setMessage] = useState<string>("");

  const handlePurchase = (amount: number) => {
    if (stock - amount >= 0) {
      setStock(stock - amount);
      setMessage("✅ Stock managed well!");
    } else {
      setMessage("❌ Oops! You ran out of stock.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📦 Inventory Management</h1>
      <p className="mb-4">Current Stock: {stock} items</p>
      <button onClick={() => handlePurchase(5)} className="px-4 py-2 bg-green-500 text-white rounded">
        Sell 5 Items
      </button>
      <button onClick={() => handlePurchase(12)} className="ml-4 px-4 py-2 bg-red-500 text-white rounded">
        Sell 12 Items
      </button>
      <p className="mt-4">{message}</p>
    </div>
  );
}
