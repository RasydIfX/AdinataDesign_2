'use client';

import React from 'react';
import Link from 'next/link';
import {
  HardHat,
  ExternalLink,
  Lock,
  FileCheck2,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Download
} from 'lucide-react';

export default function EProcurementPage() {
  return (
    <div className="bg-slate-950 text-slate-100 pt-28 pb-24">
      {/* Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <HardHat className="w-4 h-4" />
              <span>Portal Terintegrasi Rekanan</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              E-Procurement ADINATA Design
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Sistem Pengadaan Barang & Jasa Elektronik berbasis transparansi, akuntabilitas, dan efisiensi untuk seluruh proyek konstruksi dan perancangan nasional.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Login / SSO Gateway Mockup */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              <Lock className="w-4 h-4" />
              <span>Gateway Masuk Rekanan Terdaftar</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-6">Login Akun E-Procurement</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Mengarahkan ke Single Sign-On (SSO) Portal Pengadaan Terpadu...');
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  ID Rekanan / NPWP Badan Usaha
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 01.234.567.8-901.000"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Kata Sandi Portal
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded bg-slate-950 border-slate-800 text-amber-500" />
                  <span>Ingat saya</span>
                </label>
                <a href="#lupa-password" onClick={() => alert('Silakan hubungi Helpdesk Pengadaan: Ext. 412')} className="text-amber-400 hover:underline">
                  Lupa kata sandi?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>Masuk ke Dashboard E-Proc</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-800 text-center">
              <span className="text-xs text-slate-400 block mb-2">Belum terdaftar sebagai rekanan resmi?</span>
              <button
                onClick={() => alert('Silakan persiapkan kelengkapan legalitas PT/CV (NIB, SBU, NPWP) lalu hubungi procurement@adinatadesign.co.id')}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs border border-slate-700 transition-colors"
              >
                Registrasi Akun Calon Vendor Baru
              </button>
            </div>
          </div>

          {/* Right Column: Procurement Instructions & Workflow */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                Alur Kerja Pengadaan
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Standar Kualifikasi & Transparansi Tender
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                Seluruh pengadaan material konstruksi, sewa alat berat, subkontraktor spesialis, dan konsultan pendukung dilakukan secara elektronik melalui sistem E-Procurement ADINATA yang adil dan berintegritas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xs mb-3">
                  01
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Pendaftaran & Prakualifikasi</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Upload legalitas perusahaan (NIB, SBU/IUJK, ISO 9001/45001, NPWP, dan rekening koran).
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xs mb-3">
                  02
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Aanwijzing & Penawaran</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Penjelasan tender daring, pengunduhan RKS teknis, dan pemasukan dokumen penawaran harga terenkripsi.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs mb-3">
                  03
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Evaluasi & Klarifikasi</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Penilaian teknis & komersial otomatis dengan sistem scoring berstandar ketat tanpa intervensi manual.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold text-xs mb-3">
                  04
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Penerbitan SPK & Kontrak</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Penandatanganan digital kontrak kerja dan penerbitan Surat Perintah Kerja (SPK) resmi.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2" />
                Integritas Bebas Suap & Gratifikasi
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Seluruh pegawai dan panitia tender ADINATA dilarang keras menerima pemberian apa pun dalam bentuk uang, barang, komisi, fasilitas, maupun sponsorship dari calon rekanan. Pelanggaran akan diproses hukum dan vendor dikenakan sanksi Blacklist permanen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
