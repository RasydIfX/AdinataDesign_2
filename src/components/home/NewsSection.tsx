'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useData } from '@/context/DataContext';
import { ArrowUpRight } from 'lucide-react';

export default function NewsSection() {
  const { lang } = useLanguage();
  const { news } = useData();

  return (
    <section className="py-24 bg-[#faf8f5] border-b border-zinc-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header with Architectural Hairline Rule */}
        <div className="mb-14 space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#9c752f]">
            <span className="w-2.5 h-2.5 bg-[#b48a3c]"></span>
            <span className="font-bold tracking-widest uppercase">07 — WARTA TEKNIS & JURNAL STUDIO</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
              Kajian perancangan & catatan lapangan.
            </h2>
            <Link
              href="/berita"
              className="inline-flex items-center space-x-2 font-mono-tech text-xs text-zinc-900 hover:text-[#9c752f] font-semibold border-b border-zinc-900 hover:border-[#9c752f] pb-1 transition-colors shrink-0"
            >
              <span>Arsip Jurnal Lengkap</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="h-px w-full bg-zinc-200 mt-6"></div>
        </div>

        {/* 3 Articles Grid: Crisp Architectural Hairlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.slice(0, 3).map((item, idx) => (
            <article
              key={item.id}
              className="border border-zinc-900/15 bg-white p-5 space-y-4 group hover:border-[#b48a3c] transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Photo Frame with Technical Meta */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-zinc-500">
                    <span className="text-[#9c752f] font-bold">EDISI #{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 border border-zinc-200 arch-image-frame">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-zinc-950/85 backdrop-blur-sm text-white px-2 py-0.5 text-[9px] font-mono-tech uppercase tracking-wider">
                      {lang === 'id' ? item.category : item.categoryEn}
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#9c752f] transition-colors leading-snug">
                  <Link href={`/berita/${item.slug}`}>
                    {lang === 'id' ? item.title : item.titleEn}
                  </Link>
                </h3>

                <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                  {lang === 'id' ? item.summary : item.summaryEn}
                </p>
              </div>

              {/* Author & Read Link */}
              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[11px] text-zinc-500 truncate max-w-[160px]">
                  {item.author}
                </span>
                <Link
                  href={`/berita/${item.slug}`}
                  className="inline-flex items-center text-[#9c752f] hover:underline font-bold text-[11px]"
                >
                  <span>Baca Kajian</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
