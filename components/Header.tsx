'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { getTranslation } from '@/lib/translations';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  return (
    <header className="bg-base-100 shadow-lg">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            Women Empowerment
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/learning">{getTranslation(language, 'learning')}</Link></li>
            <li><Link href="/market">{getTranslation(language, 'market')}</Link></li>
            <li><Link href="/community">{getTranslation(language, 'community')}</Link></li>
            <li><Link href="/resources">{getTranslation(language, 'resources')}</Link></li>
            <li><Link href="/business-tools">{getTranslation(language, 'businessTools')}</Link></li>
          </ul>
        </div>
        <div className="flex-none">
          <select 
            className="select select-bordered w-full max-w-xs"
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'en' | 'hi' | 'ta')}
          >
            <option value="en">{getTranslation(language, 'english')}</option>
            <option value="hi">{getTranslation(language, 'hindi')}</option>
            <option value="ta">{getTranslation(language, 'tamil')}</option>
          </select>
        </div>
      </div>
    </header>
  );
} 