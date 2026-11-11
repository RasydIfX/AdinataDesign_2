'use client';

import React, { useState } from 'react';
import { Project } from '@/data/mockData';
import { useLanguage } from '@/context/LanguageContext';
import { X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  const { lang } = useLanguage();
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm p-4 sm:p-8 flex justify-center items-start"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-zinc-900/20 shadow-2xl overflow-hidden text-zinc-900 my-6 font-mono-tech"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Technical Metadata Bar */}
        <div className="bg-[#faf8f5] border-b border-zinc-900/10 px-5 py-2.5 flex items-center justify-between text-[11px] text-zinc-600">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#b48a3c]"></span>
            <span className="font-bold text-[#9c752f]">DOKUMEN LEMBAR GAMBAR PROYEK</span>
            <span>·</span>
            <span>{project.drawingCode || 'DED-2026'}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-950 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Image Frame */}
        <div className="relative aspect-video w-full bg-zinc-100 overflow-hidden arch-image-frame">
          <img
            src={images[activeImageIdx] || project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <span className="px-3 py-1 text-[10px] font-bold bg-zinc-950 text-white border border-white/20">
              {project.categoryLabel}
            </span>
            <span className="px-3 py-1 text-[10px] font-bold bg-[#b48a3c] text-white">
              {project.status === 'Selesai' ? 'SELESAI 100%' : project.status}
            </span>
          </div>

          {/* Photo Caption Tag */}
          <div className="absolute bottom-4 left-4 z-10 bg-zinc-950/85 backdrop-blur-sm text-white px-3 py-1 text-[11px] border border-white/20">
            {project.location} — {project.year}
          </div>

          {/* Nav arrows */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex gap-1 z-10">
              <button
                onClick={() => setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                className="w-8 h-8 bg-zinc-950/80 hover:bg-zinc-950 text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Foto Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveImageIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                className="w-8 h-8 bg-zinc-950/80 hover:bg-zinc-950 text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Foto Selanjutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Content Sheet */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <div>
            <span className="text-xs text-[#9c752f] font-bold block mb-1">
              PROYEK ARSITEKTUR & KONSTRUKSI
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight font-sans">
              {lang === 'id' ? project.title : project.titleEn}
            </h2>
            <p className="text-xs text-zinc-500 mt-1">{project.location} · Tahun {project.year}</p>
          </div>

          {/* Technical Specifications Table */}
          <div className="border border-zinc-900/15 divide-y divide-zinc-200 text-xs bg-[#faf8f5]">
            <div className="grid grid-cols-12 p-3">
              <span className="col-span-4 text-zinc-500 font-bold">LUAS BANGUNAN</span>
              <span className="col-span-8 font-semibold text-zinc-900">
                {project.buildingArea || '265 m²'} {project.landArea ? `(Lahan: ${project.landArea})` : ''}
              </span>
            </div>
            <div className="grid grid-cols-12 p-3">
              <span className="col-span-4 text-zinc-500 font-bold">KONTRAK KERJA</span>
              <span className="col-span-8 font-semibold text-[#9c752f]">{project.contractValue}</span>
            </div>
            <div className="grid grid-cols-12 p-3">
              <span className="col-span-4 text-zinc-500 font-bold">DURASI PENGERJAAN</span>
              <span className="col-span-8 font-semibold text-zinc-900">{project.duration}</span>
            </div>
            {project.materials && (
              <div className="grid grid-cols-12 p-3">
                <span className="col-span-4 text-zinc-500 font-bold">SPESIFIKASI MATERIAL</span>
                <span className="col-span-8 text-zinc-800 font-sans leading-relaxed">
                  {project.materials.join(', ')}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
              KONSEPSI PERANCANGAN & CATATAN LAPANGAN
            </h3>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
              {lang === 'id' ? project.description : project.descriptionEn}
            </p>
          </div>

          {/* Scope of Work */}
          {project.scope && project.scope.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
                LINGKUP PEKERJAAN FOR CONSTRUCTION
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.scope.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 bg-[#faf8f5] border border-zinc-200 text-zinc-800 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#b48a3c] shrink-0"></span>
                    <span className="font-sans font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Consultation Action */}
          <div className="pt-4 border-t border-zinc-200 flex flex-wrap justify-between items-center gap-4">
            <span className="text-[11px] text-zinc-500 font-sans">
              Ingin mendiskusikan denah atau konsep serupa untuk lahan Anda?
            </span>
            <a
              href={`https://wa.me/628217367055?text=Halo%20CV%20ADINATA%20DESIGN%2C%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(project.title)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-mono-tech uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#b48a3c]" />
              <span>Konsultasikan Proyek Ini</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
