'use client';

import React from 'react';
import { SERVICE_DIVISIONS } from '@/data/mockData';
import { ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';

export default function LayananPage() {
  return (
    <div className="bg-[#faf8f5] text-zinc-900 pt-24">
      
      {/* Specification Manual Header */}
      <section className="py-16 px-6 lg:px-8 bg-white border-b border-zinc-900/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#9c752f]">
            <span className="w-2.5 h-2.5 bg-[#b48a3c]"></span>
            <span className="font-bold tracking-widest uppercase">SPESIFIKASI 02 — MANUAL DIVISI TEKNIS</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500">KBLI 71101 · 74191 · 71102 · 46100</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-zinc-950 tracking-tight leading-[1.08] max-w-4xl">
            4 Pilar Layanan Praktik Rancang Bangun
          </h1>

          <p className="font-serif-editorial italic text-lg sm:text-xl text-[#9c752f] max-w-3xl">
            "Dari ketepatan gambar kerja terukur, audit mutu pembesian lapangan, kendali volume BoQ, hingga pengerjaan fisik siap huni."
          </p>

          <p className="text-sm sm:text-base text-zinc-600 max-w-3xl leading-relaxed font-sans">
            Setiap divisi menjalankan fungsi kontrol kualitas masing-masing untuk memastikan proyek terbangun sesuai jadwal, tepat spesifikasi material, dan tanpa pembengkakan biaya.
          </p>
        </div>
      </section>

      {/* 4 Divisi Specification Sections */}
      <div className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto space-y-12">
          {SERVICE_DIVISIONS.map((item, idx) => (
            <section
              key={item.id}
              id={item.code}
              className="scroll-mt-28 border border-zinc-900/15 bg-white p-6 sm:p-10 transition-colors hover:border-[#b48a3c]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left (8 cols): Title, Code, & Technical Scope */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-center gap-3 font-mono-tech">
                    <span className="text-xs font-bold text-white bg-zinc-950 px-2.5 py-1">
                      DIV-0{idx + 1}
                    </span>
                    <span className="text-xs text-[#9c752f] font-bold uppercase tracking-wider">
                      CODE: {item.code.toUpperCase()}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                    {item.title}
                  </h2>

                  <p className="text-sm text-zinc-700 leading-relaxed font-sans">
                    {item.shortDesc}
                  </p>

                  <div className="pt-2">
                    <span className="font-mono-tech text-xs text-zinc-500 uppercase tracking-wider block mb-3 font-bold">
                      DELIVERABLE & RUANG LINGKUP PEKERJAAN:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono-tech text-xs">
                      {item.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start text-zinc-800 p-3 bg-[#faf8f5] border border-zinc-200"
                        >
                          <span className="text-[#b48a3c] font-bold mr-2">[{dIdx + 1}]</span>
                          <span className="font-sans font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right (4 cols): Studio Briefing Box */}
                <div className="lg:col-span-4 border border-zinc-900/15 p-6 bg-[#faf8f5] space-y-4 font-mono-tech">
                  <div className="border-b border-zinc-200 pb-3">
                    <span className="text-[10px] text-[#9c752f] font-bold block uppercase tracking-wider">
                      JALUR KONSULTASI DIVISI
                    </span>
                    <h3 className="text-sm font-bold text-zinc-950 mt-1 font-sans">
                      Konsultasi Teknis {item.code.toUpperCase()}
                    </h3>
                  </div>

                  <p className="text-[11px] text-zinc-600 font-sans leading-relaxed">
                    Ajukan brief kebutuhan perancangan, denah kasar, atau peninjauan dokumen proyek Anda kepada tim divisi ini.
                  </p>

                  <a
                    href={`https://wa.me/628217367055?text=Halo%20CV%20ADINATA%20DESIGN%2C%20saya%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(item.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-mono-tech text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#b48a3c]" />
                    <span>Konsultasi Studio</span>
                  </a>

                  <div className="text-[10px] text-zinc-500 pt-1 text-center">
                    Senin – Sabtu: 08.00 – 17.00 WIB
                  </div>
                </div>

              </div>
            </section>
          ))}
        </div>
      </div>

    </div>
  );
}
