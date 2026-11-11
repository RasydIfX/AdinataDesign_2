'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('adinata_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('adinata_cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('adinata_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white/95 backdrop-blur-md border border-zinc-200 p-5 rounded-2xl shadow-xl text-zinc-900">
        <div className="flex items-start justify-between">
          <span className="text-xs font-bold text-zinc-900">Privasi & Cookie</span>
          <button
            onClick={handleDecline}
            className="text-zinc-400 hover:text-zinc-800 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-[11px] text-zinc-600 mt-2 leading-relaxed">
          {lang === 'id'
            ? 'Website ini menggunakan cookie untuk meningkatkan navigasi dan menganalisis lalu lintas sesuai UU PDP.'
            : 'This website uses cookies to enhance navigation and analyze traffic per data protection regulations.'}
        </p>

        <div className="flex items-center justify-end mt-3 gap-2">
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 rounded-lg text-[11px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Tolak
          </button>
          <button
            onClick={handleAccept}
            className="px-3.5 py-1.5 rounded-lg text-[11px] font-semibold bg-zinc-900 hover:bg-zinc-800 text-white transition-colors shadow-sm"
          >
            Terima
          </button>
        </div>
      </div>
    </div>
  );
}
