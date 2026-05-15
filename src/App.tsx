/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider, useLanguage } from '@/lib/i18n';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import InstagramGrid from '@/components/InstagramGrid';
import AboutUs from '@/components/AboutUs';
import FloatingButtons from '@/components/FloatingButtons';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FFF8F0] relative font-sans text-gray-900">
        <Hero />
        <Menu />
        <InstagramGrid />
        <AboutUs />
        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
}
