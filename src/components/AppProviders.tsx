'use client';

import React, { useState, Suspense, ReactNode } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { DataProvider } from '@/context/DataContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalSearchModal from '@/components/GlobalSearchModal';
import CookieBanner from '@/components/CookieBanner';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Project } from '@/data/mockData';

export default function AppProviders({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <LanguageProvider>
      <DataProvider>
        <div className="min-h-screen flex flex-col bg-[#faf9f6] text-zinc-900 selection:bg-amber-400/30 selection:text-zinc-900">
          <Suspense fallback={<header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white/90" />}>
            <Navbar onOpenSearch={() => setSearchOpen(true)} />
          </Suspense>
          <main className="flex-1">{children}</main>
          <Footer />

          <GlobalSearchModal
            isOpen={searchOpen}
            onClose={() => setSearchOpen(false)}
            onSelectProject={(p) => setSelectedProject(p)}
          />

          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />

          <CookieBanner />
          <FloatingWhatsApp />
        </div>
      </DataProvider>
    </LanguageProvider>
  );
}
