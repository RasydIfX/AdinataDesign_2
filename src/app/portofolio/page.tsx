'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useData } from '@/context/DataContext';
import { Project } from '@/data/mockData';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import { Search, ArrowUpRight, Layers } from 'lucide-react';

function PortofolioContent() {
  const { lang } = useLanguage();
  const { projects } = useData();

  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { key: 'all', label: 'SEMUA KARYA' },
    { key: 'exterior', label: 'EKSTERIOR — DESAIN & BANGUN' },
    { key: 'interior', label: 'INTERIOR — DESAIN & BANGUN' },
    { key: 'renovasi', label: 'RENOVASI — DESAIN & BANGUN' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (selectedCat !== 'all' && p.category !== selectedCat) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q) || p.titleEn.toLowerCase().includes(q);
        const matchLoc = p.location.toLowerCase().includes(q);
        const matchMat = p.materials?.some((m) => m.toLowerCase().includes(q));
        if (!matchTitle && !matchLoc && !matchMat) return false;
      }
      return true;
    });
  }, [projects, selectedCat, searchQuery]);

  return (
    <div className="bg-[#faf8f5] text-zinc-900 pt-24">
      
      {/* Editorial Header */}
      <section className="py-16 px-6 lg:px-8 bg-white border-b border-zinc-900/10">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#9c752f]">
            <span className="w-2.5 h-2.5 bg-[#b48a3c]"></span>
            <span className="font-bold tracking-widest uppercase">MONOGRAF 04 — ARSIP KARYA TERBANGUN</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500">2026 EDITION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-zinc-950 tracking-tight leading-[1.08] max-w-4xl">
            Portofolio Desain & Bangunan
          </h1>

          <p className="font-serif-editorial italic text-lg sm:text-xl text-[#9c752f] max-w-3xl">
            "Dokumentasi menyeluruh mencakup luas lantai terbangun, tektonika material, dan lingkup eksekusi rancang bangun."
          </p>

          <p className="text-sm sm:text-base text-zinc-600 max-w-3xl leading-relaxed font-sans">
            Setiap karya di bawah ini merupakan wujud nyata kerja kolaboratif antara studio arsitektur, insinyur struktur, dan tim pengawas tapak CV ADINATA DESIGN di berbagai wilayah Indonesia.
          </p>
        </div>
      </section>

      {/* Material & Tectonic Study Strip (Visual Variety beyond finished photos) */}
      <section className="border-b border-zinc-900/10 bg-[#f4f1ea] py-8 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto font-mono-tech">
          <div className="flex items-center justify-between text-xs text-zinc-500 mb-4 pb-2 border-b border-zinc-900/10">
            <span className="text-[#9c752f] font-bold">STUDI DETAIL TEKTONIKA & MATERIAL LAPANGAN</span>
            <span className="hidden sm:inline">DOKUMENTASI KERAJINAN TUKANG & TEKNIK SAMBUNGAN</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="border border-zinc-300 bg-white p-3 space-y-1">
              <span className="text-[10px] text-[#9c752f] font-bold block">01 / STRUKTUR BAJA</span>
              <p className="text-zinc-900 font-semibold text-[11px] font-sans">Baja WF & Sambungan Baut HTB</p>
              <p className="text-[10px] text-zinc-500 font-sans">Kekakuan bentang kanopi lebar tanpa kolom tengah.</p>
            </div>
            <div className="border border-zinc-300 bg-white p-3 space-y-1">
              <span className="text-[10px] text-[#9c752f] font-bold block">02 / TERAKOTA</span>
              <p className="text-zinc-900 font-semibold text-[11px] font-sans">Bata Ekspos & Roster Angin</p>
              <p className="text-[10px] text-zinc-500 font-sans">Sirkulasi udara silang pasif dan bayangan arsitektural.</p>
            </div>
            <div className="border border-zinc-300 bg-white p-3 space-y-1">
              <span className="text-[10px] text-[#9c752f] font-bold block">03 / KAYU ULIN</span>
              <p className="text-zinc-900 font-semibold text-[11px] font-sans">Secondary Skin Louver Tropis</p>
              <p className="text-[10px] text-zinc-500 font-sans">Penyaring panas matahari barat tahan rayap & cuaca.</p>
            </div>
            <div className="border border-zinc-300 bg-white p-3 space-y-1">
              <span className="text-[10px] text-[#9c752f] font-bold block">04 / KACA & VOID</span>
              <p className="text-zinc-900 font-semibold text-[11px] font-sans">Skylight Laminated & Plafon 5M</p>
              <p className="text-[10px] text-zinc-500 font-sans">Pencahayaan alami merata tanpa silau panas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <div className="px-6 lg:px-8 py-8 border-b border-zinc-900/10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 font-mono-tech">
          <div className="flex flex-wrap gap-2 text-xs">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setSelectedCat(c.key)}
                className={`px-3 py-1.5 border transition-all ${
                  selectedCat === c.key
                    ? 'border-zinc-950 bg-zinc-950 text-white font-bold'
                    : 'border-zinc-300 bg-zinc-50 text-zinc-600 hover:border-zinc-900 hover:text-zinc-950'
                }`}
              >
                [{c.label}]
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari lokasi, judul, material..."
              className="w-full bg-[#faf8f5] border border-zinc-300 pl-9 pr-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Project Monograph Grid */}
      <div className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, idx) => (
            <div
              key={p.id}
              onClick={() => setActiveProject(p)}
              className="group cursor-pointer border border-zinc-900/15 bg-white p-4 space-y-4 hover:border-[#b48a3c] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3 font-mono-tech">
                {/* Header Notation */}
                <div className="flex items-center justify-between text-[10px] text-zinc-500 pb-1 border-b border-zinc-100">
                  <span className="text-[#9c752f] font-bold">LEM. {p.drawingCode || `DWG-0${idx + 1}`}</span>
                  <span>{p.categoryLabel}</span>
                  <span className="font-bold text-zinc-900">{p.year}</span>
                </div>

                {/* Photo Frame with Permanent Caption Tag */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-100 border border-zinc-200 arch-image-frame">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Photo Caption with Location & Year (Mandatory Requirement) */}
                  <div className="absolute bottom-2 left-2 right-2 bg-zinc-950/85 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] font-mono-tech border border-white/20 flex items-center justify-between">
                    <span className="truncate">{p.location}</span>
                    <span className="text-[#b48a3c] ml-2 shrink-0">{p.year}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="pt-1 space-y-1">
                  <h3 className="text-base font-bold text-zinc-950 group-hover:text-[#9c752f] transition-colors leading-snug font-sans">
                    {lang === 'id' ? p.title : p.titleEn}
                  </h3>
                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed font-sans">
                    {lang === 'id' ? p.description : p.descriptionEn}
                  </p>
                </div>

                {/* Architectural Specifications Table (Mandatory Requirement) */}
                <div className="border border-zinc-200 divide-y divide-zinc-200 text-[11px] bg-[#faf8f5] mt-3">
                  <div className="grid grid-cols-12 p-2">
                    <span className="col-span-5 text-zinc-500">LOKASI</span>
                    <span className="col-span-7 font-bold text-zinc-900 truncate">{p.location}</span>
                  </div>
                  <div className="grid grid-cols-12 p-2">
                    <span className="col-span-5 text-zinc-500">LUAS BANGUNAN</span>
                    <span className="col-span-7 font-bold text-zinc-900">{p.buildingArea || '180 m²'}</span>
                  </div>
                  {p.materials && (
                    <div className="grid grid-cols-12 p-2">
                      <span className="col-span-5 text-zinc-500">MATERIAL</span>
                      <span className="col-span-7 text-zinc-800 line-clamp-1">{p.materials.slice(0, 2).join(', ')}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-12 p-2">
                    <span className="col-span-5 text-zinc-500">LINGKUP KERJA</span>
                    <span className="col-span-7 text-zinc-700 text-[10px] truncate">{p.scope.slice(0, 2).join(' · ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-mono-tech">
                <span className="text-[10px] text-zinc-500">STATUS: SELESAI 100%</span>
                <span className="text-zinc-950 font-bold group-hover:text-[#9c752f] inline-flex items-center gap-1 transition-colors">
                  <span>Buka Lembar Proyek</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

export default function PortofolioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf8f5] pt-32 text-center text-zinc-900 font-mono-tech">MEMUAT ARSIP PORTOFOLIO...</div>}>
      <PortofolioContent />
    </Suspense>
  );
}
