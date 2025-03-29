import React from 'react';
import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome to EmpowerHer</h1>
        <p className="text-center text-gray-600 mb-8">Choose your path to entrepreneurship</p>
        
        <div className="space-y-4">
          <Link href="/profile/create" className="block">
            <div className="bg-pink-500 text-white py-3 px-4 rounded-lg text-center hover:bg-pink-600 transition-colors">
              Create Profile
            </div>
          </Link>
          
          <Link href="/courses" className="block">
            <div className="bg-purple-500 text-white py-3 px-4 rounded-lg text-center hover:bg-purple-600 transition-colors">
              Start Learning
            </div>
          </Link>
          
          <Link href="/community" className="block">
            <div className="bg-indigo-500 text-white py-3 px-4 rounded-lg text-center hover:bg-indigo-600 transition-colors">
              Join Community
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}