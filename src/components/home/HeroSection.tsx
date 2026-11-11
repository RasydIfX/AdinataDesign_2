'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/mockData';
import { ArrowUpRight, Eye, Video } from 'lucide-react';

export default function HeroSection() {
  const [cinemaMode, setCinemaMode] = useState(false);

  return (
    <section className="relative min-h-[94vh] flex items-center pt-28 pb-16 overflow-hidden border-b border-zinc-900/15">
      
      {/* 1. Full-Bleed Drone Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-all duration-700 ${
            cinemaMode ? 'scale-100' : 'scale-105'
          }`}
        >
          <source src="/droneview_proyek.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Architectural Translucent Scrim & Blueprint Grid */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none ${
          cinemaMode
            ? 'bg-zinc-950/30'
            : 'bg-gradient-to-r from-[#faf8f5]/95 via-[#faf8f5]/88 to-[#faf8f5]/65 backdrop-blur-[0.5px]'
        }`}
      />
      <div className="absolute inset-0 z-0 pointer-events-none arch-grid-pattern opacity-30" />

      {/* Blueprint Technical Top Notation */}
      <div className="absolute top-20 left-0 right-0 border-b border-zinc-900/10 px-6 lg:px-12 py-1.5 hidden md:flex items-center justify-between text-[10px] font-mono-tech text-zinc-700 tracking-wider z-10 bg-[#faf8f5]/60 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span>REKAMAN UDARA DRONE PROYEK RESMI</span>
        </div>
        <span>KOORDINAT BANTUL: 07°49'32"S 110°20'08"E</span>
        <span>LEMBAR 01/HOME — DOKUMENTASI TAPAK</span>
      </div>

      {/* Video Cinema Mode Toggle (Floating Pill) */}
      <div className="absolute top-28 right-6 lg:right-12 z-20 hidden sm:block font-mono-tech">
        <button
          onClick={() => setCinemaMode(!cinemaMode)}
          className={`px-3 py-1.5 text-[11px] font-bold border transition-all flex items-center gap-1.5 shadow-sm ${
            cinemaMode
              ? 'bg-zinc-950 text-white border-zinc-950'
              : 'bg-white/90 hover:bg-white text-zinc-900 border-zinc-300'
          }`}
        >
          {cinemaMode ? <Eye className="w-3.5 h-3.5 text-[#b48a3c]" /> : <Video className="w-3.5 h-3.5 text-[#9c752f]" />}
          <span>{cinemaMode ? 'Kembalikan Teks Penuh' : 'Mode Video Drone Penuh'}</span>
        </button>
      </div>

      <div className={`max-w-7xl mx-auto px-6 lg:px-8 w-full pt-8 relative z-10 transition-opacity duration-500 ${
        cinemaMode ? 'opacity-20 hover:opacity-100' : 'opacity-100'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Editorial Typography & Manifesto */}
          <div className="lg:col-span-7 space-y-7">
            {/* Architectural Drawing Code Eyebrow */}
            <div className="flex items-center space-x-3">
              <span className="inline-block w-2.5 h-2.5 bg-[#b48a3c]"></span>
              <span className="font-mono-tech text-xs tracking-[0.2em] text-[#9c752f] uppercase font-semibold">
                01 — STUDIO MANIFESTO
              </span>
              <span className="h-px w-16 bg-zinc-400"></span>
            </div>

            {/* Massive Editorial Headline with Serif Accent */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4rem] font-bold text-zinc-950 tracking-[-0.03em] leading-[1.08]">
              Membangun bentuk dari{' '}
              <span className="font-serif-editorial italic font-normal text-[#9c752f] block sm:inline">
                ketepatan garis
              </span>{' '}
              dan ketegasan material.
            </h1>

            {/* Concrete, Non-cliché Studio Copy */}
            <p className="text-sm sm:text-base text-zinc-800 leading-relaxed max-w-xl font-medium">
              Kami menyusun rancangan dari kalkulasi iklim mikro tropis, gambar kerja teknis (DED) menyeluruh hingga skala 1:10, dan transparansi volume (BoQ) nyata. Setiap garis yang kami tarik di studio dipertanggungjawabkan langsung di atas tanah proyek Anda.
            </p>

            {/* Action Buttons: Crisp Architectural Styling */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/portofolio"
                className="inline-flex items-center space-x-3 px-6 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-mono-tech text-xs uppercase tracking-wider transition-colors border border-zinc-950 shadow-md"
              >
                <span>Daftar Karya Proyek</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#b48a3c]" />
              </Link>

              <a
                href="https://wa.me/628217367055?text=Halo%20CV%20ADINATA%20DESIGN%2C%20saya%20ingin%20konsultasi%20mengenai%20rancang%20bangun%20arsitektur."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-400 font-mono-tech text-xs tracking-wider transition-colors shadow-sm"
              >
                <span>Konsultasi Studio</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </a>

              <Link
                href="/company-profile-pdf"
                className="inline-flex items-center text-xs font-mono-tech text-zinc-700 hover:text-[#9c752f] transition-colors py-2 px-2 font-semibold"
              >
                <span>Dokumen Profil Perusahaan →</span>
              </Link>
            </div>

            {/* Technical Metrics Strip with Hairline Dividers */}
            <div className="pt-8 border-t border-zinc-900/15 grid grid-cols-3 gap-6 font-mono-tech">
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-bold text-zinc-950 block tracking-tight">
                  {COMPANY_INFO.stats.completedProjects}
                </span>
                <span className="text-[11px] text-zinc-700 block uppercase tracking-wider font-bold">
                  {COMPANY_INFO.stats.completedProjectsLabel}
                </span>
                <span className="text-[10px] text-zinc-600 block">
                  {COMPANY_INFO.stats.completedProjectsSub}
                </span>
              </div>

              <div className="space-y-1 border-l border-zinc-900/15 pl-6">
                <span className="text-2xl sm:text-3xl font-bold text-zinc-950 block tracking-tight">
                  {COMPANY_INFO.stats.serviceDivisions}
                </span>
                <span className="text-[11px] text-zinc-700 block uppercase tracking-wider font-bold">
                  Layanan Terpadu
                </span>
                <span className="text-[10px] text-zinc-600 block">
                  Desain s/d Bangun
                </span>
              </div>

              <div className="space-y-1 border-l border-zinc-900/15 pl-6">
                <span className="text-2xl sm:text-3xl font-bold text-zinc-950 block tracking-tight">
                  {COMPANY_INFO.stats.workflowSteps}
                </span>
                <span className="text-[11px] text-zinc-700 block uppercase tracking-wider font-bold">
                  Alur Kendali Mutu
                </span>
                <span className="text-[10px] text-zinc-600 block">
                  Standar For Construction
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Live Drone View Architectural Monograph Frame */}
          <div className="lg:col-span-5 relative">
            {/* Dimension Line Header */}
            <div className="flex items-center justify-between text-[10px] font-mono-tech text-zinc-700 mb-2 px-1 font-semibold">
              <span>+ ELEV. 18.50 M AGL</span>
              <span className="tracking-widest">&larr; AERIAL VIEW SURVEY &rarr;</span>
              <span>4K DRONE FEED</span>
            </div>

            {/* Architectural Frame with Hairline Border and Live Drone Feed */}
            <div className="relative border border-zinc-900/25 bg-white/90 backdrop-blur-sm p-2 shadow-2xl">
              {/* Corner Registration Ticks */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 text-[#9c752f] font-mono-tech text-[10px] leading-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 text-[#9c752f] font-mono-tech text-[10px] leading-none text-right">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 text-[#9c752f] font-mono-tech text-[10px] leading-none">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 text-[#9c752f] font-mono-tech text-[10px] leading-none text-right">+</div>

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-950 arch-image-frame">
                {/* Secondary Synchronized Video View */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/droneview_proyek.mp4" type="video/mp4" />
                </video>

                {/* Overlaid Blueprint Grid Line */}
                <div className="absolute inset-0 pointer-events-none border border-white/30 m-3"></div>

                {/* Drone Recording Telemetry Badge */}
                <div className="absolute top-4 left-4 bg-zinc-950/90 text-white text-[10px] font-mono-tech px-2.5 py-1 tracking-widest backdrop-blur-sm border border-white/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>AERIAL DRONE SURVEY</span>
                </div>

                <div className="absolute top-4 right-4 bg-zinc-950/90 text-[#b48a3c] text-[10px] font-mono-tech px-2 py-1 tracking-widest backdrop-blur-sm border border-white/20">
                  LIVE FEED
                </div>
              </div>

              {/* Technical Caption Box */}
              <div className="mt-2.5 pt-2.5 border-t border-zinc-200 px-1 font-mono-tech text-xs">
                <div className="flex items-center justify-between text-zinc-900 font-bold">
                  <span className="truncate">Dokumentasi Drone Rancang Bangun</span>
                  <span className="text-[#9c752f] shrink-0 ml-2">ADINATA 2026</span>
                </div>
                <div className="text-[11px] text-zinc-600 mt-1 flex flex-wrap gap-x-3 gap-y-1">
                  <span>Lokasi: Tapak Proyek Terpilih</span>
                  <span>·</span>
                  <span>Inspeksi Struktur Atap & Gubahan Fasad</span>
                </div>
              </div>
            </div>

            {/* Off-grid Floating Note */}
            <div className="hidden sm:block absolute -bottom-5 -left-6 bg-white border border-zinc-900/20 p-3 shadow-lg font-mono-tech text-[11px] max-w-[220px] text-zinc-800">
              <span className="text-[#9c752f] font-bold block mb-0.5">SURVEI UDARA</span>
              Inspeksi ketinggian, orientasi bayangan matahari, dan konteks kawasan sekitar.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
