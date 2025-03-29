'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GenerateReportPage() {
  const [reportType, setReportType] = useState<string>('monthly');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const handleGenerateReport = () => {
    // Here you would typically send the report request to your backend or state management
    const reportRequest = {
      type: reportType,
      startDate,
      endDate,
    };

    // Simulate generating the report (you can replace this with actual logic)
    console.log('Report generated:', reportRequest);
    setConfirmationMessage('Report generated successfully!');

    // Reset input fields
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">📊 Generate Report</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Fill in the details below to generate your report.
      </p>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Report Type:</label>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="monthly">Monthly Report</option>
            <option value="weekly">Weekly Report</option>
            <option value="custom">Custom Report</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>
        <button onClick={handleGenerateReport} className="btn btn-primary w-full">
          Generate Report
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