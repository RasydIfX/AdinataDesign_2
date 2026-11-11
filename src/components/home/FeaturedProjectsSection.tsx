'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useData } from '@/context/DataContext';
import { Project } from '@/data/mockData';
import { ArrowUpRight, Maximize2 } from 'lucide-react';

interface FeaturedProjectsSectionProps {
  onSelectProject: (p: Project) => void;
}

export default function FeaturedProjectsSection({
  onSelectProject,
}: FeaturedProjectsSectionProps) {
  const { lang } = useLanguage();
  const { projects } = useData();
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'SEMUA KARYA' },
    { key: 'exterior', label: 'EKSTERIOR & STRUKTUR' },
    { key: 'interior', label: 'INTERIOR TERPADU' },
    { key: 'renovasi', label: 'RENOVASI & REMODELING' },
  ];

  const filtered = projects.filter((p) => {
    if (filterCategory === 'all') return true;
    return p.category === filterCategory;
  });

  const heroProject = filtered[0] || projects[0];
  const gridProjects = filtered.slice(1, 5);

  return (
    <section className="py-24 bg-white border-b border-zinc-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header with Architectural Hairline Rule */}
        <div className="mb-14 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#9c752f]">
                <span className="w-2.5 h-2.5 bg-[#b48a3c]"></span>
                <span className="font-bold tracking-widest uppercase">04 — MONOGRAF KARYA TERPILIH</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
                Portofolio Desain & Bangunan
              </h2>
            </div>

            {/* Technical Category Filter */}
            <div className="flex flex-wrap gap-2 font-mono-tech text-xs">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setFilterCategory(c.key)}
                  className={`px-3 py-1.5 border transition-all ${
                    filterCategory === c.key
                      ? 'border-zinc-950 bg-zinc-950 text-white font-bold'
                      : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-400 hover:text-zinc-950'
                  }`}
                >
                  [{c.label}]
                </button>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-zinc-200"></div>
        </div>

        {/* Feature 1: Asymmetrical Editorial Hero Project (12-cols) */}
        {heroProject && (
          <div className="mb-16 border border-zinc-900/15 bg-[#faf8f5] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Photo Column (7 cols) with Drafting Annotations */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-zinc-500 mb-2">
                  <span>DOKUMEN: {heroProject.drawingCode || 'DED-2026/01'}</span>
                  <span>ELEVASI FASAD DEPAN</span>
                  <span>SKALA 1:50</span>
                </div>

                <div
                  onClick={() => onSelectProject(heroProject)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 border border-zinc-300 cursor-pointer group arch-image-frame"
                >
                  <img
                    src={heroProject.image}
                    alt={heroProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Technical Info */}
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <span className="px-4 py-2 bg-white text-zinc-950 font-mono-tech text-xs font-bold tracking-wider inline-flex items-center gap-2 shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Buka Lembar Detail Proyek</span>
                    </span>
                  </div>

                  {/* Bottom Image Caption Tag */}
                  <div className="absolute bottom-3 left-3 bg-zinc-950/85 backdrop-blur-sm text-white px-3 py-1 text-[11px] font-mono-tech border border-white/20">
                    {heroProject.location} — {heroProject.year}
                  </div>
                </div>
              </div>

              {/* Technical Specification Column (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <div className="flex items-center justify-between font-mono-tech text-xs text-[#9c752f] mb-1">
                    <span className="font-bold">{heroProject.categoryLabel}</span>
                    <span>TAHUN {heroProject.year}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight leading-snug">
                    {heroProject.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {heroProject.description}
                </p>

                {/* Technical Specifications Table */}
                <div className="border border-zinc-200 divide-y divide-zinc-200 text-xs font-mono-tech bg-white">
                  <div className="grid grid-cols-3 p-2.5">
                    <span className="text-zinc-500">LOKASI</span>
                    <span className="col-span-2 font-medium text-zinc-900">{heroProject.location}</span>
                  </div>
                  <div className="grid grid-cols-3 p-2.5">
                    <span className="text-zinc-500">LUAS AREA</span>
                    <span className="col-span-2 font-medium text-zinc-900">
                      {heroProject.buildingArea || '265 m²'} (Lahan: {heroProject.landArea || '320 m²'})
                    </span>
                  </div>
                  {heroProject.materials && (
                    <div className="grid grid-cols-3 p-2.5">
                      <span className="text-zinc-500">MATERIAL</span>
                      <span className="col-span-2 font-medium text-zinc-900 leading-tight">
                        {heroProject.materials.join(', ')}
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-3 p-2.5">
                    <span className="text-zinc-500">LINGKUP</span>
                    <span className="col-span-2 text-zinc-700 text-[11px]">
                      {heroProject.scope.slice(0, 3).join(' · ')}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectProject(heroProject)}
                    className="inline-flex items-center space-x-2 text-xs font-mono-tech font-bold text-zinc-900 hover:text-[#9c752f] border-b border-zinc-900 hover:border-[#9c752f] pb-1 transition-colors"
                  >
                    <span>Inspeksi Gambar & Rincian Lengkap</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Secondary Editorial Grid: Crisp Hairline Cards with Captions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer border border-zinc-900/15 bg-white p-4 transition-all hover:border-[#b48a3c] space-y-4"
            >
              {/* Photo Frame with Dimension Header */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-zinc-500">
                  <span>DOKUMEN: {project.drawingCode || `DWG-0${idx + 2}`}</span>
                  <span>{project.location}</span>
                  <span className="text-[#9c752f] font-bold">{project.year}</span>
                </div>

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 border border-zinc-200 arch-image-frame">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-zinc-950/85 backdrop-blur-sm text-white px-2 py-0.5 text-[9px] font-mono-tech uppercase tracking-wider">
                    {project.categoryLabel}
                  </div>
                </div>
              </div>

              {/* Project Meta & Technical Captions */}
              <div className="space-y-2 pt-1 font-mono-tech">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-base font-bold text-zinc-900 group-hover:text-[#9c752f] transition-colors leading-snug">
                    {project.title}
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#9c752f] shrink-0 transition-colors" />
                </div>

                <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Caption Bar: Lokasi, Tahun, Luas, Material */}
                <div className="pt-2 border-t border-zinc-100 grid grid-cols-2 gap-2 text-[11px] text-zinc-500">
                  <div>
                    <span className="text-zinc-400 block text-[9px]">LUAS BANGUNAN</span>
                    <span className="font-semibold text-zinc-800">{project.buildingArea || '180 m²'}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[9px]">LOKASI & TAHUN</span>
                    <span className="font-semibold text-zinc-800">{project.location} ({project.year})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Footer Link */}
        <div className="mt-12 text-center pt-8 border-t border-zinc-200">
          <Link
            href="/portofolio"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-mono-tech text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Buka Seluruh Arsip Portofolio ({projects.length} Proyek)</span>
            <ArrowUpRight className="w-4 h-4 text-[#b48a3c]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
