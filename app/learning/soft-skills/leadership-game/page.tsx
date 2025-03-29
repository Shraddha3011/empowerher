"use client"; 

import { useState } from 'react';

export default function NegotiationGame() {
  const [score, setScore] = useState<number>(0);

  const handleCorrectChoice = () => {
    setScore(score + 10);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Negotiation Game</h1>
      <p className="mb-4">Make the right decisions to win the best deal!</p>
      <button onClick={handleCorrectChoice} className="px-4 py-2 bg-green-500 text-white rounded">
        Offer a Discount (✔ Correct)
      </button>
      <p className="mt-4">Your Score: {score}</p>
    </div>
  );
}
