import Image from 'next/image';
import Link from 'next/link';

interface Mentor {
  id: string;
  name: string;
  expertise: string;
  rating: number;
  available: boolean;
  avatar: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  type: 'online' | 'offline';
  participants: number;
  language: string;
  location?: string;
}

interface CommunityUpdatesProps {
  mentors: Mentor[];
  events: Event[];
}

export function CommunityUpdates({ mentors, events }: CommunityUpdatesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Mentors Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Available Mentors</h3>
        <div className="space-y-4">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="flex items-center gap-4 bg-base-200 p-4 rounded-box">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <Image
                    src={mentor.avatar}
                    alt={mentor.name}
                    width={48}
                    height={48}
                  />
                </div>
              </div>
              <div>
                <h4 className="font-medium">{mentor.name}</h4>
                <p className="text-sm opacity-70">{mentor.expertise}</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm">{mentor.rating}</span>
                  {mentor.available && (
                    <span className="badge badge-success badge-sm">Available</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-base-200 p-4 rounded-box">
              <h4 className="font-medium">{event.title}</h4>
              <div className="flex items-center gap-2 text-sm mt-2">
                <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                <span>👥 {event.participants}</span>
                <span>🌐 {event.language}</span>
                {event.type === 'offline' && event.location && (
                  <span>📍 {event.location}</span>
                )}
              </div>
              <div className="mt-2">
                <Link href={`/events/${event.id}`} className="btn btn-sm btn-primary">
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 