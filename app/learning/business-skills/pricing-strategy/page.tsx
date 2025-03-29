"use client";

import { useState } from "react";

export default function PricingStrategy() {
  const [price, setPrice] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const checkProfit = () => {
    if (price > 50) {
      setMessage("✅ Good job! You're making a profit.");
    } else {
      setMessage("❌ Too low! Your business will suffer losses.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🏷 Pricing Strategy</h1>
      <p>Set the price for your handmade product (Minimum Cost: ₹50)</p>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
        className="border p-2 rounded"
      />
      <button onClick={checkProfit} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded">
        Check Price
      </button>
      <p className="mt-4">{message}</p>
    </div>
  );
}
