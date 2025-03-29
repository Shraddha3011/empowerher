'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FinancialCalculatorPage() {
  const [costs, setCosts] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);
  const [profit, setProfit] = useState<number | null>(null);
  const [breakEven, setBreakEven] = useState<number | null>(null);

  const calculateProfit = () => {
    const calculatedProfit = revenue - costs;
    setProfit(calculatedProfit);
  };

  const calculateBreakEven = () => {
    if (costs > 0) {
      const breakEvenPoint = costs / (revenue > 0 ? revenue : 1); // Avoid division by zero
      setBreakEven(breakEvenPoint);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">💰 Financial Calculator</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Use this calculator to determine your profit and break-even point.
      </p>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Total Costs:</label>
          <input
            type="number"
            value={costs}
            onChange={(e) => setCosts(Number(e.target.value))}
            className="input input-bordered w-full"
            placeholder="Enter total costs"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Total Revenue:</label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="input input-bordered w-full"
            placeholder="Enter total revenue"
          />
        </div>
        <div className="flex justify-between">
          <button onClick={calculateProfit} className="btn btn-primary">
            Calculate Profit
          </button>
          <button onClick={calculateBreakEven} className="btn btn-secondary">
            Calculate Break-Even
          </button>
        </div>

        {profit !== null && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Profit: ₹{profit}</h2>
          </div>
        )}
        {breakEven !== null && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Break-Even Point: {breakEven.toFixed(2)} units</h2>
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