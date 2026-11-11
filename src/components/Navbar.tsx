'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { COMPANY_INFO } from '@/data/mockData';
import {
  Menu,
  X,
  Search,
  ArrowUpRight,
  Phone
} from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/tentang-kami', label: 'Tentang' },
    { href: '/layanan', label: 'Layanan' },
    { href: '/alur-kerja', label: 'Alur Kerja' },
    { href: '/portofolio', label: 'Portofolio' },
    { href: '/company-profile-pdf', label: 'Company Profile' },
    { href: '/kontak', label: 'Kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top micro ticker */}
      <div className="bg-[#f4f3ef] text-zinc-600 text-[11px] py-1.5 px-4 sm:px-8 border-b border-zinc-200/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-zinc-800 font-semibold">{COMPANY_INFO.legalName}</span>
            <span className="text-zinc-300">•</span>
            <span>Bantul, D.I. Yogyakarta</span>
            <span className="text-zinc-300">•</span>
            <span className="text-zinc-500">Jasa Konsultan Arsitektur, Desain Interior & Rancang Bangun</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/6285788477607"
              target="_blank"
              rel="noreferrer"
              className="text-[#9c752f] hover:text-[#78571c] font-semibold transition-colors"
            >
              0857 8847 7607 (Adi Akbar Tama)
            </a>
            <span className="text-zinc-300">•</span>
            <span className="text-zinc-600">0821 7367 055 (WA Business)</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'minimal-nav py-3' : 'bg-white/85 backdrop-blur-md py-4 border-b border-zinc-200/60 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Minimal Brand Identity */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5 shadow-sm border border-zinc-200/80 group-hover:scale-105 transition-transform shrink-0">
                <img
                  src="/logo.png"
                  alt="ADINATA Design Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-zinc-900 group-hover:text-[#9c752f] transition-colors">
                  ADINATA<span className="text-[#b48a3c] font-black">.</span>
                </span>
                <span className="text-[9px] tracking-[0.18em] text-zinc-500 uppercase font-semibold">
                  Design & Build
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      active
                        ? 'text-[#9c752f] bg-amber-500/10 font-bold'
                        : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center space-x-2.5">
              <button
                onClick={onOpenSearch}
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                title="Pencarian Portofolio"
                aria-label="Cari Proyek"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Consultation CTA */}
              <a
                href="https://wa.me/628217367055?text=Halo%20CV%20Adinata%20Design%2C%20saya%20ingin%20konsultasi%20rancang%20bangun"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs transition-colors shadow-sm"
              >
                <span>Konsultasi</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active ? 'text-[#9c752f] bg-amber-500/10 font-bold' : 'text-zinc-700 hover:bg-zinc-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-zinc-200 space-y-2">
            <a
              href="https://wa.me/6285788477607"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-lg bg-[#b48a3c] hover:bg-[#9c752f] text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Adi Akbar Tama</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
