'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useData } from '@/context/DataContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  RefreshCw,
  CheckCircle2,
  Building2,
  HardHat,
  MessageSquare
} from 'lucide-react';

function HubungiKamiContent() {
  const { lang } = useLanguage();
  const { submitMessage } = useData();
  const searchParams = useSearchParams();

  const prefilledSubject = searchParams.get('sub') || '';
  const prefilledDivision = searchParams.get('div') || 'Pemasaran & Tender Proyek';

  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [division, setDivision] = useState(prefilledDivision);
  const [subject, setSubject] = useState(prefilledSubject ? `Konsultasi Proyek: ${prefilledSubject}` : '');
  const [message, setMessage] = useState('');

  // Captcha state (PRD F-09: perlindungan spam captcha)
  const [numA, setNumA] = useState(4);
  const [numB, setNumB] = useState(7);
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

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verify captcha
    if (parseInt(captchaInput, 10) !== numA + numB) {
      setCaptchaError(true);
      return;
    }

    submitMessage({
      name: fullName,
      email,
      phone,
      company,
      division,
      subject,
      message,
    });

    setSubmitted(true);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setSubject('');
    setMessage('');
    setSubmitted(false);
    generateCaptcha();
  };

  return (
    <div className="bg-slate-950 text-slate-100 pt-28 pb-24">
      {/* Page Header */}
      <section className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Kanal Komunikasi & Konsultasi
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Hubungi Tim Rekayasa ADINATA
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Kami siap melayani kebutuhan konsultasi rancang bangun, partisipasi tender proyek, kemitraan pengadaan, dan komunikasi kelembagaan secara profesional dan transparan.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form (PRD F-09) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="mb-8">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Formulir Korespondensi Resmi
                </span>
                <h2 className="text-2xl font-black text-white">Kirimkan Permohonan / Pesan</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Pesan Anda akan diteruskan langsung ke divisi terkait dan diproses maksimal 1x24 jam kerja.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Pesan Berhasil Terkirim!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
                    Terima kasih atas kepercayaan Anda kepada ADINATA Design. Nomor tiket pesan telah dibuat dan dapat langsung dicek oleh admin internal di dashboard CMS.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Nama Anda"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@instansi.co.id"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Nomor Telepon / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+62 812-xxxx-xxxx"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Nama Instansi / Perusahaan
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="PT / Instansi Anda"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Division Selection (PRD F-09: kontak per divisi) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Tujuan Divisi *
                      </label>
                      <select
                        value={division}
                        onChange={(e) => setDivision(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                      >
                        <option value="Pemasaran & Tender Proyek">Pemasaran & Tender Proyek</option>
                        <option value="Pengadaan / E-Procurement Vendor">Pengadaan & Logistik (Vendor)</option>
                        <option value="Hubungan Investor & Keuangan">Hubungan Investor & Keuangan</option>
                        <option value="Sekretariat Perusahaan & Humas">Sekretariat Perusahaan & PPID</option>
                        <option value="SDM & Rekrutmen Karir">SDM & Rekrutmen Karir</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">
                        Perihal / Subjek *
                      </label>
                      <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Topik pesan Anda..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Isi Pesan / Keterangan Kebutuhan *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan rincian kebutuhan proyek, lokasi lahan, estimasi waktu, atau pertanyaan Anda..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Anti-Spam Captcha (PRD F-09) */}
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 text-xs font-semibold text-amber-400">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Verifikasi Anti-Spam (Human Verification)</span>
                      </div>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="text-xs text-slate-400 hover:text-white flex items-center space-x-1"
                        title="Acak Pertanyaan"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Ganti Soal</span>
                      </button>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm font-black text-white font-mono tracking-wider select-none">
                        {numA} + {numB} = ?
                      </div>
                      <input
                        type="number"
                        required
                        value={captchaInput}
                        onChange={(e) => {
                          setCaptchaInput(e.target.value);
                          setCaptchaError(false);
                        }}
                        placeholder="Tulis hasil penjumlahan"
                        className={`flex-1 bg-slate-900 border rounded-xl px-3 py-2 text-xs text-white focus:outline-none ${
                          captchaError ? 'border-rose-500' : 'border-slate-800 focus:border-amber-500'
                        }`}
                      />
                    </div>
                    {captchaError && (
                      <p className="text-[11px] text-rose-400 mt-1 font-medium">
                        Jawaban verifikasi angka belum tepat. Silakan hitung kembali.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirimkan Formulir Resmi</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Office Info & Map Mockup */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-1">
                Kantor Pusat (Head Office)
              </span>
              <h3 className="text-lg font-bold text-white mb-3">Gedung ADINATA Tower</h3>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    Kawasan Niaga Terpadu Sudirman (SCBD) Lot 28<br />
                    Lantai 18 - 20, Jl. Jend. Sudirman Kav 52-53<br />
                    Jakarta Selatan 12190, Indonesia
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>+62 (21) 5299-8800 (Hunting)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>corsec@adinatadesign.co.id</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Senin - Jumat: 08.00 - 17.00 WIB</span>
                </div>
              </div>
            </div>

            {/* Regional Branches */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block mb-1">
                Kantor Perwakilan Wilayah & Lapangan
              </span>
              <div className="space-y-4 pt-2">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="text-xs font-bold text-white">Wilayah Operasional IKN Nusantara</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Jl. Negara Km. 38, Sepaku, Penajam Paser Utara, Kalimantan Timur
                  </p>
                  <span className="text-[11px] text-slate-300 block mt-1 font-mono">
                    Telp: +62 (542) 887-2190
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-white">Pusat Fabrikasi Precast & Laboratorium</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Kawasan Industri Bukit Indah City Blok C-4, Purwakarta, Jawa Barat
                  </p>
                  <span className="text-[11px] text-slate-300 block mt-1 font-mono">
                    Telp: +62 (264) 351-400
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Office Map Simulation */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center">
                  <MapPin className="w-4 h-4 text-amber-500 mr-1.5" />
                  Peta Lokasi Kantor Pusat SCBD
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                  GPS: -6.2254, 106.8083
                </span>
              </div>
              <div className="relative aspect-[16/9] w-full bg-slate-950 flex items-center justify-center p-6 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto animate-bounce">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <h4 className="text-xs font-bold text-white">ADINATA Tower SCBD</h4>
                  <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                    Akses mudah via Stasiun MRT Istora Mandiri & Halte TransJakarta Polda Metro Jaya.
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 text-xs text-amber-400 hover:underline font-semibold"
                  >
                    Buka Petunjuk Arah di Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HubungiKamiPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 pt-32 text-center text-white">Memuat Formulir Hubungi Kami...</div>}>
      <HubungiKamiContent />
    </Suspense>
  );
}
