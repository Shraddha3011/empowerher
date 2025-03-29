"use client";

import { useState } from "react";

export default function BudgetingGame() {
  const [budget, setBudget] = useState<number>(1000);
  const [message, setMessage] = useState<string>("");

  const handleSpend = (amount: number) => {
    if (budget - amount >= 0) {
      setBudget(budget - amount);
      setMessage("Good choice! You managed your budget well.");
    } else {
      setMessage("Oops! You overspent. Try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">💰 Budgeting Game</h1>
      <p className="mb-4">Your total budget: ₹{budget}</p>
      <button onClick={() => handleSpend(200)} className="px-4 py-2 bg-green-500 text-white rounded">
        Buy Raw Materials (₹200)
      </button>
      <button onClick={() => handleSpend(500)} className="ml-4 px-4 py-2 bg-red-500 text-white rounded">
        Buy Extra Stock (₹500)
      </button>
      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
}
