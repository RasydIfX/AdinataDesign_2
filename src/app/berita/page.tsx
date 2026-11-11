'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useData } from '@/context/DataContext';
import { Search, ArrowRight } from 'lucide-react';

export default function BeritaPage() {
  const { lang } = useLanguage();
  const { news } = useData();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'all', label: 'Semua' },
    { key: 'Proyek', label: 'Proyek' },
    { key: 'Korporasi', label: 'Korporasi' },
    { key: 'CSR & Lingkungan', label: 'CSR' },
    { key: 'Inovasi', label: 'Inovasi' },
  ];

  const filteredNews = news.filter((item) => {
    if (selectedCat !== 'all' && item.category !== selectedCat) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q) || item.titleEn.toLowerCase().includes(q);
      const matchSummary = item.summary.toLowerCase().includes(q) || item.summaryEn.toLowerCase().includes(q);
      if (!matchTitle && !matchSummary) return false;
    }
    return true;
  });

  return (
    <div className="bg-zinc-950 text-zinc-100">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-medium text-yellow-400 uppercase tracking-widest block mb-3">
            Berita & Informasi
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Media Informasi Terkini
          </h1>
          <p className="text-sm text-zinc-400 mt-4 max-w-2xl leading-relaxed">
            Publikasi perkembangan proyek, informasi korporasi, dan inovasi ADINATA Design & Build.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="px-6 lg:px-8 pb-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setSelectedCat(c.key)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                  selectedCat === c.key
                    ? 'bg-yellow-400 text-black'
                    : 'text-zinc-400 hover:text-white bg-white/[0.03] border border-white/5'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari berita..."
              className="w-full bg-white/[0.03] border border-white/5 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400/50 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          {filteredNews.length === 0 ? (
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-16 text-center">
              <p className="text-sm text-zinc-400 mb-4">Tidak ada berita yang cocok.</p>
              <button
                onClick={() => { setSelectedCat('all'); setSearchQuery(''); }}
                className="px-5 py-2 rounded-lg bg-yellow-400 text-black font-bold text-xs"
              >
                Tampilkan Semua
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
                <article
                  key={item.id}
                  className="group bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all card-lift"
                >
                  <div className="img-zoom-frame aspect-[16/10] w-full bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover brightness-90"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-zinc-500 mb-2">
                        <span className="text-yellow-400 font-medium">
                          {lang === 'id' ? item.category : item.categoryEn}
                        </span>
                        <span>{item.date}</span>
                        <span>{item.readTime}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors line-clamp-2 mb-1.5">
                        <Link href={`/berita/${item.slug}`}>
                          {lang === 'id' ? item.title : item.titleEn}
                        </Link>
                      </h3>
                      <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                        {lang === 'id' ? item.summary : item.summaryEn}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] text-zinc-600 truncate max-w-[140px]">{item.author}</span>
                      <Link
                        href={`/berita/${item.slug}`}
                        className="text-xs text-yellow-400 hover:text-yellow-300 font-medium flex items-center transition-colors"
                      >
                        Baca
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
