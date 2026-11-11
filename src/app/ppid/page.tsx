'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { DOCUMENTS } from '@/data/mockData';
import {
  FileText,
  Download,
  Calendar,
  Filter,
  CheckCircle2,
  HardHat,
  Search
} from 'lucide-react';

export default function PpidPage() {
  const { lang } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'all', label: 'Semua Dokumen' },
    { key: 'Laporan Tahunan', label: 'Laporan Tahunan (Annual Report)' },
    { key: 'Keberlanjutan', label: 'Laporan ESG / Keberlanjutan' },
    { key: 'Pedoman GCG', label: 'Pedoman Tata Kelola GCG' },
    { key: 'PPID', label: 'Profil & Keterbukaan Informasi' },
  ];

  const filteredDocs = DOCUMENTS.filter((doc) => {
    if (selectedCat !== 'all' && doc.category !== selectedCat) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = doc.title.toLowerCase().includes(q) || doc.titleEn.toLowerCase().includes(q);
      if (!matchTitle) return false;
    }
    return true;
  });

  return (
    <div className="bg-slate-950 text-slate-100 pt-28 pb-24">
      {/* Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Keterbukaan Informasi Publik
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Pusat Dokumen & Publikasi Resmi (PPID)
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Unduh laporan tahunan korporasi, laporan keberlanjutan ESG, pedoman tata kelola GCG, serta profil resmi ADINATA Design & Construction secara transparan.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Download List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setSelectedCat(c.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCat === c.key
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama dokumen / laporan..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Document Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 p-6 rounded-3xl transition-all flex items-start justify-between gap-4"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    {doc.category} • Tahun {doc.year}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {lang === 'id' ? doc.title : doc.titleEn}
                  </h3>
                  <div className="flex items-center space-x-3 text-xs text-slate-400">
                    <span>Format: {doc.fileSize}</span>
                    <span>•</span>
                    <span className="text-emerald-400 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      Terverifikasi PPID
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => alert(`Mengunduh berkas: ${doc.title} (${doc.fileSize})`)}
                className="shrink-0 p-3 rounded-2xl bg-slate-800 hover:bg-amber-500 text-slate-200 hover:text-slate-950 transition-colors shadow-md"
                title="Unduh Dokumen PDF"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Vendor Qualification Guide Highlight (PRD Bab 8) */}
        <div id="vendor-guide" className="mt-16 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <HardHat className="w-4 h-4" />
                <span>Panduan Rekanan Pengadaan</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Buku Pedoman Kualifikasi Calon Rekanan Vendor & Subkontraktor
              </h3>
              <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                Dokumen komprehensif berisi persyaratan teknis, legalitas badan usaha, sertifikasi K3L, dan tata cara pendaftaran akun portal E-Procurement ADINATA Design.
              </p>
            </div>
            <button
              onClick={() => alert('Mengunduh Buku Panduan Kualifikasi Vendor ADINATA 2026 (PDF 3.8 MB)')}
              className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg shadow-amber-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Panduan Vendor</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
