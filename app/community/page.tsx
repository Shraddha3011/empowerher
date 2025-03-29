'use client';

import { dummyCommunity } from '../../dummy/community';
import Link from 'next/link';

export default function CommunityPage() {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-purple-600 mb-2">🌸 Welcome to the Community Hub</h1>
        <p className="text-lg text-gray-700">
          Connect with fellow entrepreneurs and learn from experienced mentors.
        </p>
      </header>

      {/* Mentors Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Available Mentors</h2>
        <Link href="/mentors" className="btn btn-primary mb-4">
          Find a Mentor
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyCommunity.mentors.map((mentor) => (
            <div key={mentor.id} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-2xl">
                    {mentor.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">{mentor.expertise}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm">{mentor.rating}</span>
                    {mentor.available && (
                      <span className="badge badge-success badge-sm">Available</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Link href={`/mentors/${mentor.id}`} className="btn btn-secondary btn-sm">
                  Connect
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Upcoming Events</h2>
        <Link href="/events" className="btn btn-primary mb-4">
          View All Events
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dummyCommunity.upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <div className="flex items-center gap-2 text-sm mt-2">
                <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                <span>👥 {event.participants} participants</span>
                <span>🌐 {event.language}</span>
                {event.type === 'offline' && event.location && (
                  <span>📍 {event.location}</span>
                )}
              </div>
              <div className="flex justify-end mt-4">
                <Link href={`/events/${event.id}`} className="btn btn-secondary btn-sm">
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discussion Forums */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Discussion Forums</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Business Strategy", topics: 24, posts: 156, members: 89, icon: "💡" },
            { title: "Marketing Tips", topics: 18, posts: 124, members: 76, icon: "📢" },
            { title: "Financial Advice", topics: 15, posts: 98, members: 64, icon: "💰" },
            { title: "Success Stories", topics: 32, posts: 245, members: 112, icon: "🌟" },
          ].map((forum) => (
            <div key={forum.title} className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
              <div className="flex items-center mb-2">
                <div className="text-3xl">{forum.icon}</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{forum.title}</h3>
                  <div className="flex items-center gap-4 text-sm mt-2">
                    <span>💬 {forum.topics} topics</span>
                    <span>📝 {forum.posts} posts</span>
                    <span>👥 {forum.members} members</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Link href={`/forums/${forum.title}`} className="btn btn-secondary btn-sm">
                  Join Forum
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 