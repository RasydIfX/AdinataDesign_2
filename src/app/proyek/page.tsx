'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useData } from '@/context/DataContext';
import { Project } from '@/data/mockData';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Building,
  RotateCcw,
  Layers,
  ChevronRight
} from 'lucide-react';

function ProyekContent() {
  const { lang } = useLanguage();
  const { projects } = useData();
  const searchParams = useSearchParams();
  const initialSector = searchParams.get('sektor') || 'all';

  const [selectedSector, setSelectedSector] = useState<string>(initialSector);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Available filters
  const sectors = [
    { key: 'all', label: 'Semua Sektor' },
    { key: 'gedung', label: 'Gedung' },
    { key: 'infrastruktur', label: 'Jalan & Jembatan' },
    { key: 'irigasi', label: 'SDA & Irigasi' },
    { key: 'energi', label: 'Energi' },
    { key: 'desain', label: 'Desain & Masterplan' },
  ];

  const statuses = [
    { key: 'all', label: 'Semua Status' },
    { key: 'Selesai', label: 'Selesai' },
    { key: 'Sedang Berjalan', label: 'Sedang Berjalan' },
  ];

  const years = ['all', '2026', '2025', '2024'];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Sector filter
      if (selectedSector !== 'all' && p.category !== selectedSector) return false;

      // Status filter
      if (selectedStatus !== 'all' && p.status !== selectedStatus) return false;

      // Year filter
      if (selectedYear !== 'all' && p.year.toString() !== selectedYear) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q) || p.titleEn.toLowerCase().includes(q);
        const matchLoc = p.location.toLowerCase().includes(q);
        const matchClient = p.client.toLowerCase().includes(q);
        if (!matchTitle && !matchLoc && !matchClient) return false;
      }

      return true;
    });
  }, [projects, selectedSector, selectedStatus, selectedYear, searchQuery]);

  const resetFilters = () => {
    setSelectedSector('all');
    setSelectedStatus('all');
    setSelectedYear('all');
    setSearchQuery('');
  };

  return (
    <div className="bg-slate-950 text-slate-100 pt-28 pb-24">
      {/* Page Header */}
      <section className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Rekam Jejak & Kapabilitas
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Portofolio Proyek Strategis
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Jelajahi karya rancang bangun, high-rise buildings, jalan tol, jembatan bentang panjang, dan pembangkit energi bersih yang kami selesaikan dengan mutu rekayasa terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama proyek, lokasi, atau klien..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Sektor Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
              >
                {sectors.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Dropdown */}
            <div className="md:col-span-2">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
              >
                {statuses.map((st) => (
                  <option key={st.key} value={st.key}>
                    {st.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Dropdown */}
            <div className="md:col-span-2 flex space-x-2">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
              >
                <option value="all">Semua Tahun</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>

              {(selectedSector !== 'all' || selectedStatus !== 'all' || selectedYear !== 'all' || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Reset Filter"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex justify-between items-center mb-6 text-xs text-slate-400">
          <span>
            Menampilkan <strong>{filteredProjects.length}</strong> proyek
          </span>
          <span className="text-[11px] text-amber-400">Klik proyek untuk melihat spesifikasi detail</span>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-16 text-center text-slate-400">
            <Layers className="w-12 h-12 mx-auto text-slate-600 mb-4" />
            <p className="text-base font-bold text-slate-200 mb-1">
              Tidak ditemukan proyek dengan kriteria filter tersebut.
            </p>
            <p className="text-xs mb-6">
              Silakan sesuaikan kata kunci pencarian atau klik reset untuk melihat seluruh portofolio.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setActiveProject(p)}
                className="group cursor-pointer bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/85 backdrop-blur-md text-amber-400 border border-amber-500/30">
                      {lang === 'id' ? p.categoryLabel : p.categoryLabelEn}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold text-white shadow-md ${
                        p.status === 'Selesai' ? 'bg-emerald-600' : 'bg-blue-600'
                      }`}
                    >
                      {lang === 'id' ? p.status : p.statusEn}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1 mb-2">
                      {lang === 'id' ? p.title : p.titleEn}
                    </h3>
                    <div className="flex items-center text-xs text-slate-400 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 mr-1.5 shrink-0" />
                      <span className="truncate">{p.location}</span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {lang === 'id' ? p.description : p.descriptionEn}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Klien</span>
                      <span className="font-semibold text-slate-200 truncate max-w-[150px] block">
                        {p.client}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 block text-[10px] uppercase">Nilai Proyek</span>
                      <span className="font-bold text-amber-400">{p.contractValue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}

export default function ProyekPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 pt-32 text-center text-white">Memuat Portofolio Proyek...</div>}>
      <ProyekContent />
    </Suspense>
  );
}
