'use client';

import React from 'react';
import { WORKFLOW_STEPS, DESIGN_STAGES } from '@/data/mockData';
import { CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export default function AlurKerjaPage() {
  return (
    <div className="bg-[#faf8f5] text-zinc-900 pt-24">
      
      {/* SOP Dossier Header */}
      <section className="py-16 px-6 lg:px-8 bg-white border-b border-zinc-900/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#9c752f]">
            <span className="w-2.5 h-2.5 bg-[#b48a3c]"></span>
            <span className="font-bold tracking-widest uppercase">STANDAR 03 — METODOLOGI & SOP STUDIO</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500">STANDAR KONTROL KUALITAS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-zinc-950 tracking-tight leading-[1.08] max-w-4xl">
            Sistematika Alur Kerja & Tahapan Desain
          </h1>

          <p className="font-serif-editorial italic text-lg sm:text-xl text-[#9c752f] max-w-3xl">
            "Ketepatan bangunan berakar pada urutan tahapan yang tidak boleh dipotong kompas."
          </p>

          <p className="text-sm sm:text-base text-zinc-600 max-w-3xl leading-relaxed font-sans">
            Kami menerapkan 11 alur kerja terstruktur dari pengukuran fisik lahan hingga serah terima kunci siap huni, serta 8 tahapan perancangan arsitektur berstandar For Construction.
          </p>
        </div>
      </section>

      {/* 11 Alur Kerja: Architectural Schedule Index (No Bubbly Cards) */}
      <section className="px-6 lg:px-8 py-16 border-b border-zinc-900/10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
            <div className="space-y-1">
              <span className="font-mono-tech text-xs text-[#9c752f] font-bold uppercase tracking-widest">
                03.1 — STANDAR OPERASIONAL PROSEDUR
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                11 Tahapan Alur Kerja Studio
              </h2>
            </div>
            <span className="font-mono-tech text-xs text-zinc-500">
              URUTAN LINIER KENDALI MUTU
            </span>
          </div>

          {/* Schedule List with Hairlines */}
          <div className="border border-zinc-900/15 divide-y divide-zinc-200 bg-white font-mono-tech">
            {WORKFLOW_STEPS.map((w, idx) => (
              <div
                key={w.step}
                className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start hover:bg-[#faf8f5] transition-colors"
              >
                <div className="md:col-span-2 flex items-center space-x-3">
                  <span className="text-sm font-bold text-white bg-zinc-950 px-2 py-0.5">
                    {w.step}
                  </span>
                  <span className="text-[10px] text-[#9c752f] font-bold uppercase">
                    SOP-0{idx + 1}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-base font-bold text-zinc-950 font-sans">
                    {w.title}
                  </h3>
                </div>

                <div className="md:col-span-6 text-xs text-zinc-600 font-sans leading-relaxed">
                  {w.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Tahapan Desain Arsitektur: Drawing Sheet Matrix */}
      <section className="px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
            <div className="space-y-1">
              <span className="font-mono-tech text-xs text-[#9c752f] font-bold uppercase tracking-widest">
                03.2 — PROSES GAMBAR FOR CONSTRUCTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                8 Tahapan Desain Arsitektur
              </h2>
            </div>
            <span className="font-mono-tech text-xs text-zinc-500">
              DOKUMENTASI CAD & BIM
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono-tech">
            {DESIGN_STAGES.map((stg, sIdx) => (
              <div
                key={stg.stage}
                className="border border-zinc-900/15 p-5 bg-[#faf8f5] space-y-3 hover:border-[#b48a3c] transition-colors"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#9c752f]">{stg.stage}</span>
                  <span className="text-[10px] text-zinc-500">LEM. 0{sIdx + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-zinc-950 font-sans">
                  {stg.name}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  {stg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
