"use client";

import Link from "next/link";

export default function BusinessSkills() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📈 Business Skills Training</h1>
      <p className="mb-6 text-lg">
        Learn essential business skills to grow your enterprise with interactive games and practical training.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-3">💰 Budgeting Game</h2>
          <p>Learn how to manage money wisely for your business.</p>
          <Link href="/learning/business-skills/budgeting-game" className="mt-4 block text-blue-600 underline">
            Start Game →
          </Link>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-3">🏷 Pricing Strategy</h2>
          <p>Set the right price for your products to make a profit.</p>
          <Link href="/learning/business-skills/pricing-strategy" className="mt-4 block text-blue-600 underline">
            Start Game →
          </Link>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-3">📞 Customer Service</h2>
          <p>Handle customers professionally to increase sales.</p>
          <Link href="/learning/business-skills/customer-service" className="mt-4 block text-blue-600 underline">
            Start Game →
          </Link>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-3">📢 Marketing Strategy</h2>
          <p>Learn how to promote your products using social media.</p>
          <Link href="/learning/business-skills/marketing-strategy" className="mt-4 block text-blue-600 underline">
            Start Game →
          </Link>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-3">📦 Inventory Management</h2>
          <p>Manage your stock efficiently to avoid losses.</p>
          <Link href="/learning/business-skills/inventory-management" className="mt-4 block text-blue-600 underline">
            Start Game →
          </Link>
        </div>
      </div>
    </div>
  );
}
