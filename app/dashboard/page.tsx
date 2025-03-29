"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Lightbulb,
  BarChart2,
  FileText,
  Rocket,
  Star,
  Globe,
  Briefcase,
  Users,
  CheckCircle,
  CalendarCheck,
} from "lucide-react";

export default function InnovativeDashboard() {
  const [activeTab, setActiveTab] = useState("skills");

  // Dashboard Data
  const [dashboardData] = useState({
    skillProgress: {
      completedModules: 5,
      inProgressModules: 3,
      totalLearningHours: 72,
      certificatesEarned: 3,
    },
    skillDevelopmentTracks: [
      {
        title: "Business Blueprinting",
        icon: Briefcase,
        color: "purple",
        progress: 75,
        description:
          "Craft your entrepreneurial roadmap with precision, covering business strategies, market analysis, and growth planning.",
      },
      {
        title: "Digital Frontier Mastery",
        icon: Globe,
        color: "blue",
        progress: 60,
        description:
          "Navigate the digital landscape with confidence, mastering web technologies, e-commerce, and digital marketing.",
      },
      {
        title: "Financial Empowerment",
        icon: BarChart2,
        color: "green",
        progress: 50,
        description:
          "Gain expertise in financial planning, investment strategies, and sustainable wealth management for long-term success.",
      },
    ],
    inspirationalQuotes: [
      {
        quote: "Every great dream begins with a dreamer.",
        author: "Harriet Tubman",
        icon: Star,
      },
      {
        quote: "The future belongs to those who believe in their dreams.",
        author: "Eleanor Roosevelt",
        icon: Rocket,
      },
    ],
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Entrepreneur's Empowerment Hub
            </h1>
            <p className="text-gray-600 mt-2">
              Your journey of transformation starts here! Explore skills, track
              your progress, and get inspired.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/skills"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:scale-105 transform transition-all flex items-center space-x-2"
            >
              <Lightbulb size={20} />
              <span>Skills Assessment</span>
            </Link>
            <Link
              href="/courses"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-full hover:scale-105 transform transition-all flex items-center space-x-2"
            >
              <BookOpen size={20} />
              <span>Explore Courses</span>
            </Link>
          </div>
        </div>

        {/* Dashboard Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {[
            { label: "Completed Modules", value: dashboardData.skillProgress.completedModules, icon: CheckCircle },
            { label: "In-Progress Modules", value: dashboardData.skillProgress.inProgressModules, icon: FileText },
            { label: "Total Learning Hours", value: dashboardData.skillProgress.totalLearningHours, icon: CalendarCheck },
            { label: "Certificates Earned", value: dashboardData.skillProgress.certificatesEarned, icon: Users },
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center flex items-center space-x-4 hover:shadow-lg transition-all"
              >
                <StatIcon className="text-purple-700" size={30} />
                <div>
                  <h3 className="text-3xl font-bold text-purple-700">{stat.value}</h3>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Tabs */}
        <div className="flex mb-6 bg-white rounded-full p-2 shadow-md">
          {["skills", "inspiration"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 rounded-full transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              } capitalize`}
            >
              {tab === "skills" ? "Skill Development" : "Inspirational Quotes"}
            </button>
          ))}
        </div>

        {/* Skill Development Section */}
        {activeTab === "skills" && (
          <div className="grid md:grid-cols-3 gap-6">
            {dashboardData.skillDevelopmentTracks.map((track, index) => {
              const TrackIcon = track.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all p-6 flex items-center space-x-4"
                >
                  <TrackIcon className={`text-${track.color}-600`} size={40} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{track.title}</h3>
                    <span className="text-sm font-semibold text-gray-500">
                      {track.progress}% Complete
                    </span>
                    <p className="text-gray-600 mt-2">{track.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                      <div
                        className={`bg-${track.color}-600 h-3 rounded-full`}
                        style={{ width: `${track.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Inspirational Quotes Section */}
        {activeTab === "inspiration" && (
          <div className="grid md:grid-cols-2 gap-6">
            {dashboardData.inspirationalQuotes.map((quote, index) => {
              const QuoteIcon = quote.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all flex items-center space-x-4"
                >
                  <QuoteIcon className="text-purple-600" size={40} />
                  <div>
                    <p className="italic text-gray-700 text-lg">"{quote.quote}"</p>
                    <p className="text-sm text-gray-500 mt-2">– {quote.author}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-10">
          <p className="text-gray-600 text-lg">
            Stay focused on your growth journey. Keep learning, keep improving, and make an impact!
          </p>
          <Link
            href="/dashboard/progress"
            className="inline-block mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:scale-[1.05] transform transition-all"
          >
            View Full Progress
          </Link>
        </div>

      </div>
    </div>
  );
}
