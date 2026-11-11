'use client';

import React from 'react';

export default function StatsSection() {
  const specs = [
    {
      code: 'SPEC-01',
      title: 'Rancang Bangun Terpadu',
      metric: 'Turnkey System',
      description: 'Dari eksplorasi konsep denah, perhitungan beban struktur, hingga pengawasan mutu pengecoran di lokasi.',
    },
    {
      code: 'SPEC-02',
      title: 'Akta & NIB Resmi',
      metric: 'NIB 2507260006863',
      description: 'SK Kemenkumham AHU-0049498. KBLI 71101 (Arsitektur), 74191 (Interior), 71102 (Konsultansi Teknis).',
    },
    {
      code: 'SPEC-03',
      title: 'Standar Dokumen Gambar',
      metric: 'DED 1:10 - 1:100',
      description: 'Gambar kerja lengkap arsitektur, struktur beton/baja, denah MEP elektrikal, dan BoQ volume terkunci.',
    },
    {
      code: 'SPEC-04',
      title: 'Wilayah Penugasan',
      metric: 'DIY, Lampung, Bali',
      description: 'Pengalaman menangani tapak lahan datar, lahan berkontur lereng, hunian padat perkotaan, hingga kawasan villa.',
    },
  ];

  return (
    <section className="bg-white border-b border-zinc-900/10 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Index Header */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 text-xs font-mono-tech">
          <div className="flex items-center space-x-3">
            <span className="text-[#9c752f] font-bold">02 — INDEX KELAYAKAN PRAKTIK</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-600">STANDAR OPERASIONAL STUDIO</span>
          </div>
          <span className="text-zinc-500 hidden sm:inline">KUALIFIKASI USAHA & TEKNIS</span>
        </div>

        {/* 4-Column Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-zinc-200">
          {specs.map((item, idx) => (
            <div key={idx} className="lg:px-6 first:lg:pl-0 last:lg:pr-0 space-y-2">
              <span className="font-mono-tech text-[10px] text-[#9c752f] tracking-widest block font-bold">
                [{item.code}]
              </span>
              <h3 className="text-sm font-bold text-zinc-900 tracking-tight">
                {item.title}
              </h3>
              <p className="font-mono-tech text-xs text-zinc-700 font-semibold">
                {item.metric}
              </p>
              <p className="text-xs text-zinc-600 leading-relaxed pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
