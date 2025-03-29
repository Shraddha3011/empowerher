"use client";

import { useState } from "react";

export default function CustomerServiceGame() {
  const [response, setResponse] = useState<string>("");

  const handleResponse = (choice: string) => {
    setResponse(choice === "polite" ? "✅ Good! The customer is happy!" : "❌ Wrong! The customer left a bad review.");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📞 Customer Service Game</h1>
      <p className="mb-4">A customer complains about late delivery. How do you respond?</p>
      <button onClick={() => handleResponse("polite")} className="px-4 py-2 bg-green-500 text-white rounded">
        "I’m very sorry! We will fix it quickly."
      </button>
      <button onClick={() => handleResponse("rude")} className="ml-4 px-4 py-2 bg-red-500 text-white rounded">
        "Not my problem!"
      </button>
      <p className="mt-4">{response}</p>
    </div>
  );
}
