'use client';

import { useEffect, useState } from 'react';
import { useToast } from './ui/toast';

export function OfflineManager({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState(true);
  const { showToast } = useToast();
  const [randomValue] = useState(Math.random()); // Initialize once

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
  }, []);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      showToast?.('You are back online!', 'success');
    };

    const handleOffline = () => {
      setIsOnline(false);
      showToast?.('You are offline. Some features may be limited.', 'error');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [showToast]);

  return (
    <div className="relative">
      {!isOnline && (
        <div className="fixed bottom-4 left-4 bg-warning text-warning-content p-2 rounded-lg shadow-lg">
          📶 Offline Mode
        </div>
      )}
      {children}
    </div>
  );
}
