"use client";

import { useState } from "react";

export default function MarketingStrategyGame() {
  const [strategy, setStrategy] = useState<string>("");

  const chooseStrategy = (method: string) => {
    setStrategy(method === "social" ? "✅ Great! Your sales increased!" : "❌ Not effective. Try again.");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📢 Marketing Strategy Game</h1>
      <p className="mb-4">How will you promote your handmade jewelry?</p>
      <button onClick={() => chooseStrategy("social")} className="px-4 py-2 bg-blue-500 text-white rounded">
        Share on WhatsApp & Facebook
      </button>
      <button onClick={() => chooseStrategy("word")} className="ml-4 px-4 py-2 bg-gray-500 text-white rounded">
        Only tell neighbors
      </button>
      <p className="mt-4">{strategy}</p>
    </div>
  );
}
