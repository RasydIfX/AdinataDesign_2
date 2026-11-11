'use client';

import React from 'react';
import { ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/data/mockData';

export default function VendorCtaSection() {
  return (
    <section className="py-24 bg-white border-b border-zinc-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Architectural Atelier Consultation Panel */}
        <div className="border border-zinc-900/20 bg-[#faf8f5] p-8 sm:p-12 relative overflow-hidden">
          {/* Blueprint Background Line */}
          <div className="absolute top-0 right-0 p-4 text-[10px] font-mono-tech text-zinc-600 hidden sm:block">
            LEMBAR: KONSULTASI & TENDER / {COMPANY_INFO.legalName}
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#9c752f]">
              <span className="w-2.5 h-2.5 bg-[#b48a3c]"></span>
              <span className="font-bold tracking-widest uppercase">08 — BRIEFING & KONSULTASI AWAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
              Mulai dari diskusi sketsa denah, evaluasi tapak, atau kajian anggaran (BoQ).
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-2xl">
              Hubungi tim arsitek dan perencana teknis CV ADINATA DESIGN untuk peninjauan dokumen tanah, pengukuran lahan di lokasi, atau penyusunan estimasi biaya awal proyek Anda.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/6285788477607?text=Halo%20Adi%20Akbar%20Tama%2C%20saya%20ingin%20konsultasi%20mengenai%20rancang%20bangun%20rumah."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-mono-tech text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#b48a3c]" />
                <span>Adi Akbar Tama (+62 857-8847-7607)</span>
              </a>

              <a
                href="https://wa.me/628217367055?text=Halo%20Official%20CV%20ADINATA%20DESIGN%2C%20saya%20ingin%20konsultasi%20desain."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 font-mono-tech text-xs tracking-wider transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#9c752f]" />
                <span>WhatsApp Business (+62 821-7367-055)</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
