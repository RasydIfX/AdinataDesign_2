'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { SERVICE_DIVISIONS } from '@/data/mockData';
import {
  Compass,
  CheckCircle2,
  ArrowRight,
  Phone
} from 'lucide-react';

export default function BisnisPage() {
  const { lang } = useLanguage();

  return (
    <div className="bg-black text-slate-100 pt-28 pb-24 cut-corner-yellow">
      <section className="relative py-16 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black text-yellow-400 uppercase tracking-widest block mb-2">
              BIDANG LAYANAN
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Layanan Konsultansi & Perancangan Terintegrasi
            </h1>
            <p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed">
              Solusi rancang bangun terpadu dari konsep arsitektur 3D hingga pelaksanaan konstruksi fisik.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {SERVICE_DIVISIONS.map((item, idx) => (
          <div
            key={item.id}
            id={item.code}
            className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400/50 transition-all"
          >
            <span className="text-[10px] font-black text-yellow-400 uppercase tracking-wider block mb-1">
              DIVISI 0{idx + 1}
            </span>
            <h2 className="text-2xl font-black text-white uppercase mb-3">{item.title}</h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">{item.shortDesc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {item.details.map((det, dIdx) => (
                <div key={dIdx} className="flex items-center text-xs text-zinc-300 bg-black p-3 rounded-xl border border-zinc-850">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 mr-2 shrink-0" />
                  <span>{det}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
