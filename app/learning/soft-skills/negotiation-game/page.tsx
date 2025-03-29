"use client";
import { useState } from "react";

interface Scenario {
  question: string;
  options: { text: string; score: number; response: string }[];
}

const scenarios: Scenario[] = [
  {
    question: "A customer wants a 30% discount, but your margin is low. What do you do?",
    options: [
      { text: "Offer a 10% discount and a free add-on.", score: 10, response: "Smart move! Adding value instead of just lowering price is a great tactic." },
      { text: "Reject the discount completely.", score: 0, response: "You might lose the deal by being too rigid." },
      { text: "Give them the full 30% discount.", score: -5, response: "This might make the deal unprofitable for you." },
    ],
  },
  {
    question: "You are negotiating your salary for a new job. What’s the best approach?",
    options: [
      { text: "Just accept whatever they offer.", score: -5, response: "You might be underselling yourself." },
      { text: "Ask for a higher salary and highlight your skills.", score: 10, response: "Great! Justify your value with strong arguments." },
      { text: "Demand double the offer, or you walk away.", score: 0, response: "This might come across as aggressive." },
    ],
  },
  {
    question: "A supplier is increasing prices. How do you respond?",
    options: [
      { text: "Negotiate bulk pricing or long-term contracts for a discount.", score: 10, response: "Excellent! This benefits both parties." },
      { text: "Accept the price increase immediately.", score: -5, response: "You might be overpaying unnecessarily." },
      { text: "Stop working with them immediately.", score: 0, response: "Exploring options is fine, but abrupt decisions can harm relationships." },
    ],
  },
  {
    question: "A client is delaying payment. What’s your best move?",
    options: [
      { text: "Send a polite reminder and offer payment options.", score: 10, response: "Good approach! Clear communication can solve the issue." },
      { text: "Threaten legal action immediately.", score: 0, response: "This might damage the business relationship." },
      { text: "Ignore it and hope they pay eventually.", score: -5, response: "This could hurt your cash flow." },
    ],
  },
  {
    question: "A competitor is offering lower prices. What do you do?",
    options: [
      { text: "Differentiate with better service and quality.", score: 10, response: "Perfect! Competing on value, not just price, is smart." },
      { text: "Match their price immediately.", score: 0, response: "This might hurt your profitability if done without strategy." },
      { text: "Start a price war by undercutting them further.", score: -5, response: "This could destroy margins for both of you." },
    ],
  },
  {
    question: "You're negotiating a partnership deal. What should be your priority?",
    options: [
      { text: "Ensure both sides benefit from the agreement.", score: 10, response: "Right! Win-win situations lead to long-term success." },
      { text: "Try to get all the benefits while giving nothing.", score: 0, response: "This might make the deal fall apart." },
      { text: "Agree to all their terms without discussion.", score: -5, response: "You might miss out on a better deal." },
    ],
  },
  {
    question: "You're selling a car, and the buyer is negotiating hard. What do you do?",
    options: [
      { text: "Highlight the car's strengths and stick to your price.", score: 10, response: "Smart! Showcasing value can justify the price." },
      { text: "Drop the price significantly to close the deal fast.", score: -5, response: "You might be losing too much profit." },
      { text: "Ignore their requests and refuse to negotiate.", score: 0, response: "This might make them walk away." },
    ],
  },
  {
    question: "A customer threatens to leave unless they get a discount. What do you do?",
    options: [
      { text: "Offer additional value instead of lowering price.", score: 10, response: "Great strategy! Value-driven negotiations win." },
      { text: "Give them whatever they want.", score: -5, response: "This could set a bad precedent for future negotiations." },
      { text: "Let them leave without any discussion.", score: 0, response: "You might be losing a valuable customer." },
    ],
  },
  {
    question: "You’re buying a house and want a lower price. What's the best approach?",
    options: [
      { text: "Research market prices and negotiate based on data.", score: 10, response: "Excellent! Facts make negotiations stronger." },
      { text: "Offer way below the asking price to see what happens.", score: 0, response: "Risky! You might offend the seller." },
      { text: "Agree to the first price they give.", score: -5, response: "You might be overpaying unnecessarily." },
    ],
  },
];

export default function NegotiationGame() {
  const [currentScenario, setCurrentScenario] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const handleReply = (response: string, scoreChange: number) => {
    setMessage(response);
    setScore(score + scoreChange);
    setTimeout(() => {
      setCurrentScenario((prev) => (prev + 1) % scenarios.length);
      setMessage("");
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">💰 Master the Art of Negotiation</h1>
      <p className="text-lg text-gray-600 mb-4">Make the best choices to win negotiations and maximize your score.</p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{scenarios[currentScenario].question}</h2>
        <div className="flex flex-col gap-3">
          {scenarios[currentScenario].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleReply(option.response, option.score)}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
            >
              {option.text}
            </button>
          ))}
        </div>
        {message && <p className="mt-4 text-lg text-gray-700 font-semibold">{message}</p>}
      </div>

      <p className="mt-6 text-xl font-bold text-gray-800">Your Score: {score}</p>
    </div>
  );
}
