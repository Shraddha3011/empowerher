'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BusinessPlanPage() {
  const [businessName, setBusinessName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [targetMarket, setTargetMarket] = useState<string>('');
  const [financialProjections, setFinancialProjections] = useState<string>('');
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const handleSaveBusinessPlan = () => {
    // Here you would typically send the business plan data to your backend or state management
    const businessPlan = {
      businessName,
      description,
      targetMarket,
      financialProjections,
    };

    // Simulate saving the business plan (you can replace this with actual logic)
    console.log('Business plan saved:', businessPlan);
    setConfirmationMessage('Business plan saved successfully!');

    // Reset input fields
    setBusinessName('');
    setDescription('');
    setTargetMarket('');
    setFinancialProjections('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">📊 Create Your Business Plan</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Fill in the details below to outline your business plan.
      </p>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Business Name:</label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter your business name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Enter a brief description of your business"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Target Market:</label>
          <input
            type="text"
            value={targetMarket}
            onChange={(e) => setTargetMarket(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Describe your target market"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Financial Projections:</label>
          <textarea
            value={financialProjections}
            onChange={(e) => setFinancialProjections(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Enter your financial projections"
            required
          />
        </div>
        <button onClick={handleSaveBusinessPlan} className="btn btn-primary w-full">
          Save Business Plan
        </button>

        {confirmationMessage && (
          <div className="mt-4 text-green-600 text-center">
            {confirmationMessage}
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        <Link href="/tools" className="text-blue-500 hover:underline">
          Back to Tools
        </Link>
      </div>
    </div>
  );
}