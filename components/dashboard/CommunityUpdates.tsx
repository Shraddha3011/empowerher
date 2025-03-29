'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

export default function CommunityUpdates({ mentors, events }: CommunityUpdatesProps) {
  const t = useTranslations('Dashboard');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('availableMentors')}</h2>
          <div className="space-y-4">
            {mentors.map((mentor) => (
              <div key={mentor.id} className="flex items-center space-x-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={mentor.avatar}
                    alt={mentor.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">{mentor.expertise}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600">{mentor.rating}</span>
                    <span className={`text-sm ${mentor.available ? 'text-green-600' : 'text-red-600'}`}>
                      {mentor.available ? t('available') : t('unavailable')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('upcomingEvents')}</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">{event.title}</h3>
                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  <p>{event.date}</p>
                  <p>{event.type === 'online' ? t('onlineEvent') : t('offlineEvent')}</p>
                  <p>{event.participants} {t('participants')}</p>
                  <p>{event.language}</p>
                  {event.location && <p>{event.location}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 