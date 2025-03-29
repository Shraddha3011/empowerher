'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface Progress {
  coursesCompleted: number;
  hoursSpent: number;
  certificatesEarned: number;
}

interface LearningProgressProps {
  progress: Progress;
}

export default function LearningProgress({ progress }: LearningProgressProps) {
  const t = useTranslations('Dashboard');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('learningProgress')}</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{t('coursesCompleted')}</span>
          <span className="font-semibold">{progress.coursesCompleted}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{t('hoursSpent')}</span>
          <span className="font-semibold">{progress.hoursSpent}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{t('certificatesEarned')}</span>
          <span className="font-semibold">{progress.certificatesEarned}</span>
        </div>
      </div>
    </motion.div>
  );
} 