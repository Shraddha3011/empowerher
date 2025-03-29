"use client";
import { useState } from "react";

interface Scenario {
  question: string;
  options: { text: string; response: string; correct: boolean }[];
}

const scenarios: Scenario[] = [
  {
    question: "A customer is asking about a delayed order. How do you respond?",
    options: [
      { text: "We are sorry for the delay! Your order will arrive soon.", response: "Great! Apologizing and assuring the customer builds trust.", correct: true },
      { text: "It's not our fault; please check with the courier.", response: "This may sound dismissive and frustrate the customer.", correct: false },
      { text: "Please be patient. Orders take time.", response: "This lacks empathy and may not satisfy the customer.", correct: false },
    ],
  },
  {
    question: "A customer received a damaged product. What should you say?",
    options: [
      { text: "We sincerely apologize! We will replace it immediately.", response: "Excellent! Taking responsibility and acting quickly retains customers.", correct: true },
      { text: "That’s unfortunate, but it’s not our problem.", response: "This is rude and could lose the customer.", correct: false },
      { text: "Try fixing it yourself first.", response: "This lacks customer support and may hurt the brand.", correct: false },
    ],
  },
  {
    question: "A customer wants a refund for an item they don’t like. What's the best response?",
    options: [
      { text: "We understand! Here’s our return policy link.", response: "Good! Providing clear policies ensures transparency.", correct: true },
      { text: "No refunds. You should have checked before buying.", response: "This sounds harsh and may discourage future purchases.", correct: false },
      { text: "We can’t help you. Try selling it to someone else.", response: "Unprofessional and dismissive.", correct: false },
    ],
  },
  {
    question: "A customer complains about high shipping fees. What do you say?",
    options: [
      { text: "We understand! Here’s a discount code for your next order.", response: "Great! Offering incentives helps retain customers.", correct: true },
      { text: "Shipping costs are fixed. We can’t do anything.", response: "This may frustrate the customer.", correct: false },
      { text: "Why not buy more items to make shipping worth it?", response: "This may come off as pushy.", correct: false },
    ],
  },
  {
    question: "A customer is confused about how to use your product. What do you say?",
    options: [
      { text: "We’d love to help! Here’s a step-by-step guide.", response: "Great! Providing resources improves customer satisfaction.", correct: true },
      { text: "It’s very simple, just figure it out.", response: "This is dismissive and not helpful.", correct: false },
      { text: "You should have read the manual before buying.", response: "This lacks empathy and could drive customers away.", correct: false },
    ],
  },
  {
    question: "A loyal customer wants a special discount. How do you respond?",
    options: [
      { text: "Absolutely! Here’s a 10% discount as a thank you.", response: "Great! Rewarding loyalty increases retention.", correct: true },
      { text: "Sorry, no discounts available.", response: "This may make the customer feel unappreciated.", correct: false },
      { text: "We only give discounts to new customers.", response: "Loyal customers should feel valued.", correct: false },
    ],
  },
  {
    question: "A potential customer is unsure about purchasing. What do you say?",
    options: [
      { text: "We’re happy to help! Here’s why our product is great.", response: "Good! Highlighting value builds confidence.", correct: true },
      { text: "If you don’t buy now, we don’t care.", response: "This is aggressive and could push them away.", correct: false },
      { text: "Think about it, but don’t take too long.", response: "This creates pressure and might deter them.", correct: false },
    ],
  },
  {
    question: "A customer is leaving a negative review. What should you do?",
    options: [
      { text: "We’re sorry for your experience. How can we make it right?", response: "Great! Addressing concerns shows commitment to service.", correct: true },
      { text: "You’re wrong. Our product is perfect!", response: "Arguing with customers is not professional.", correct: false },
      { text: "Ignore the review and move on.", response: "Ignoring complaints can hurt your reputation.", correct: false },
    ],
  },
  {
    question: "A customer has a technical issue. What do you do?",
    options: [
      { text: "We’re here to help! Here’s how to fix it.", response: "Excellent! Providing guidance builds trust.", correct: true },
      { text: "It works fine for others, so it must be your fault.", response: "This is dismissive and unhelpful.", correct: false },
      { text: "Try restarting your device. If it still doesn’t work, we can’t help.", response: "This lacks proper support.", correct: false },
    ],
  },
  {
    question: "A customer asks why your product is better than competitors. What do you say?",
    options: [
      { text: "We offer high-quality service and unique benefits.", response: "Good! Highlighting strengths builds trust.", correct: true },
      { text: "Other brands are terrible, don’t buy from them.", response: "Bashing competitors is unprofessional.", correct: false },
      { text: "Just trust us, we’re better.", response: "This lacks specific value points.", correct: false },
    ],
  },
];

export default function CommunicationGame() {
  const [currentScenario, setCurrentScenario] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const handleReply = (response: string, correct: boolean) => {
    setMessage(response);
    setTimeout(() => {
      if (correct) {
        setCurrentScenario((prev) => (prev + 1) % scenarios.length);
      }
      setMessage("");
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">💬 Master Your Communication Skills</h1>
      <p className="text-lg text-gray-600 mb-4">Choose the best response for each customer interaction.</p>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{scenarios[currentScenario].question}</h2>
        <div className="flex flex-col gap-3">
          {scenarios[currentScenario].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleReply(option.response, option.correct)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
            >
              {option.text}
            </button>
          ))}
        </div>
        {message && <p className="mt-4 text-lg text-gray-700 font-semibold">{message}</p>}
      </div>
    </div>
  );
}
