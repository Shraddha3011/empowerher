import Link from 'next/link';

export default function SoftSkills() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🎯 Soft Skills Training</h1>
      <p className="mb-4">Enhance your communication, leadership, and decision-making skills.</p>
      <ul className="list-disc ml-6">
        <li>
          <Link href="/learning/soft-skills/negotiation-game" className="text-blue-600 hover:underline">🛒 Negotiation Game</Link>
        </li>
        <li>
          <Link href="/learning/soft-skills/communication-game" className="text-blue-600 hover:underline">💬 Communication Game</Link>
        </li>
        <li>
          <Link href="/learning/soft-skills/leadership-game" className="text-blue-600 hover:underline">👩‍💼 Leadership Game</Link>
        </li>
      </ul>
    </div>
  );
}
