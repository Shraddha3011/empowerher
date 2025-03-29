'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MarketingCampaign {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function MarketingPlannerPage() {
  const [campaigns, setCampaigns] = useState<MarketingCampaign[]>([]);
  const [campaignName, setCampaignName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [editCampaignId, setEditCampaignId] = useState<number | null>(null);

  const handleAddOrUpdateCampaign = () => {
    if (editCampaignId !== null) {
      // Update existing campaign
      setCampaigns((prevCampaigns) =>
        prevCampaigns.map((campaign) =>
          campaign.id === editCampaignId
            ? { ...campaign, name: campaignName, startDate, endDate, description }
            : campaign
        )
      );
      setEditCampaignId(null);
    } else {
      // Add new campaign
      const newCampaign: MarketingCampaign = {
        id: Date.now(), // Simple unique ID based on timestamp
        name: campaignName,
        startDate,
        endDate,
        description,
      };
      setCampaigns((prevCampaigns) => [...prevCampaigns, newCampaign]);
    }
    // Reset input fields
    setCampaignName('');
    setStartDate('');
    setEndDate('');
    setDescription('');
  };

  const handleEditCampaign = (campaign: MarketingCampaign) => {
    setCampaignName(campaign.name);
    setStartDate(campaign.startDate);
    setEndDate(campaign.endDate);
    setDescription(campaign.description);
    setEditCampaignId(campaign.id);
  };

  const handleDeleteCampaign = (id: number) => {
    setCampaigns((prevCampaigns) => prevCampaigns.filter((campaign) => campaign.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">📈 Marketing Planner</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Plan your marketing campaigns effectively by filling in the details below.
      </p>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{editCampaignId ? 'Edit Campaign' : 'Add New Campaign'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Campaign Name:</label>
          <input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter campaign name"
          />
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
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Enter campaign description"
          />
        </div>
        <button onClick={handleAddOrUpdateCampaign} className="btn btn-primary w-full">
          {editCampaignId ? 'Update Campaign' : 'Add Campaign'}
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Campaign List</h2>
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          {campaigns.length === 0 ? (
            <p className="text-gray-600 text-center">No campaigns added yet.</p>
          ) : (
            <ul className="space-y-4">
              {campaigns.map((campaign) => (
                <li key={campaign.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                  <div>
                    <h3 className="font-semibold">{campaign.name}</h3>
                    <p>Start Date: {campaign.startDate}</p>
                    <p>End Date: {campaign.endDate}</p>
                    <p>Description: {campaign.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => handleEditCampaign(campaign)} className="btn btn-secondary btn-sm">
                      Edit
                    </button>
                    <button onClick={() => handleDeleteCampaign(campaign.id)} className="btn btn-error btn-sm">
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link href="/tools" className="text-blue-500 hover:underline">
          Back to Tools
        </Link>
      </div>
    </div>
  );
}