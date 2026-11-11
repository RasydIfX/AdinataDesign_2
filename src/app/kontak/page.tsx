'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/data/mockData';
import { useData } from '@/context/DataContext';
import {
  Send,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';

export default function KontakPage() {
  const { submitMessage } = useData();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Desain Arsitektur & Bangun');
  const [projectLocation, setProjectLocation] = useState('');
  const [message, setMessage] = useState('');

  const [numA, setNumA] = useState(3);
  const [numB, setNumB] = useState(5);
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 2;
    const b = Math.floor(Math.random() * 9) + 2;
    setNumA(a);
    setNumB(b);
    setCaptchaInput('');
    setCaptchaError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(captchaInput, 10) !== numA + numB) {
      setCaptchaError(true);
      return;
    }

    submitMessage({
      name: fullName,
      email,
      phone,
      company: projectLocation ? `Lokasi: ${projectLocation}` : '',
      division: service,
      subject: `Konsultasi ${service} - ${projectLocation}`,
      message,
    });

    setSubmitted(true);
  };

  const inputClass = "w-full bg-[#faf9f6] border border-zinc-200/90 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#b48a3c] transition-colors";

  return (
    <div className="bg-[#faf9f6] text-zinc-900">
      {/* Header */}
      <section className="pt-28 pb-12 px-6 lg:px-8 bg-white border-b border-zinc-200/60">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-semibold text-[#9c752f] uppercase tracking-widest block mb-2">
            Hubungi Kami
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight max-w-3xl">
            Konsultasi Desain & Pelaksanaan
          </h1>
          <p className="text-sm text-zinc-600 mt-3 max-w-2xl leading-relaxed">
            Tim perencana CV ADINATA DESIGN siap membantu mewujudkan konsep hunian maupun ruang komersial Anda.
          </p>
        </div>
      </section>

      <div className="px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left — Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-zinc-200/80 p-8 rounded-2xl space-y-6 shadow-sm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border border-zinc-200 shadow-sm">
                  <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900">CV. ADINATA DESIGN</h3>
                  <span className="text-xs text-zinc-500 font-medium">Design & Build</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/6285788477607"
                  target="_blank"
                  rel="noreferrer"
                  className="block p-4 rounded-xl bg-[#faf9f6] border border-zinc-200/80 hover:border-[#b48a3c]/60 transition-colors"
                >
                  <span className="text-sm font-bold text-zinc-900 block font-mono">0857 8847 7607</span>
                  <span className="text-[11px] text-zinc-500">Adi Akbar Tama (Direct & WhatsApp)</span>
                </a>

                <a
                  href="https://wa.me/628217367055"
                  target="_blank"
                  rel="noreferrer"
                  className="block p-4 rounded-xl bg-[#faf9f6] border border-zinc-200/80 hover:border-[#b48a3c]/60 transition-colors"
                >
                  <span className="text-sm font-bold text-zinc-900 block font-mono">0821 7367 055</span>
                  <span className="text-[11px] text-zinc-500">WhatsApp Business Official</span>
                </a>

                <div className="p-4 rounded-xl bg-[#faf9f6] border border-zinc-200/80">
                  <span className="text-sm font-semibold text-zinc-900 block">{COMPANY_INFO.email}</span>
                  <span className="text-[11px] text-zinc-500">Email Korespondensi Resmi</span>
                </div>

                <div className="p-4 rounded-xl bg-[#faf9f6] border border-zinc-200/80">
                  <span className="text-xs text-zinc-900 block font-bold">Studio & Kantor</span>
                  <span className="text-[11px] text-zinc-600 leading-relaxed block mt-1">
                    {COMPANY_INFO.officeAddress}<br />
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center gap-3 text-xs">
                <span className="text-zinc-500">Ikuti:</span>
                <a
                  href="https://instagram.com/adinata.design"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-700 hover:text-[#9c752f] font-semibold transition-colors"
                >
                  @adinata.design
                </a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-zinc-200/80 p-8 sm:p-10 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900 mb-1">
                Kirim Permohonan Konsultasi
              </h2>
              <p className="text-xs text-zinc-500 mb-6">
                Tim arsitek kami akan segera menghubungi Anda kembali.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">Terkirim!</h3>
                  <p className="text-xs text-zinc-600 max-w-md mx-auto mb-6">
                    Terima kasih, <strong className="text-zinc-900">{fullName}</strong>. Kami akan menghubungi <strong className="text-zinc-900">{phone}</strong> untuk jadwal diskusi.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); generateCaptcha(); }}
                    className="px-5 py-2 rounded-lg bg-zinc-900 text-white font-semibold text-xs transition-colors hover:bg-zinc-800 shadow-sm"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 block mb-1">Nama Lengkap *</label>
                      <input
                        type="text" required value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Nama Anda"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 block mb-1">No. WhatsApp *</label>
                      <input
                        type="tel" required value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0812-xxxx-xxxx"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 block mb-1">Email *</label>
                      <input
                        type="email" required value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nama@email.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 block mb-1">Lokasi Proyek</label>
                      <input
                        type="text" value={projectLocation}
                        onChange={(e) => setProjectLocation(e.target.value)}
                        placeholder="Contoh: Sleman / Bali"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700 block mb-1">Layanan</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={inputClass}
                    >
                      <option value="Desain Arsitektur & Bangun (Design & Build)">Desain Arsitektur & Bangun</option>
                      <option value="Desain Arsitektur Saja (Working Drawing & 3D)">Desain Arsitektur Saja</option>
                      <option value="Desain Interior & Custom Cabinetry">Desain Interior</option>
                      <option value="Renovasi Bangunan & Remodeling">Renovasi & Remodeling</option>
                      <option value="Supervisi Lapangan & Konsultansi">Supervisi & Konsultansi</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700 block mb-1">Kebutuhan</label>
                    <textarea
                      rows={4} required value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ceritakan rencana luas tanah, jumlah kamar, gaya arsitektur..."
                      className={inputClass}
                    />
                  </div>

                  {/* Anti-Spam */}
                  <div className="flex items-center gap-3 p-3 bg-[#faf9f6] rounded-xl border border-zinc-200">
                    <span className="px-3 py-1 bg-white border border-zinc-200 rounded-lg text-xs font-mono text-[#9c752f] font-bold shadow-sm">
                      {numA} + {numB} = ?
                    </span>
                    <input
                      type="number" required value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      placeholder="Hasil"
                      className="w-20 bg-white border border-zinc-200 rounded-lg px-2.5 py-1 text-xs text-zinc-900 shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="text-zinc-400 hover:text-zinc-800 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                    {captchaError && <span className="text-xs text-rose-500 font-semibold">Salah!</span>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4 text-[#b48a3c]" />
                    <span>Kirim Formulir Konsultasi</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
