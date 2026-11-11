'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { WORKFLOW_STEPS } from '@/data/mockData';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export default function WorkflowTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const phases = [
    {
      phase: 'FASE 01',
      title: 'Investigasi Tapak & Brief',
      range: 'Tahap 01 — 03',
      steps: WORKFLOW_STEPS.slice(0, 3),
      deliverable: 'Site Matrix, Analisis GSB/KDB, & Kerangka Anggaran',
    },
    {
      phase: 'FASE 02',
      title: 'Eksplorasi Konsep & 3D',
      range: 'Tahap 04 — 06',
      steps: WORKFLOW_STEPS.slice(3, 6),
      deliverable: 'Denah Skematik, Moodboard Tektonik, & 3D Render',
    },
    {
      phase: 'FASE 03',
      title: 'Gambar Kerja & BoQ',
      range: 'Tahap 07 — 09',
      steps: WORKFLOW_STEPS.slice(6, 9),
      deliverable: 'Dokumen DED Arsitektur-Struktur-MEP & BoQ Volume',
    },
    {
      phase: 'FASE 04',
      title: 'Supervisi & Serah Terima',
      range: 'Tahap 10 — 11',
      steps: WORKFLOW_STEPS.slice(9, 11),
      deliverable: 'Checklist QA Pengecoran & Berita Acara Kunci Siap Huni',
    },
  ];

  return (
    <section className="py-24 bg-[#faf8f5] border-b border-zinc-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header with Architectural Hairline */}
        <div className="mb-14 space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#9c752f]">
            <span className="w-2.5 h-2.5 bg-[#b48a3c]"></span>
            <span className="font-bold tracking-widest uppercase">05 — ALUR KONTROL KUALITAS</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight max-w-2xl">
              Cara kami bekerja: 11 tahapan linier dari sketsa hingga serah terima kunci.
            </h2>
            <Link
              href="/alur-kerja"
              className="inline-flex items-center space-x-2 font-mono-tech text-xs text-zinc-900 hover:text-[#9c752f] font-semibold border-b border-zinc-900 hover:border-[#9c752f] pb-1 transition-colors shrink-0"
            >
              <span>Pelajari Dokumen SOP Lengkap</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="h-px w-full bg-zinc-200 mt-6"></div>
        </div>

        {/* Horizontal Timeline Track: 4 Milestone Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {phases.map((p, idx) => (
            <div
              key={idx}
              className="border border-zinc-900/15 bg-white p-6 relative space-y-4"
            >
              {/* Top Progress Line */}
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[#9c752f] font-bold">{p.phase}</span>
                <span className="text-zinc-500 text-[10px]">{p.range}</span>
              </div>

              <div className="h-0.5 w-full bg-zinc-100 relative overflow-hidden">
                <div className="h-full bg-[#b48a3c] w-full"></div>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-[11px] font-mono-tech text-zinc-500">
                  Target: {p.deliverable}
                </p>
              </div>

              {/* Step Checklist in this phase */}
              <div className="pt-2 border-t border-zinc-100 space-y-2 text-xs">
                {p.steps.map((s, sIdx) => (
                  <div key={sIdx} className="flex items-start space-x-2">
                    <span className="font-mono-tech text-[10px] text-[#9c752f] font-bold shrink-0 mt-0.5">
                      {s.step}
                    </span>
                    <span className="text-zinc-700 text-xs font-medium leading-snug">
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Horizontal Step Explorer (Interactive Bar) */}
        <div className="border border-zinc-900/15 bg-white p-6 lg:p-8 space-y-6">
          <div className="flex items-center justify-between text-xs font-mono-tech text-zinc-500 border-b border-zinc-100 pb-3">
            <span>INSPEKSI DETAIL 11 TAHAPAN TEKNIS</span>
            <span>KLIK NOMOR TAHAP UNTUK MEMBACA SPESIFIKASI PEKERJAAN</span>
          </div>

          {/* Horizontal Step Selector Buttons */}
          <div className="grid grid-cols-6 sm:grid-cols-11 gap-1.5 font-mono-tech text-xs">
            {WORKFLOW_STEPS.map((ws, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`py-2 px-1 text-center border transition-all ${
                  activeStep === i
                    ? 'border-zinc-950 bg-zinc-950 text-white font-bold'
                    : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900'
                }`}
              >
                {ws.step}
              </button>
            ))}
          </div>

          {/* Active Step Showcase */}
          <div className="p-6 bg-[#faf8f5] border border-zinc-200 font-mono-tech grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-3">
              <span className="text-3xl sm:text-4xl font-bold text-zinc-900 block">
                TAHAP {WORKFLOW_STEPS[activeStep].step}
              </span>
              <span className="text-xs text-[#9c752f] font-bold tracking-wider uppercase block mt-1">
                STANDAR FOR CONSTRUCTION
              </span>
            </div>

            <div className="md:col-span-9 space-y-2">
              <h4 className="text-lg font-bold text-zinc-900 font-sans">
                {WORKFLOW_STEPS[activeStep].title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                {WORKFLOW_STEPS[activeStep].desc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
