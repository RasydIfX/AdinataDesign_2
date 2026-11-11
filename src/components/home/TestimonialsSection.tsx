'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/mockData';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white border-b border-zinc-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header with Architectural Hairline Rule */}
        <div className="mb-14 space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#9c752f]">
            <span className="w-2.5 h-2.5 bg-[#b48a3c]"></span>
            <span className="font-bold tracking-widest uppercase">06 — CATATAN PEMILIK PROYEK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
            Pengalaman nyata di balik realisasi bangunan.
          </h2>
          <div className="h-px w-full bg-zinc-200 mt-6"></div>
        </div>

        {/* Editorial Pull Quote */}
        <div className="mb-14 p-8 bg-[#faf8f5] border-l-2 border-[#b48a3c] border-y border-r border-zinc-200">
          <p className="font-serif-editorial italic text-xl sm:text-2xl lg:text-3xl text-zinc-800 leading-snug">
            "Kualitas sebuah studio arsitektur teruji ketika gambar 3D dapat diwujudkan di atas tanah tanpa pembengkakan biaya dan tanpa kompromi kekuatan struktur."
          </p>
          <span className="font-mono-tech text-xs text-[#9c752f] block mt-3 uppercase tracking-wider font-semibold">
            — PRINSIP PENGAWASAN LAPANGAN ADINATA
          </span>
        </div>

        {/* 3 Editorial Reviews Grid with Crisp Hairlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              className="border border-zinc-900/15 bg-white p-6 space-y-5 flex flex-col justify-between hover:border-[#b48a3c] transition-colors"
            >
              <div className="space-y-4">
                {/* Review Header with Stars & Sheet Code */}
                <div className="flex items-center justify-between text-xs font-mono-tech">
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#b48a3c] text-[#b48a3c]"
                      />
                    ))}
                  </div>
                  <span className="text-zinc-500 text-[10px]">VERIFIKASI #0{idx + 1}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                  "{item.comment}"
                </p>
              </div>

              {/* Client & Project Meta */}
              <div className="pt-4 border-t border-zinc-100 font-mono-tech">
                <span className="text-sm font-bold text-zinc-900 block font-sans">
                  {item.name}
                </span>
                <span className="text-xs text-[#9c752f] font-semibold block mt-0.5">
                  {item.project}
                </span>
                <span className="text-[11px] text-zinc-500 block">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
