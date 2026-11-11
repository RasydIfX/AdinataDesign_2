'use client';

import React from 'react';
import Link from 'next/link';
import { SERVICE_DIVISIONS } from '@/data/mockData';
import { ArrowUpRight } from 'lucide-react';

export default function BusinessSection() {
  return (
    <section className="py-24 bg-[#faf8f5] border-b border-zinc-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Asymmetrical 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column (4 cols): Section Header & Architectural Manifesto */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#9c752f]">
                <span className="w-2 h-2 bg-[#b48a3c]"></span>
                <span className="font-bold tracking-widest uppercase">03 — DIVISI PRAKTIK KERJA</span>
              </div>
              <div className="h-0.5 w-full bg-gradient-to-r from-[#b48a3c] via-zinc-300 to-transparent"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
              Struktur kerja studio berbasis disiplin gambar & lapangan.
            </h2>

            <p className="text-sm text-zinc-600 leading-relaxed">
              Kami membagi penanganan proyek ke dalam empat pilar teknis. Ini memastikan gagasan visual tidak terputus saat bertemu realitas tanah, kekuatan struktur beton, dan batas anggaran klien.
            </p>

            <div className="pt-2">
              <Link
                href="/layanan"
                className="inline-flex items-center space-x-2 font-mono-tech text-xs uppercase tracking-wider text-zinc-900 hover:text-[#9c752f] font-semibold border-b border-zinc-900 hover:border-[#9c752f] pb-1 transition-colors"
              >
                <span>Lihat Spesifikasi Layanan Detail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Studio Technical Note Box */}
            <div className="p-4 bg-white border border-zinc-900/10 font-mono-tech text-xs text-zinc-600 space-y-1.5">
              <span className="text-[10px] text-[#9c752f] font-bold block uppercase tracking-wider">
                KOMITMEN GAMBAR FOR CONSTRUCTION
              </span>
              <p className="text-[11px] leading-relaxed">
                Setiap lembar gambar kerja dikoordinasikan lintas arsitektur, struktur sipil, dan MEP elektrikal sebelum fisik bangunan dieksekusi.
              </p>
            </div>
          </div>

          {/* Right Column (8 cols): Editorial Index List (No Cards, Architectural Dividers) */}
          <div className="lg:col-span-8 divide-y divide-zinc-900/15 border-y border-zinc-900/15">
            {SERVICE_DIVISIONS.map((item, idx) => (
              <div
                key={item.id}
                className="py-8 group transition-colors hover:bg-white/60 px-4 -mx-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Division Code & Number */}
                  <div className="md:col-span-3 font-mono-tech">
                    <span className="text-xs text-[#9c752f] font-bold block">
                      DIVISI 0{idx + 1}
                    </span>
                    <span className="text-[11px] text-zinc-500 uppercase tracking-widest block mt-0.5">
                      CODE: {item.code.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="md:col-span-9 space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#9c752f] transition-colors tracking-tight">
                        {item.title}
                      </h3>
                      <Link
                        href={`/layanan#${item.code}`}
                        className="text-zinc-400 group-hover:text-[#9c752f] transition-colors p-1"
                        aria-label={`Rincian ${item.title}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {item.shortDesc}
                    </p>

                    {/* Concrete Deliverable Tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {item.details.map((detail, dIdx) => (
                        <span
                          key={dIdx}
                          className="font-mono-tech text-[11px] text-zinc-700 bg-zinc-100/80 px-2.5 py-1 border border-zinc-200"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
