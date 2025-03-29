import { useState } from "react";

const scenarios = [
  { scenario: "A team member is struggling with work. What do you do?", choices: ["Ignore", "Help", "Criticize"], correct: "Help" },
  { scenario: "How do you encourage teamwork?", choices: ["Shout", "Motivate", "Be silent"], correct: "Motivate" },
];

export default function LeadershipGame() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    if (selected === scenarios[index].correct) {
      alert("✅ Good Leadership Choice!");
    } else {
      alert("❌ Try Again!");
    }
    setIndex((prev) => (prev + 1) % scenarios.length);
    setSelected("");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-purple-700">👩‍💼 Leadership Challenge</h2>
      <p className="text-gray-600">{scenarios[index].scenario}</p>

      <div className="mt-4 flex gap-2 justify-center">
        {scenarios[index].choices.map((choice) => (
          <button
            key={choice}
            className={`px-4 py-2 rounded ${selected === choice ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setSelected(choice)}
          >
            {choice}
          </button>
        ))}
      </div>

      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
