'use client';

import { User } from '@/types';
import { useTranslations } from 'next-intl';

interface DashboardHeaderProps {
  user: User;
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const t = useTranslations('Dashboard');

  return (
    <div className="bg-base-100 p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            {t('welcome', { name: user.name })}
          </h1>
          <p className="text-base-content/70 mt-1">
            {t('businessType', { type: user.businessType })}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn btn-primary">
            {t('startLearning')}
          </button>
          <button className="btn btn-outline">
            {t('viewProfile')}
          </button>
        </div>
      </div>
    </div>
  );
} 