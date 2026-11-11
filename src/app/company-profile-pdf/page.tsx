'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO, TEAM_MEMBERS, SERVICE_DIVISIONS, WORKFLOW_STEPS, DESIGN_STAGES, INITIAL_PROJECTS } from '@/data/mockData';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Phone,
  CheckCircle2,
} from 'lucide-react';

export default function CompanyProfilePdfPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const nextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  const slideLabels = [
    'Cover', 'Profil', 'Visi & Misi', 'Direksi',
    'Tim', 'Layanan', 'Alur Kerja', 'Desain',
    'Portofolio', 'Kontak'
  ];

  return (
    <div className="bg-[#faf9f6] text-zinc-900 min-h-screen pt-28 pb-24">
      {/* Controller */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-sm">
          <div>
            <span className="text-[11px] font-semibold text-[#9c752f] uppercase tracking-widest block">
              Dokumen Resmi
            </span>
            <h1 className="text-lg font-bold text-zinc-900">
              Company Profile: CV ADINATA DESIGN
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="w-9 h-9 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-700 disabled:opacity-30 hover:bg-zinc-100 transition-colors flex items-center justify-center shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono font-bold text-zinc-700 px-3">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="w-9 h-9 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-700 disabled:opacity-30 hover:bg-zinc-100 transition-colors flex items-center justify-center shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/6285788477607?text=Halo%2C%20saya%20ingin%20mendapatkan%20file%20PDF%20Company%20Profile%20CV%20Adinata%20Design"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors ml-2 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-[#b48a3c]" />
              <span>Minta PDF</span>
            </a>
          </div>
        </div>

        {/* Slide Tabs */}
        <div className="flex flex-wrap gap-1.5 mt-3 justify-center">
          {slideLabels.map((label, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentPage === idx + 1
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200/80'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Slide Canvas */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white border border-zinc-200/90 rounded-2xl overflow-hidden min-h-[680px] p-8 sm:p-12 shadow-md">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-zinc-200 pb-4 mb-8 text-[11px] text-zinc-500">
            <div className="flex items-center space-x-2.5">
              <div className="w-6 h-6 rounded-full overflow-hidden bg-white p-0.5 border border-zinc-200 shrink-0">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-zinc-900 tracking-wider uppercase">
                ADINATA DESIGN AND BUILD
              </span>
            </div>
            <span className="truncate max-w-xs text-right text-zinc-500">{COMPANY_INFO.address}</span>
          </div>

          {/* SLIDE 1: COVER */}
          {currentPage === 1 && (
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-4xl sm:text-6xl font-bold text-zinc-900 tracking-tight block">
                  COMPANY
                </span>
                <span className="text-4xl sm:text-6xl font-bold text-[#b48a3c] tracking-tight block">
                  PROFILE
                </span>
                <p className="text-base font-semibold text-zinc-800 uppercase tracking-wider pt-2">
                  ADINATA DESIGN AND BUILD
                </p>
                <p className="text-xs text-[#9c752f] font-semibold uppercase tracking-wider">
                  Architecture, Interior, Design and Consultancy
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {[
                  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
                  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80',
                  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
                  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80',
                ].map((src, i) => (
                  <div key={i} className="img-zoom-frame aspect-[3/4] rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-zinc-200 flex flex-wrap justify-between items-center text-xs text-zinc-600">
                <div>
                  <span className="block text-zinc-900 font-semibold">0857 8847 7607 (Adi Akbar Tama)</span>
                  <span className="block">0821 7367 055 (WhatsApp Business)</span>
                </div>
                <span className="text-[#9c752f] font-mono font-semibold">{COMPANY_INFO.email}</span>
              </div>
            </div>
          )}

          {/* SLIDE 2: TENTANG */}
          {currentPage === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1 font-semibold">Slide 02</span>
                <h2 className="text-2xl font-bold text-zinc-900">Tentang Perusahaan</h2>
              </div>

              <p className="text-sm text-zinc-700 leading-relaxed bg-[#faf9f6] p-5 rounded-xl border border-zinc-200/80">
                <strong>CV ADINATA DESIGN</strong> adalah perusahaan jasa konsultansi yang bergerak di bidang arsitektur, desain interior, konsultansi teknis, dan pengembangan desain. Berkedudukan di Bantul, DIY, didirikan untuk memberikan solusi desain yang inovatif, fungsional, dan estetis.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#faf9f6] border border-zinc-200/80 p-5 rounded-xl">
                  <h3 className="text-xs font-bold text-[#9c752f] uppercase tracking-wider mb-2">Sejarah</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Didirikan melalui <strong className="text-zinc-900">Akta 112 tanggal 22 Juli 2026</strong>. Terdaftar pada Ditjen AHU pada 23 Juli 2026. Memperoleh <strong className="text-zinc-900">NIB 2507260006863</strong>.
                  </p>
                </div>
                <div className="bg-[#faf9f6] border border-zinc-200/80 p-5 rounded-xl">
                  <h3 className="text-xs font-bold text-[#9c752f] uppercase tracking-wider mb-2">Filosofi</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    <strong className="text-zinc-900">'Adi'</strong> = keunggulan, kualitas, integritas. <strong className="text-zinc-900">'Nata'</strong> = menata, merancang, menciptakan keteraturan. Landasan bahwa setiap karya menghadirkan fungsi, kenyamanan, dan keberlanjutan.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 3: VISI MISI LEGALITAS */}
          {currentPage === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-base font-bold text-[#9c752f] mb-2 uppercase tracking-wide">Vision</h2>
                    <p className="text-xs text-zinc-700 leading-relaxed bg-[#faf9f6] p-4 rounded-xl border border-zinc-200 italic">
                      "{COMPANY_INFO.vision}"
                    </p>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#9c752f] mb-2 uppercase tracking-wide">Mission</h2>
                    <ul className="space-y-2 text-xs text-zinc-700">
                      {COMPANY_INFO.missions.map((m, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#b48a3c] mr-2 mt-1.5 shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-base font-bold text-[#9c752f] mb-2 uppercase tracking-wide">Core Values</h2>
                    <div className="space-y-1.5 text-xs text-zinc-700 bg-[#faf9f6] p-4 rounded-xl border border-zinc-200">
                      {COMPANY_INFO.coreValues.map((v, idx) => (
                        <p key={idx}><strong className="text-zinc-900">{v.name}</strong> — {v.desc}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#9c752f] mb-2 uppercase tracking-wide">Legalitas</h2>
                    <div className="text-xs text-zinc-600 space-y-1 bg-[#faf9f6] p-4 rounded-xl border border-zinc-200">
                      <p>{COMPANY_INFO.deedNumber}</p>
                      <p>{COMPANY_INFO.ahuNumber}</p>
                      <p>NIB: <strong className="text-zinc-900 font-mono">{COMPANY_INFO.nib}</strong></p>
                      <p>NPWP: <strong className="text-zinc-900 font-mono">{COMPANY_INFO.npwp}</strong></p>
                      <p className="text-[11px] text-[#9c752f] font-semibold pt-1">KBLI 71101, 74191, 71102, 46100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 4: DIREKSI */}
          {currentPage === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1 font-semibold">Slide 04</span>
                <h2 className="text-2xl font-bold text-zinc-900">Direktur & Komisaris</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {TEAM_MEMBERS.slice(0, 3).map((leader, idx) => (
                  <div key={idx} className="bg-[#faf9f6] border border-zinc-200/80 rounded-xl p-4 text-center">
                    <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden mb-3 border border-zinc-200 shadow-sm">
                      <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[10px] font-bold text-[#9c752f] uppercase tracking-wider block">{leader.role}</span>
                    <h3 className="text-xs font-bold text-zinc-900 mt-0.5 mb-2">{leader.name}</h3>
                    <p className="text-[11px] text-zinc-600 leading-relaxed text-left line-clamp-4">{leader.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 5: TIM */}
          {currentPage === 5 && (
            <div className="space-y-6">
              <div className="text-center mb-4">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1 font-semibold">Slide 05</span>
                <h2 className="text-2xl font-bold text-zinc-900">Struktur Organisasi</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
                {TEAM_MEMBERS.slice(3).map((m, idx) => (
                  <div key={idx} className="bg-[#faf9f6] border border-zinc-200 rounded-xl p-3">
                    <div className="w-14 h-14 rounded-xl overflow-hidden mx-auto mb-2 border border-zinc-200">
                      <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[9px] font-semibold text-[#9c752f] uppercase block">{m.role}</span>
                    <h4 className="text-[11px] font-bold text-zinc-900 mt-0.5 truncate">{m.name}</h4>
                  </div>
                ))}
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed bg-[#faf9f6] p-4 rounded-xl border border-zinc-200">
                Struktur organisasi ADINATA mengintegrasikan jalur pengawasan berjenjang dari Komisaris, Direktur Utama, Direktur Operasional, didukung Project Manager, Site Manager, Structural Engineer, Architect, dan Drafter.
              </p>
            </div>
          )}

          {/* SLIDE 6: LAYANAN */}
          {currentPage === 6 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1 font-semibold">Slide 06</span>
                <h2 className="text-2xl font-bold text-zinc-900">Bidang Layanan</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICE_DIVISIONS.map((d, idx) => (
                  <div key={d.id} className="bg-[#faf9f6] border border-zinc-200 rounded-xl p-5">
                    <span className="text-[10px] font-bold text-[#9c752f] uppercase tracking-wider block mb-1">
                      Divisi {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-bold text-zinc-900 mb-2">{d.title}</h3>
                    <p className="text-xs text-zinc-600 leading-relaxed mb-3">{d.shortDesc}</p>
                    <ul className="space-y-1 text-[11px] text-zinc-700">
                      {d.details.slice(0, 2).map((det, dIdx) => (
                        <li key={dIdx} className="flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#b48a3c] mr-1.5 shrink-0" />
                          <span>{det}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 7: ALUR KERJA */}
          {currentPage === 7 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1 font-semibold">Slide 07</span>
                <h2 className="text-2xl font-bold text-zinc-900">Alur Kerja (11 Tahapan)</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {WORKFLOW_STEPS.map((w) => (
                  <div key={w.step} className="bg-[#faf9f6] border border-zinc-200 p-3 rounded-xl flex items-start gap-3">
                    <span className="text-xs font-mono font-bold text-white bg-zinc-900 w-6 h-6 rounded flex items-center justify-center shrink-0">
                      {w.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900">{w.title}</h4>
                      <p className="text-[11px] text-zinc-500 mt-0.5">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 8: TAHAPAN DESAIN */}
          {currentPage === 8 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1 font-semibold">Slide 08</span>
                <h2 className="text-2xl font-bold text-zinc-900">Tahapan Desain & Keunggulan</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-[#9c752f] uppercase tracking-wider mb-2">8 Tahapan Desain</h3>
                  {DESIGN_STAGES.map((s) => (
                    <div key={s.stage} className="bg-[#faf9f6] border border-zinc-200 p-2.5 rounded-lg flex items-center justify-between text-xs">
                      <span className="font-mono text-[#9c752f] font-bold">{s.stage}</span>
                      <span className="text-zinc-900 font-semibold">{s.name}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#9c752f] uppercase tracking-wider mb-2">Keunggulan</h3>
                  <div className="bg-[#faf9f6] border border-zinc-200 p-4 rounded-xl space-y-2 text-xs text-zinc-600">
                    {[
                      'Tim multidisiplin (Arsitek IAI, Sipil, Drafter)',
                      'Solusi desain inovatif dan fungsional',
                      'Visualisasi 3D foto-realistik',
                      'Gambar kerja lengkap (For Construction)',
                      'Pendampingan hingga konstruksi selesai',
                      'Efisiensi biaya via optimasi desain & RAB',
                      'Komitmen mutu, waktu, dan kepuasan klien',
                      'Teknologi desain mutakhir',
                    ].map((item, i) => (
                      <p key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b48a3c] mr-2 mt-1.5 shrink-0" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 9: PORTOFOLIO */}
          {currentPage === 9 && (
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1 font-semibold">Slide 09</span>
                  <h2 className="text-2xl font-bold text-zinc-900">Final Building</h2>
                </div>
                <Link href="/portofolio" className="text-xs text-[#9c752f] font-semibold hover:underline transition-colors">
                  Galeri Penuh →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {INITIAL_PROJECTS.slice(0, 6).map((p) => (
                  <div key={p.id} className="img-zoom-frame aspect-video rounded-xl overflow-hidden relative border border-zinc-200 shadow-sm">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-[9px] font-mono text-zinc-300 block">FINAL BUILDING</span>
                      <span className="text-[11px] font-semibold text-yellow-400 block truncate">{p.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 10: KONTAK */}
          {currentPage === 10 && (
            <div className="space-y-8 text-center py-6">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-white p-1 border border-zinc-200 shadow-md mx-auto">
                <img
                  src="/logo.png"
                  alt="Logo CV ADINATA DESIGN"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-zinc-900">CV. ADINATA DESIGN</h2>
                <span className="text-sm text-[#9c752f] tracking-wider uppercase block mt-1 font-semibold">Design & Build</span>
                <p className="text-xs text-zinc-500 mt-2">Architecture, Interior, Design and Consultancy</p>
              </div>

              <div className="max-w-md mx-auto bg-[#faf9f6] border border-zinc-200 p-6 rounded-2xl space-y-2.5 text-xs text-zinc-600">
                <p className="font-bold text-zinc-900 uppercase tracking-wider mb-3">Contact</p>
                {[
                  { label: 'Instagram', value: '@adinata.design', href: 'https://instagram.com/adinata.design' },
                  { label: 'TikTok', value: '@adinata.design' },
                  { label: 'WhatsApp', value: '+62 821-7367-055', href: 'https://wa.me/628217367055' },
                  { label: 'Direct', value: '+62 857-8847-7607', href: 'https://wa.me/6285788477607' },
                  { label: 'Email', value: COMPANY_INFO.email },
                ].map((c) => (
                  <div key={c.label} className="flex justify-between items-center py-1.5 border-b border-zinc-200/80 last:border-0">
                    <span className="text-zinc-500">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noreferrer" className="text-[#9c752f] font-bold hover:underline transition-colors">{c.value}</a>
                    ) : (
                      <span className="text-zinc-900 font-semibold">{c.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/6285788477607?text=Halo%20CV%20Adinata%20Design%2C%20saya%20tertarik%20untuk%20konsultasi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#b48a3c]" />
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>
          )}

          {/* Footer */}
          <div className="mt-12 pt-4 border-t border-zinc-200 flex justify-between items-center text-[10px] text-zinc-400">
            <span>Architecture, Interior, Design and Consultancy</span>
            <span>Slide {currentPage} / {totalPages}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
