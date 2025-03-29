import { useState } from "react";
import NegotiationGame from "@/components/games/NegotiationGame";
import CommunicationGame from "@/components/games/CommunicationGame";
import LeadershipGame from "@/components/games/LeadershipGame";

export default function SoftSkills() {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">🎯 Soft Skills Training</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          className="bg-green-500 text-white p-4 rounded-lg shadow-lg"
          onClick={() => setActiveGame("negotiation")}
        >
          🛒 Negotiation Game
        </button>
        <button
          className="bg-blue-500 text-white p-4 rounded-lg shadow-lg"
          onClick={() => setActiveGame("communication")}
        >
          💬 Communication Game
        </button>
        <button
          className="bg-purple-500 text-white p-4 rounded-lg shadow-lg"
          onClick={() => setActiveGame("leadership")}
        >
          👩‍💼 Leadership Game
        </button>
      </div>

      <div className="mt-6">
        {activeGame === "negotiation" && <NegotiationGame />}
        {activeGame === "communication" && <CommunicationGame />}
        {activeGame === "leadership" && <LeadershipGame />}
      </div>
    </div>
  );
}
