'use client';

import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { JobVacancy } from '@/data/mockData';
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  UploadCloud,
  FileCheck,
  X,
  Search
} from 'lucide-react';

export default function KarirPage() {
  const { vacancies, submitApplication } = useData();

  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [activeJob, setActiveJob] = useState<JobVacancy | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantExp, setApplicantExp] = useState('1-3 Tahun');
  const [applicantLinkedin, setApplicantLinkedin] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverNote, setCoverNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = [
    { key: 'all', label: 'Semua' },
    { key: 'Konstruksi', label: 'Konstruksi' },
    { key: 'Engineering', label: 'Engineering' },
    { key: 'K3L', label: 'HSE' },
    { key: 'Estimasi', label: 'Estimasi' },
  ];

  const filteredJobs = vacancies.filter((v) => {
    if (selectedDept !== 'all' && !v.department.toLowerCase().includes(selectedDept.toLowerCase())) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      if (!v.title.toLowerCase().includes(q) && !v.location.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeJob) return;
    submitApplication({
      jobId: activeJob.id,
      jobTitle: activeJob.title,
      fullName: applicantName,
      email: applicantEmail,
      phone: applicantPhone,
      experienceYears: applicantExp,
      linkedinUrl: applicantLinkedin,
      resumeFileName: resumeFile ? resumeFile.name : 'CV_Pelamar.pdf',
      coverLetter: coverNote,
    });
    setIsSubmitted(true);
  };

  const closeApplyModal = () => {
    setActiveJob(null);
    setIsSubmitted(false);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setResumeFile(null);
    setCoverNote('');
  };

  const inputClass = "w-full bg-white/[0.03] border border-white/5 rounded-lg px-3 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400/50 transition-colors";

  return (
    <div className="bg-zinc-950 text-zinc-100">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-medium text-yellow-400 uppercase tracking-widest block mb-3">
            Peluang Karir
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Bergabung Bersama Kami
          </h1>
          <p className="text-sm text-zinc-400 mt-4 max-w-2xl leading-relaxed">
            Bergabung bersama komunitas arsitek dan manajer proyek ADINATA Design & Build dalam mewujudkan karya arsitektur terbaik.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl font-bold text-white">Posisi Terbuka</h2>
              <p className="text-xs text-zinc-500 mt-1">{filteredJobs.length} posisi tersedia</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-56">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari posisi..."
                  className="w-full bg-white/[0.03] border border-white/5 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400/50 transition-colors"
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {departments.map((d) => (
                  <button
                    key={d.key}
                    onClick={() => setSelectedDept(d.key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedDept === d.key
                        ? 'bg-yellow-400 text-black'
                        : 'text-zinc-400 hover:text-white bg-white/[0.03] border border-white/5'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Jobs */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white/[0.02] border border-white/5 hover:border-white/10 rounded-xl p-6 transition-colors card-lift"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-white">{job.title}</h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium text-yellow-400 bg-yellow-400/10">{job.type}</span>
                    </div>
                    <p className="text-xs text-zinc-500">{job.department}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                      <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-yellow-400" />{job.location}</span>
                      <span className="flex items-center"><Briefcase className="w-3.5 h-3.5 mr-1" />{job.experience}</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />Batas: {job.deadline}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl">{job.description}</p>
                  </div>
                  <button
                    onClick={() => setActiveJob(job)}
                    className="shrink-0 px-5 py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs transition-colors"
                  >
                    Lamar
                  </button>
                </div>

                <details className="mt-4 pt-4 border-t border-white/5 group">
                  <summary className="cursor-pointer text-xs text-yellow-400 hover:text-yellow-300 list-none flex items-center transition-colors">
                    Lihat Persyaratan
                    <span className="ml-1 text-[10px] group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs text-zinc-400">
                    <div>
                      <h4 className="font-medium text-white mb-2">Kualifikasi</h4>
                      <ul className="space-y-1 list-disc list-inside">{job.requirements.map((r, i) => <li key={i}>{r}</li>)}</ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Tanggung Jawab</h4>
                      <ul className="space-y-1 list-disc list-inside">{job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}</ul>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 flex justify-center items-start" onClick={closeApplyModal}>
          <div className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl my-8" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeApplyModal} className="absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Lamaran Terkirim!</h3>
                <p className="text-xs text-zinc-400 max-w-md mx-auto mb-6">
                  Terima kasih, <strong className="text-white">{applicantName}</strong>. Lamaran untuk <strong className="text-yellow-400">{activeJob.title}</strong> telah tersimpan.
                </p>
                <button onClick={closeApplyModal} className="px-5 py-2 rounded-lg bg-yellow-400 text-black font-bold text-xs">
                  Selesai
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <span className="text-[11px] text-yellow-400 uppercase tracking-wider block">Lamaran</span>
                  <h3 className="text-lg font-bold text-white mt-0.5">{activeJob.title}</h3>
                  <p className="text-xs text-zinc-500">{activeJob.department} · {activeJob.location}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Nama *</label>
                    <input type="text" required value={applicantName} onChange={(e) => setApplicantName(e.target.value)} placeholder="Nama lengkap" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Email *</label>
                    <input type="email" required value={applicantEmail} onChange={(e) => setApplicantEmail(e.target.value)} placeholder="email@domain.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">No. Telepon *</label>
                    <input type="tel" required value={applicantPhone} onChange={(e) => setApplicantPhone(e.target.value)} placeholder="0812-xxxx-xxxx" className={inputClass} />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Pengalaman</label>
                    <select value={applicantExp} onChange={(e) => setApplicantExp(e.target.value)} className={inputClass}>
                      <option value="Fresh Graduate / < 1 Tahun">&lt; 1 Tahun</option>
                      <option value="1-3 Tahun">1-3 Tahun</option>
                      <option value="4-7 Tahun">4-7 Tahun</option>
                      <option value="> 8 Tahun">&gt; 8 Tahun</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1">LinkedIn / Portofolio</label>
                  <input type="url" value={applicantLinkedin} onChange={(e) => setApplicantLinkedin(e.target.value)} placeholder="https://..." className={inputClass} />
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Upload CV * (PDF/DOCX maks. 5MB)</label>
                  <div className="relative border border-dashed border-white/10 hover:border-yellow-400/30 rounded-xl p-5 text-center transition-colors">
                    <input
                      type="file" accept=".pdf,.doc,.docx" required
                      onChange={(e) => { if (e.target.files?.[0]) setResumeFile(e.target.files[0]); }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {resumeFile ? (
                      <div className="flex items-center justify-center gap-2 text-xs text-emerald-400">
                        <FileCheck className="w-4 h-4" />
                        <span>{resumeFile.name} ({(resumeFile.size / 1024).toFixed(0)} KB)</span>
                      </div>
                    ) : (
                      <>
                        <UploadCloud className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                        <p className="text-xs text-zinc-400">Klik atau seret file ke sini</p>
                      </>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Cover Note</label>
                  <textarea rows={3} value={coverNote} onChange={(e) => setCoverNote(e.target.value)} placeholder="Ceritakan keahlian dan motivasi Anda..." className={inputClass} />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button type="button" onClick={closeApplyModal} className="px-4 py-2 rounded-lg text-xs text-zinc-400 hover:text-white transition-colors">
                    Batal
                  </button>
                  <button type="submit" className="px-5 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs transition-colors">
                    Kirim Lamaran
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
