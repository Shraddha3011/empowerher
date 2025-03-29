'use client';

import { useTranslation } from 'react-i18next';
import { getTranslation } from '@/lib/translations';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">{getTranslation(language, 'about')}</a>
          <a className="link link-hover">{getTranslation(language, 'contact')}</a>
          <a className="link link-hover">{getTranslation(language, 'privacy')}</a>
          <a className="link link-hover">{getTranslation(language, 'terms')}</a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - Women Empowerment Platform</p>
      </aside>
    </footer>
  );
} 