'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useData } from '@/context/DataContext';
import { SERVICE_DIVISIONS, WORKFLOW_STEPS } from '@/data/mockData';
import {
  Search,
  X,
  Building2,
  Newspaper,
  Briefcase,
  Compass,
  ArrowRight
} from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (project: any) => void;
}

export default function GlobalSearchModal({
  isOpen,
  onClose,
  onSelectProject,
}: GlobalSearchModalProps) {
  const { lang } = useLanguage();
  const { projects, news, vacancies } = useData();
  const [query, setQuery] = useState('');

  const trimmed = query.trim();
  const isSearchable = trimmed.length >= 3;

  const results = useMemo(() => {
    if (!isSearchable) {
      return { projects: [], services: [], news: [], vacancies: [], workflow: [] };
    }

    const q = trimmed.toLowerCase();

    const filteredProjects = projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.titleEn.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
    );

    const filteredServices = SERVICE_DIVISIONS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.shortDesc.toLowerCase().includes(q)
    );

    const filteredWorkflow = WORKFLOW_STEPS.filter(
      (w) =>
        w.title.toLowerCase().includes(q) ||
        w.desc.toLowerCase().includes(q)
    );

    const filteredNews = news.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q)
    );

    const filteredVacancies = vacancies.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.department.toLowerCase().includes(q)
    );

    return {
      projects: filteredProjects,
      services: filteredServices,
      workflow: filteredWorkflow,
      news: filteredNews,
      vacancies: filteredVacancies,
    };
  }, [trimmed, isSearchable, projects, news, vacancies]);

  const totalResults =
    results.projects.length +
    results.services.length +
    results.workflow.length +
    results.news.length +
    results.vacancies.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-12 flex justify-center items-start">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden mt-8 text-slate-100">
        {/* Search Bar */}
        <div className="relative flex items-center border-b border-zinc-850 px-4 py-3 sm:px-6">
          <Search className="w-5 h-5 text-yellow-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari karya arsitektur, lokasi, layanan, alur kerja..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-bold rounded-lg bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[65vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {!isSearchable ? (
            <div className="text-center py-10 text-zinc-500 text-xs sm:text-sm">
              <Search className="w-10 h-10 mx-auto text-zinc-700 mb-3" />
              <p className="font-bold text-zinc-300">Pencarian ADINATA Design</p>
              <p className="mt-1">
                Ketikkan kata kunci seperti <span className="text-yellow-400 font-mono">"Sleman"</span>,{' '}
                <span className="text-yellow-400 font-mono">"Lampung"</span>,{' '}
                <span className="text-yellow-400 font-mono">"interior"</span>, atau{' '}
                <span className="text-yellow-400 font-mono">"supervisi"</span>.
              </p>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-12 text-zinc-400 text-sm">
              <p className="text-base text-white font-bold mb-1">
                Tidak ada hasil untuk "{query}"
              </p>
            </div>
          ) : (
            <>
              {results.projects.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2 flex items-center">
                    <Building2 className="w-4 h-4 mr-1.5" />
                    Portofolio Desain & Build ({results.projects.length})
                  </h4>
                  <div className="space-y-2">
                    {results.projects.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          if (onSelectProject) onSelectProject(p);
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-black border border-zinc-850 hover:border-yellow-400 transition-all cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-bold text-white">{p.title}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                              {p.location}
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-0.5">{p.categoryLabel}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.services.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2 flex items-center">
                    <Compass className="w-4 h-4 mr-1.5" />
                    Divisi Layanan ({results.services.length})
                  </h4>
                  <div className="space-y-2">
                    {results.services.map((s) => (
                      <Link
                        key={s.id}
                        href={`/layanan#${s.code}`}
                        onClick={onClose}
                        className="p-3 rounded-xl bg-black border border-zinc-850 hover:border-yellow-400 transition-all block"
                      >
                        <div className="text-xs font-bold text-white">{s.title}</div>
                        <p className="text-[11px] text-zinc-400 mt-0.5 line-clamp-1">{s.shortDesc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
