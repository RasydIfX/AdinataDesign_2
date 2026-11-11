'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'id' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Nav
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.services': 'Bidang Layanan',
    'nav.workflow': 'Alur Kerja',
    'nav.team': 'Struktur Tim',
    'nav.projects': 'Portofolio',
    'nav.news': 'Artikel & Info',
    'nav.careers': 'Karir',
    'nav.contact': 'Kontak',
    'nav.legal': 'Legalitas & GCG',
    'nav.flipbook': 'Company Profile',
    'nav.admin': 'CMS Admin',
    'nav.search': 'Cari...',

    // Hero
    'hero.badge': 'Architecture, Interior, Design and Consultancy',
    'hero.title1': 'Mewujudkan Hunian & Ruang Impian,',
    'hero.title2': 'Presisi dari Desain hingga Bangun',
    'hero.desc': 'CV ADINATA DESIGN adalah konsultan arsitektur dan rancang bangun terpadu (Design & Build) berkedudukan di Bantul, D.I. Yogyakarta. Menghadirkan solusi arsitektur inovatif, estetis, fungsional, dan sesuai anggaran.',
    'hero.cta.projects': 'Lihat Portofolio Karya',
    'hero.cta.contact': 'Konsultasi Desain & RAB',
    'hero.val1': 'Keunggulan "Adi"',
    'hero.val1.sub': 'Kualitas, Estetika & Integritas',
    'hero.val2': 'Keteraturan "Nata"',
    'hero.val2.sub': 'Menata, Merancang & Presisi',
    'hero.val3': 'Design and Build',
    'hero.val3.sub': 'Layanan Lengkap Konsep hingga Fisik',

    // Stats
    'stats.completed': 'Karya Desain & Bangun',
    'stats.experience': 'Layanan Arsitektur & Interior',
    'stats.regions': 'Cakupan Wilayah Proyek',
    'stats.clients': 'Kepuasan & Kepercayaan Klien',

    // Sections
    'sec.business.tag': '4 Pilar Layanan',
    'sec.business.title': 'Bidang Layanan Terintegrasi',
    'sec.business.desc': 'Setiap divisi bekerja secara kolaboratif sehingga menghasilkan solusi desain yang komprehensif mulai dari konsep hingga pengawasan pelaksanaan.',
    'sec.projects.tag': 'Karya Nyata Kami',
    'sec.projects.title': 'Portofolio Final Building Design & Build',
    'sec.projects.all': 'Lihat Seluruh Portofolio',
    'sec.team.tag': 'Talenta Berpengalaman',
    'sec.team.title': 'Struktur Organisasi & Tim Ahli',
    'sec.team.desc': 'Didukung tim arsitek, structural engineer, drafter, dan manajemen proyek profesional.',
    'sec.workflow.tag': 'Metode Kerja Terstruktur',
    'sec.workflow.title': '11 Tahapan Alur Kerja Perusahaan',
    'sec.workflow.desc': 'Setiap tahap dilakukan dengan koordinasi intensif agar kualitas, waktu, dan biaya tetap terkendali.',

    // Footer
    'footer.headquarters': 'Alamat Kantor & Studio',
    'footer.quickLinks': 'Menu Navigasi',
    'footer.services': 'Layanan Utama',
    'footer.legal': 'Legalitas Badan Usaha',
    'footer.rights': 'Hak Cipta Dilindungi. Terdaftar Resmi Kemenkumham RI & NIB.',

    // Common
    'btn.learnMore': 'Pelajari Selengkapnya',
    'btn.viewDetail': 'Lihat Rincian Karya',
    'btn.filterAll': 'Semua',
    'btn.applyNow': 'Lamar Posisi Ini',
    'btn.submit': 'Kirim Permohonan Konsultasi',
    'btn.download': 'Unduh Company Profile PDF',
    'btn.close': 'Tutup',
    'btn.search': 'Cari',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.workflow': 'Workflow',
    'nav.team': 'Organization',
    'nav.projects': 'Portfolio',
    'nav.news': 'Articles & News',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact Us',
    'nav.legal': 'Legality & GCG',
    'nav.flipbook': 'Company Profile',
    'nav.admin': 'Admin CMS',
    'nav.search': 'Search...',

    // Hero
    'hero.badge': 'Architecture, Interior, Design and Consultancy',
    'hero.title1': 'Crafting Inspiring Spaces,',
    'hero.title2': 'Precision from Concept to Build',
    'hero.desc': 'CV ADINATA DESIGN is an integrated architecture and design & build consultancy based in Bantul, Yogyakarta. Delivering innovative, aesthetic, functional, and budget-optimized spaces.',
    'hero.cta.projects': 'Explore Works Portfolio',
    'hero.cta.contact': 'Free Design Consultation',
    'hero.val1': '"Adi" Excellence',
    'hero.val1.sub': 'Quality, Aesthetics & Integrity',
    'hero.val2': '"Nata" Structure',
    'hero.val2.sub': 'Design, Balance & Precision',
    'hero.val3': 'Design and Build',
    'hero.val3.sub': 'Seamless Architecture to Build Turnkey',

    // Stats
    'stats.completed': 'Completed Design & Build Works',
    'stats.experience': 'Architecture & Interior Services',
    'stats.regions': 'Project Locations Covered',
    'stats.clients': 'Client Satisfaction Index',

    // Sections
    'sec.business.tag': '4 Core Pillars',
    'sec.business.title': 'Integrated Service Divisions',
    'sec.business.desc': 'Each division collaborates seamlessly to generate comprehensive design and construction solutions.',
    'sec.projects.tag': 'Our Track Record',
    'sec.projects.title': 'Final Building Design & Build Portfolio',
    'sec.projects.all': 'View All Portfolio',
    'sec.team.tag': 'Experienced Talent',
    'sec.team.title': 'Organizational Structure & Experts',
    'sec.team.desc': 'Powered by registered architects, structural engineers, technical drafters, and field managers.',
    'sec.workflow.tag': 'Structured Methodology',
    'sec.workflow.title': '11-Step Company Workflow',
    'sec.workflow.desc': 'Every phase is executed with strict coordination to keep quality, schedule, and cost under control.',

    // Footer
    'footer.headquarters': 'Office & Studio Address',
    'footer.quickLinks': 'Quick Navigation',
    'footer.services': 'Core Services',
    'footer.legal': 'Business Legality',
    'footer.rights': 'All Rights Reserved. Registered with Indonesian Ministry of Law and Human Rights & NIB.',

    // Common
    'btn.learnMore': 'Learn More',
    'btn.viewDetail': 'View Project Details',
    'btn.filterAll': 'All',
    'btn.applyNow': 'Apply for Position',
    'btn.submit': 'Submit Consultation Request',
    'btn.download': 'Download Company Profile PDF',
    'btn.close': 'Close',
    'btn.search': 'Search',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('id');

  useEffect(() => {
    const saved = localStorage.getItem('adinata_lang') as Language;
    if (saved && (saved === 'id' || saved === 'en')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('adinata_lang', newLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['id']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
