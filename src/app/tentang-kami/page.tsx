'use client';

import React from 'react';
import { COMPANY_INFO, TEAM_MEMBERS } from '@/data/mockData';
import { ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function TentangKamiPage() {
  return (
    <div className="bg-[#faf8f5] text-zinc-900 pt-24">
      
      {/* Studio Dossier Header */}
      <section className="py-16 px-6 lg:px-8 border-b border-zinc-900/10 bg-white">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#9c752f]">
            <span className="w-2.5 h-2.5 bg-[#b48a3c]"></span>
            <span className="font-bold tracking-widest uppercase">DOSSIER 01 — PROFIL STUDIO</span>
            <span className="text-zinc-300">/</span>
            <span className="text-zinc-500">LEGALITAS & TEKTONIKA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-zinc-950 tracking-tight leading-[1.08] max-w-4xl">
            Biro arsitektur yang berakar pada ketepatan gambar dan realitas tapak.
          </h1>

          <p className="font-serif-editorial italic text-lg sm:text-xl text-[#9c752f] max-w-3xl">
            "{COMPANY_INFO.tagline}"
          </p>

          <p className="text-sm sm:text-base text-zinc-600 max-w-3xl leading-relaxed font-sans">
            Didirikan resmi di Kabupaten Bantul, Daerah Istimewa Yogyakarta. Kami menolak perancangan yang hanya berhenti pada estetika visual semata; setiap goresan garis arsitektur dipertanggungjawabkan pada kekuatan struktur, daya tahan material tropis, dan kepastian biaya pembangunan.
          </p>
        </div>
      </section>

      {/* Profil Studio & Makna Filosofi Tektonik */}
      <section id="profil" className="py-16 px-6 lg:px-8 border-b border-zinc-900/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column (7 cols): Studio Manifesto & Legal Footprint */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-mono-tech text-xs text-[#9c752f] font-bold uppercase tracking-widest">
                01.1 — LANDASAN PRAKTIK
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                Ketepatan Dokumen Menentukan Ketepatan Bangunan
              </h2>
            </div>

            <div className="space-y-4 text-sm text-zinc-700 leading-relaxed font-sans">
              <p>
                <strong className="text-zinc-950 font-semibold">CV ADINATA DESIGN</strong> hadir menjawab persoalan laten industri konstruksi: kesenjangan antara gambar 3D yang megah dengan hasil fisik yang menyimpang di lapangan.
              </p>
              <p>
                Perusahaan berbadan hukum resmi berdasarkan <strong className="text-zinc-950">{COMPANY_INFO.deedNumber}</strong>, disahkan oleh Kementerian Hukum dan HAM Republik Indonesia melalui <strong className="text-zinc-950">{COMPANY_INFO.ahuNumber}</strong>, serta memegang <strong className="text-zinc-950 font-mono-tech">NIB {COMPANY_INFO.nib}</strong>.
              </p>
              <p>
                Dengan integrasi studio gambar kerja dan divisi pengawasan konstruksi di bawah satu kendali manajemen, kami memastikan volume material (BoQ) terkunci tanpa markup tersembunyi dan deviasi mutu dapat dicegah sejak hari pertama.
              </p>
            </div>

            {/* KBLI Table with Hairline Borders */}
            <div className="pt-4 font-mono-tech">
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest block mb-2 font-bold">
                KLASIFIKASI BAKU LAPANGAN USAHA INDONESIA (KBLI)
              </span>
              <div className="border border-zinc-900/15 divide-y divide-zinc-200 bg-white">
                {COMPANY_INFO.kbli.map((k) => (
                  <div key={k.code} className="grid grid-cols-12 p-3 text-xs items-center">
                    <span className="col-span-3 text-[#9c752f] font-bold">{k.code}</span>
                    <span className="col-span-9 text-zinc-800 font-sans font-medium">{k.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Tectonic Monogram & Filosofi */}
          <div id="filosofi" className="lg:col-span-5 border border-zinc-900/15 bg-white p-8 space-y-6">
            <div className="flex items-center space-x-4 border-b border-zinc-200 pb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-[#faf8f5] p-1 border border-zinc-300 shrink-0">
                <img
                  src="/logo.png"
                  alt="Logo CV ADINATA DESIGN"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="font-mono-tech">
                <span className="text-xs text-[#9c752f] font-bold block uppercase tracking-wider">
                  MONOGRAM STUDIO
                </span>
                <h3 className="text-lg font-bold text-zinc-950">Filosofi ADINATA</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
              {COMPANY_INFO.philosophy.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 font-mono-tech pt-2">
              <div className="border border-zinc-200 p-4 bg-[#faf8f5]">
                <span className="text-xl font-black text-[#9c752f] block tracking-tight">ADI</span>
                <span className="text-[11px] text-zinc-900 font-bold block mt-1">Keunggulan Teknis</span>
                <span className="text-[10px] text-zinc-500 block leading-tight mt-1 font-sans">
                  Kekuatan struktur, presisi dimensi CAD, & integritas biaya.
                </span>
              </div>
              <div className="border border-zinc-200 p-4 bg-[#faf8f5]">
                <span className="text-xl font-black text-[#9c752f] block tracking-tight">NATA</span>
                <span className="text-[11px] text-zinc-900 font-bold block mt-1">Keteraturan Ruang</span>
                <span className="text-[10px] text-zinc-500 block leading-tight mt-1 font-sans">
                  Sirkulasi udara tropis, zoning privasi, & ritme massa.
                </span>
              </div>
            </div>

            <div className="pt-2 font-mono-tech text-[11px] text-zinc-500 border-t border-zinc-100">
              KABUPATEN BANTUL · D.I. YOGYAKARTA · 2026
            </div>
          </div>

        </div>
      </section>

      {/* Nilai Tektonik & Komitmen Kerja */}
      <section id="visi-misi" className="py-16 px-6 lg:px-8 border-b border-zinc-900/10 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono-tech text-xs text-[#9c752f] font-bold uppercase tracking-widest">
              01.2 — PRINSIP TEKTONIK & KOMITMEN STUDIO
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
              Standar Operasional yang Mengikat Setiap Penugasan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono-tech">
            {COMPANY_INFO.coreValues.map((v, idx) => (
              <div
                key={idx}
                className="border border-zinc-900/15 p-6 bg-[#faf8f5] space-y-3 hover:border-[#b48a3c] transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-[#9c752f]">
                  <span className="font-bold">PRINSIP 0{idx + 1}</span>
                  <span className="text-zinc-400">#SPECS</span>
                </div>
                <h3 className="text-base font-bold text-zinc-950 font-sans">
                  {v.name}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Manajemen & Tenaga Ahli Studio */}
      <section id="tim" className="py-16 px-6 lg:px-8 border-b border-zinc-900/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono-tech text-xs text-[#9c752f] font-bold uppercase tracking-widest">
              01.3 — TENAGA AHLI & PENANGGUNG JAWAB TEKNIS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
              Kolektif Arsitek, Insinyur Struktur, & Pengawas Lapangan
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 font-sans">
              Dipimpin oleh praktisi arsitektur berlisensi Ikatan Arsitek Indonesia (IAI) dan tenaga ahli teknik sipil.
            </p>
          </div>

          {/* Leadership Roster */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.slice(0, 3).map((lead, idx) => (
              <div
                key={idx}
                className="border border-zinc-900/15 bg-white p-6 space-y-5 hover:border-[#b48a3c] transition-colors"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-100 border border-zinc-200 arch-image-frame">
                  <img
                    src={lead.photo}
                    alt={lead.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="space-y-1.5 font-mono-tech">
                  <span className="text-xs text-[#9c752f] font-bold uppercase tracking-wider block">
                    {lead.role}
                  </span>
                  <h3 className="text-base font-bold text-zinc-950 font-sans">
                    {lead.name}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans pt-2">
                    {lead.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Team Grid */}
          <div className="border-t border-zinc-200 pt-8">
            <h4 className="font-mono-tech text-xs font-bold text-zinc-900 uppercase tracking-widest mb-6">
              TIM TEKNIS & MANAJEMEN LAPANGAN
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono-tech">
              {TEAM_MEMBERS.slice(3).map((member, idx) => (
                <div
                  key={idx}
                  className="border border-zinc-200 p-4 bg-white space-y-2"
                >
                  <span className="text-[10px] text-[#9c752f] font-bold uppercase block">
                    {member.role}
                  </span>
                  <h5 className="text-xs font-bold text-zinc-900 font-sans">
                    {member.name}
                  </h5>
                  <p className="text-[11px] text-zinc-500 font-sans line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dokumen Legalitas Lengkap */}
      <section id="legalitas" className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono-tech text-xs text-[#9c752f] font-bold uppercase tracking-widest">
              01.4 — DOKUMEN LEGALITAS USAHA
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
              Kepastian Hukum & Transparansi Perizinan
            </h2>
          </div>

          <div className="border border-zinc-900/15 divide-y divide-zinc-200 font-mono-tech text-xs bg-[#faf8f5]">
            <div className="grid grid-cols-1 sm:grid-cols-12 p-4 items-center gap-2">
              <span className="sm:col-span-4 text-zinc-500 font-bold">NAMA BADAN HUKUM</span>
              <span className="sm:col-span-8 text-zinc-900 font-semibold">{COMPANY_INFO.legalName}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 p-4 items-center gap-2">
              <span className="sm:col-span-4 text-zinc-500 font-bold">AKTA PENDIRIAN NOTARIS</span>
              <span className="sm:col-span-8 text-zinc-900 font-semibold">{COMPANY_INFO.deedNumber}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 p-4 items-center gap-2">
              <span className="sm:col-span-4 text-zinc-500 font-bold">PENGESAHAN KEMENKUMHAM</span>
              <span className="sm:col-span-8 text-zinc-900 font-semibold">{COMPANY_INFO.ahuNumber}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 p-4 items-center gap-2">
              <span className="sm:col-span-4 text-zinc-500 font-bold">NOMOR INDUK BERUSAHA (NIB)</span>
              <span className="sm:col-span-8 text-[#9c752f] font-bold text-sm">{COMPANY_INFO.nib}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 p-4 items-center gap-2">
              <span className="sm:col-span-4 text-zinc-500 font-bold">NPWP BADAN USAHA</span>
              <span className="sm:col-span-8 text-zinc-900 font-semibold">{COMPANY_INFO.npwp}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 p-4 items-center gap-2">
              <span className="sm:col-span-4 text-zinc-500 font-bold">DOMISILI TERDAFTAR</span>
              <span className="sm:col-span-8 text-zinc-900 font-sans text-xs">{COMPANY_INFO.officeAddress}</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
