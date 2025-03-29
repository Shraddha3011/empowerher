import { useState } from "react";

const questions = [
  { question: "What should you do when someone is speaking?", answer: "Listen attentively" },
  { question: "How can you express confidence?", answer: "Maintain eye contact" },
];

export default function CommunicationGame() {
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = () => {
    if (userAnswer.toLowerCase() === questions[index].answer.toLowerCase()) {
      alert("✅ Correct!");
    } else {
      alert("❌ Try Again!");
    }
    setUserAnswer("");
    setIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-blue-700">💬 Communication Challenge</h2>
      <p className="text-gray-600">Improve your speaking skills</p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{questions[index].question}</h3>
        <input
          type="text"
          placeholder="Type your answer"
          className="border p-2 rounded mt-2"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
