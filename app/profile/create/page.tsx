"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function CreateProfilePage() {
  const [profileData, setProfileData] = useState({
    fullName: '',
    businessName: '',
    location: '',
    businessType: '',
    phoneNumber: '',
    email: '',
    educationLevel: '',
    yearsInBusiness: '',
    annualRevenue: '',
    businessDescription: '',
    skills: [],
    areasOfInterest: []
  });

  const businessTypes = [
    'Handicrafts', 
    'Textile', 
    'Food Processing', 
    'Beauty & Wellness', 
    'Agriculture', 
    'Retail', 
    'Service', 
    'Technology', 
    'Other'
  ];

  const educationLevels = [
    'No Formal Education', 
    'Primary School', 
    'High School', 
    'Graduate', 
    'Post Graduate'
  ];

  const skillsList = [
    'Marketing', 
    'Financial Management', 
    'Digital Skills', 
    'Product Design', 
    'Customer Service', 
    'Inventory Management'
  ];

  const interestAreas = [
    'Business Growth', 
    'Digital Marketing', 
    'Financial Planning', 
    'Networking', 
    'Technology Adoption', 
    'Product Development'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, field: string) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setProfileData(prev => ({
      ...prev,
      [field]: selectedOptions
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile submission logic
    console.log('Profile Data Submitted', profileData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Create Your Entrepreneur Profile</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profileData.fullName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={profileData.businessName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
                placeholder="Your Business Name"
              />
            </div>
          </div>

          {/* Contact & Location */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={profileData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
                placeholder="+91 "
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={profileData.location}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
                placeholder="City, State"
              />
            </div>
          </div>

          {/* Business Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Business Type</label>
              <select
                name="businessType"
                value={profileData.businessType}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              >
                <option value="">Select Business Type</option>
                {businessTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Education Level</label>
              <select
                name="educationLevel"
                value={profileData.educationLevel}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              >
                <option value="">Select Education Level</option>
                {educationLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Business Performance */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Years in Business</label>
              <input
                type="number"
                name="yearsInBusiness"
                value={profileData.yearsInBusiness}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                min="0"
                max="50"
                placeholder="Number of years"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Annual Revenue</label>
              <input
                type="number"
                name="annualRevenue"
                value={profileData.annualRevenue}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                min="0"
                placeholder="Annual Revenue in ₹"
              />
            </div>
          </div>

          {/* Multi-Select Skills and Interests */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Skills</label>
              <select
                multiple
                name="skills"
                value={profileData.skills}
                onChange={(e) => handleMultiSelectChange(e, 'skills')}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {skillsList.map(skill => (
                  <option key={skill} value={skill}>{skill}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Areas of Interest</label>
              <select
                multiple
                name="areasOfInterest"
                value={profileData.areasOfInterest}
                onChange={(e) => handleMultiSelectChange(e, 'areasOfInterest')}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {interestAreas.map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Business Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Business Description</label>
            <textarea
              name="businessDescription"
              value={profileData.businessDescription}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows={4}
              placeholder="Tell us about your business, your goals, and your journey"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
            >
              Create Profile
            </button>
          </div>
        </form>

        {/* Navigation */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have a profile? {' '}
            <Link href="/dashboard" className="text-purple-600 hover:underline">
              Go to Dashboard
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}