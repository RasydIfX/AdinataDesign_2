'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import BusinessSection from '@/components/home/BusinessSection';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import WorkflowTimeline from '@/components/home/WorkflowTimeline';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsSection from '@/components/home/NewsSection';
import VendorCtaSection from '@/components/home/VendorCtaSection';
import ProjectDetailModal from '@/components/ProjectDetailModal';
import { Project } from '@/data/mockData';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <BusinessSection />
      <FeaturedProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
      <WorkflowTimeline />
      <TestimonialsSection />
      <NewsSection />
      <VendorCtaSection />

      {/* Dedicated Project Modal in Homepage */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
