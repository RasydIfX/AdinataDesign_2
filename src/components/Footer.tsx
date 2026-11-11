'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/mockData';
import { ArrowUpRight, Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f4f1ea] text-zinc-600 border-t border-zinc-900/15 relative overflow-hidden">
      
      {/* Top Technical Metadata Strip */}
      <div className="border-b border-zinc-900/10 px-6 lg:px-12 py-2 text-[10px] font-mono-tech text-zinc-500 hidden sm:flex items-center justify-between">
        <span>BIRO PRAKTIK ARSITEKTUR & RANCANG BANGUN</span>
        <span>KABUPATEN BANTUL · D.I. YOGYAKARTA</span>
        <span>LEMBAR IDENTITAS & KONTAK RESMI</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main 4-Column Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16">
          
          {/* Col 1 (4 cols) — Brand Identity & Legal */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5 shadow-sm border border-zinc-300 group-hover:scale-105 transition-transform shrink-0">
                <img
                  src="/logo.png"
                  alt="ADINATA Design Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-zinc-950 tracking-tight leading-none font-mono-tech">
                  ADINATA<span className="text-[#b48a3c]">.</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] text-zinc-600 uppercase font-semibold mt-1">
                  Design & Build
                </span>
              </div>
            </Link>

            <p className="text-xs text-zinc-700 leading-relaxed">
              {COMPANY_INFO.philosophy.desc}
            </p>

            <div className="p-3 bg-white/70 border border-zinc-900/10 font-mono-tech text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-zinc-900 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9c752f]" />
                <span>LEGALITAS RESMI BERBADAN HUKUM</span>
              </div>
              <p className="text-[11px] text-zinc-600">
                {COMPANY_INFO.legalName} · NIB: <strong className="text-zinc-900">{COMPANY_INFO.nib}</strong>
              </p>
              <p className="text-[10px] text-zinc-500">
                {COMPANY_INFO.ahuNumber} · NPWP {COMPANY_INFO.npwp}
              </p>
            </div>
          </div>

          {/* Col 2 (3 cols) — Kantor Studio & Jam Kerja */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono-tech font-bold text-zinc-950 uppercase tracking-widest flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#9c752f]" />
              <span>STUDIO & KANTOR</span>
            </h4>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <p className="text-zinc-900 font-semibold">Studio Kasihan Bantul:</p>
                <p className="leading-relaxed text-zinc-700">
                  {COMPANY_INFO.officeAddress}
                </p>
                <p className="text-[11px] text-zinc-500">
                  {COMPANY_INFO.address}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-200/80 space-y-1 font-mono-tech">
                <p className="text-zinc-900 font-bold flex items-center gap-1 text-[11px]">
                  <Clock className="w-3 h-3 text-[#9c752f]" />
                  <span>JAM OPERASIONAL:</span>
                </p>
                <p className="text-zinc-700 text-[11px] leading-relaxed">
                  {COMPANY_INFO.operatingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Col 3 (3 cols) — Kontak Langsung */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono-tech font-bold text-zinc-950 uppercase tracking-widest flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#9c752f]" />
              <span>KOMUNIKASI PROYEK</span>
            </h4>

            <div className="space-y-2.5 text-xs font-mono-tech">
              <div>
                <span className="text-[10px] text-zinc-500 block">DIREKTUR UTAMA / ARSITEK:</span>
                <a
                  href="tel:085788477607"
                  className="font-bold text-zinc-900 hover:text-[#9c752f] transition-colors"
                >
                  {COMPANY_INFO.phone1} (Adi Akbar Tama)
                </a>
              </div>

              <div>
                <span className="text-[10px] text-zinc-500 block">WHATSAPP OFFICIAL:</span>
                <a
                  href="https://wa.me/628217367055"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-zinc-900 hover:text-[#9c752f] transition-colors"
                >
                  {COMPANY_INFO.phone2} (WA Business)
                </a>
              </div>

              <div>
                <span className="text-[10px] text-zinc-500 block">EMAIL RESMI:</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-zinc-800 hover:text-[#9c752f] transition-colors font-sans"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/company-profile-pdf"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-950 hover:bg-zinc-800 text-white text-[11px] font-mono-tech uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Company Profile Resmi</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#b48a3c]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Col 4 (2 cols) — Navigasi Teknis */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono-tech font-bold text-zinc-950 uppercase tracking-widest">
              DIREKTORI
            </h4>
            <ul className="space-y-2 text-xs font-mono-tech">
              <li>
                <Link href="/portofolio" className="text-zinc-700 hover:text-zinc-950 transition-colors">
                  Portofolio Karya
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-zinc-700 hover:text-zinc-950 transition-colors">
                  4 Divisi Layanan
                </Link>
              </li>
              <li>
                <Link href="/alur-kerja" className="text-zinc-700 hover:text-zinc-950 transition-colors">
                  11 Alur SOP
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="text-zinc-700 hover:text-zinc-950 transition-colors">
                  Profil Studio
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-zinc-700 hover:text-zinc-950 transition-colors">
                  Kontak Studio
                </Link>
              </li>
              <li>
                <Link href="/berita" className="text-zinc-700 hover:text-zinc-950 transition-colors">
                  Warta Teknis
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* GIANT ARCHITECTURAL WORDMARK - MATHEMATICALLY PRECISE & FULLY VISIBLE */}
        <div className="border-t border-zinc-900/15 pt-8 pb-4 select-none w-full">
          <svg
            viewBox="0 0 1000 105"
            className="w-full h-auto text-zinc-900/12 hover:text-zinc-900/20 transition-colors"
            fill="currentColor"
            aria-hidden="true"
          >
            <text
              x="500"
              y="55"
              dominantBaseline="central"
              textAnchor="middle"
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontWeight: 900,
                letterSpacing: "0.05em",
              }}
              fontSize="86"
            >
              ADINATA DESIGN
            </text>
          </svg>
        </div>

        {/* Bottom Bar with Coordinates & Legal */}
        <div className="py-6 border-t border-zinc-900/10 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono-tech text-zinc-500 gap-3">
          <p>© 2026 CV. ADINATA DESIGN · KABUPATEN BANTUL, D.I. YOGYAKARTA</p>
          <div className="flex items-center space-x-6">
            <Link href="/tentang-kami#legalitas" className="hover:text-zinc-900 transition-colors">
              [LEGALITAS RESMI]
            </Link>
            <Link href="/alur-kerja" className="hover:text-zinc-900 transition-colors">
              [STANDAR SOP]
            </Link>
            <Link href="/admin" className="hover:text-zinc-900 transition-colors">
              [ADMIN PORTAL]
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
