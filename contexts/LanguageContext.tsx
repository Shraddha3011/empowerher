'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language | null>(null); // Initially `null`
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'hi', 'ta'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      setLanguage('en'); // Default after hydration
    }
    setIsHydrated(true);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  if (!isHydrated) return null; // Prevent rendering until hydration is complete

  return (
    <LanguageContext.Provider value={{ language: language!, setLanguage: handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
}
