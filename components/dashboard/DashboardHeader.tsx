'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface User {
  id: string;
  name: string;
  email: string;
  language: string;
  businessType: string;
  skillLevel: string;
  location: {
    state: string;
    district: string;
  };
  completedModules: string[];
  progress: {
    coursesCompleted: number;
    hoursSpent: number;
    certificatesEarned: number;
  };
  businessMetrics: {
    monthlyRevenue: number;
    activeCustomers: number;
    pendingOrders: number;
  };
}

interface DashboardHeaderProps {
  user: User;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  const t = useTranslations('Dashboard');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16">
          <Image
            src="/assets/images/avatar-placeholder.png"
            alt={user.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">{t('businessType')}</p>
          <p className="font-semibold">{user.businessType}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">{t('skillLevel')}</p>
          <p className="font-semibold">{user.skillLevel}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">{t('location')}</p>
          <p className="font-semibold">{`${user.location.district}, ${user.location.state}`}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">{t('completedModules')}</p>
          <p className="font-semibold">{user.completedModules.length}</p>
        </div>
      </div>
    </motion.div>
  );
} 