'use client';

import React from 'react';
import { COMPANY_INFO } from '@/data/mockData';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/628217367055?text=${encodeURIComponent(
    'Halo CV ADINATA DESIGN, saya ingin konsultasi mengenai jasa arsitektur / rancang bangun.'
  )}`;

  return (
    <aside aria-label="Kontak Cepat WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Konsultasi WhatsApp Resmi CV ADINATA DESIGN"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
        </span>
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          Konsultasi WhatsApp
        </span>
      </a>
    </aside>
  );
}
