'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  ShieldCheck,
  Lock,
  FileCheck,
  AlertTriangle,
  Scale,
  Send,
  CheckCircle2,
  PhoneCall,
  Mail
} from 'lucide-react';

export default function TataKelolaPage() {
  const { lang } = useLanguage();
  const [wbsSubmitted, setWbsSubmitted] = useState(false);
  const [wbsCategory, setWbsCategory] = useState('Dugaan Gratifikasi / Suap');
  const [wbsDetail, setWbsDetail] = useState('');
  const [wbsLocation, setWbsLocation] = useState('');

  const gcgPrinciples = [
    {
      title: 'Transparansi (Transparency)',
      desc: 'Keterbukaan dalam proses pengambilan keputusan dan penyampaian informasi materiil yang relevan mengenai perusahaan secara akurat, tepat waktu, dan mudah diakses oleh publik.',
      icon: FileCheck,
    },
    {
      title: 'Akuntabilitas (Accountability)',
      desc: 'Kejelasan fungsi, struktur, sistem, dan pertanggungjawaban organ perusahaan sehingga pengelolaan bisnis dapat terlaksana secara efektif dan terukur.',
      icon: Scale,
    },
    {
      title: 'Responsibilitas (Responsibility)',
      desc: 'Kesesuaian pengelolaan perusahaan terhadap peraturan perundang-undangan yang berlaku, standar K3L, serta prinsip korporasi yang sehat dan bertanggung jawab sosial.',
      icon: ShieldCheck,
    },
    {
      title: 'Independensi (Independency)',
      desc: 'Pengelolaan perusahaan dilakukan secara profesional tanpa benturan kepentingan dan bebas dari pengaruh/tekanan pihak mana pun yang tidak sesuai dengan peraturan perundang-undangan.',
      icon: Lock,
    },
    {
      title: 'Kewajaran (Fairness)',
      desc: 'Keadilan dan kesetaraan dalam memenuhi hak-hak pemangku kepentingan (stakeholders) yang timbul berdasarkan perjanjian dan peraturan yang berlaku.',
      icon: CheckCircle2,
    },
  ];

  const handleWbsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWbsSubmitted(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 pt-28 pb-24">
      {/* Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Integritas & Kepatuhan
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Tata Kelola Perusahaan (Good Corporate Governance)
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Komitmen kuat ADINATA Design & Construction dalam menerapkan prinsip transparansi, etika bisnis berkeadilan, dan saluran pelaporan pelanggaran terpercaya.
            </p>
          </div>
        </div>
      </section>

      {/* 5 GCG Principles */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
            Pilar Fundamental
          </span>
          <h2 className="text-3xl font-black text-white tracking-tight">
            5 Prinsip Tata Kelola (GCG)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gcgPrinciples.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Whistleblowing System (WBS) Section */}
      <section id="wbs" className="py-20 bg-slate-900 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>Whistleblowing System (WBS)</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Saluran Pengaduan Pelanggaran yang Aman & Terlindungi
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ADINATA menyediakan saluran pelaporan independen bagi karyawan, mitra rekanan, vendor, dan masyarakat umum untuk melaporkan setiap indikasi kecurangan (fraud), gratifikasi, pelanggaran kode etik, maupun pelanggaran standar keselamatan kerja di area proyek.
              </p>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Jaminan Perlindungan Pelapor:
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                    <span>Identitas pelapor dijamin kerahasiaannya 100% (dapat anonim).</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                    <span>Perlindungan dari segala bentuk intimidasi, pembalasan, atau diskriminasi karir.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                    <span>Investigasi ditangani langsung oleh Komite Audit Independen.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <span>wbs@adinatadesign.co.id</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-4 h-4 text-amber-500" />
                  <span>Hotline WBS: +62 811-9988-WBS</span>
                </div>
              </div>
            </div>

            {/* WBS Reporting Form */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-lg font-bold text-white mb-2">Formulir Laporan WBS Online</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Anda tidak diwajibkan mencantumkan nama asli untuk menjaga kerahasiaan pelaporan Anda.
                </p>

                {wbsSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">Pengaduan Berhasil Terkirim</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      Nomor tiket investigasi pengaduan Anda adalah <strong className="text-amber-400 font-mono">WBS-{Date.now().toString().slice(-6)}</strong>. Terima kasih atas peran serta Anda dalam menjaga integritas ADINATA.
                    </p>
                    <button
                      onClick={() => setWbsSubmitted(false)}
                      className="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                    >
                      Kirim Laporan Lainnya
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleWbsSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Kategori Pelanggaran *
                      </label>
                      <select
                        value={wbsCategory}
                        onChange={(e) => setWbsCategory(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                      >
                        <option value="Dugaan Gratifikasi / Suap">Dugaan Gratifikasi / Suap</option>
                        <option value="Kecurangan Pengadaan / Tender">Kecurangan Pengadaan / Tender Vendor</option>
                        <option value="Pelanggaran Fatal K3L / Lingkungan">Pelanggaran Prosedur K3L / Lingkungan</option>
                        <option value="Benturan Kepentingan">Benturan Kepentingan (Conflict of Interest)</option>
                        <option value="Pelecehan / Diskriminasi">Pelecehan atau Pelanggaran Etika Kerja</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Lokasi / Proyek Terkait *
                      </label>
                      <input
                        type="text"
                        required
                        value={wbsLocation}
                        onChange={(e) => setWbsLocation(e.target.value)}
                        placeholder="Contoh: Proyek Tol IKN Seksi 4 / Kantor Pusat SCBD"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Uraian Kronologis Kejadian *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={wbsDetail}
                        onChange={(e) => setWbsDetail(e.target.value)}
                        placeholder="Jelaskan pihak yang terlibat, waktu kejadian, dan fakta pendukung secara rinci..."
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Pengaduan Rahasia (WBS)</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
