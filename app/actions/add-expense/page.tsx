'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AddExpensePage() {
  const [expenseName, setExpenseName] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const handleAddExpense = () => {
    // Here you would typically send the expense data to your backend or state management
    const newExpense = {
      name: expenseName,
      amount,
      date,
      description,
    };

    // Simulate adding the expense (you can replace this with actual logic)
    console.log('Expense added:', newExpense);
    setConfirmationMessage('Expense added successfully!');

    // Reset input fields
    setExpenseName('');
    setAmount(0);
    setDate('');
    setDescription('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">💸 Add Expense</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Fill in the details below to add a new expense.
      </p>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Expense Name:</label>
          <input
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter expense name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="input input-bordered w-full"
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Enter a brief description"
          />
        </div>
        <button onClick={handleAddExpense} className="btn btn-primary w-full">
          Add Expense
        </button>

        {confirmationMessage && (
          <div className="mt-4 text-green-600 text-center">
            {confirmationMessage}
          </div>
        )}
      </div>

      <div className="mt-6 text-center">
        <Link href="/actions" className="text-blue-500 hover:underline">
          Back to Actions
        </Link>
      </div>
    </div>
  );
}