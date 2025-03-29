'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface Metrics {
  monthlyRevenue: number;
  activeCustomers: number;
  pendingOrders: number;
}

interface BusinessMetricsProps {
  metrics: Metrics;
}

export default function BusinessMetrics({ metrics }: BusinessMetricsProps) {
  const t = useTranslations('Dashboard');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('businessMetrics')}</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{t('monthlyRevenue')}</span>
          <span className="font-semibold">₹{metrics.monthlyRevenue.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{t('activeCustomers')}</span>
          <span className="font-semibold">{metrics.activeCustomers}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">{t('pendingOrders')}</span>
          <span className="font-semibold">{metrics.pendingOrders}</span>
        </div>
      </div>
    </motion.div>
  );
} 