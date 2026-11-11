'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useData, ContactMessage, JobApplication } from '@/context/DataContext';
import { Project, NewsItem, JobVacancy } from '@/data/mockData';
import {
  Building2,
  Newspaper,
  Briefcase,
  Mail,
  UserCheck,
  Plus,
  Trash2,
  CheckCircle2,
  Clock,
  Eye,
  FileText,
  Search,
  ExternalLink,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';

export default function AdminPage() {
  const {
    projects,
    news,
    vacancies,
    messages,
    applications,
    addProject,
    deleteProject,
    addNews,
    deleteNews,
    addVacancy,
    deleteVacancy,
    updateMessageStatus,
    updateApplicationStatus,
  } = useData();

  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'news' | 'vacancies' | 'messages' | 'applications'>('overview');

  // Modal states for adding content
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [showAddNewsModal, setShowAddNewsModal] = useState(false);
  const [showAddJobModal, setShowAddJobModal] = useState(false);

  // New Project Form state
  const [newProjTitle, setNewProjTitle] = useState('');
  const [newProjCategory, setNewProjCategory] = useState<'exterior' | 'interior' | 'renovasi' | 'konsultansi'>('exterior');
  const [newProjLocation, setNewProjLocation] = useState('');
  const [newProjYear, setNewProjYear] = useState('2026');
  const [newProjStatus, setNewProjStatus] = useState<'Selesai' | 'Sedang Berjalan'>('Sedang Berjalan');
  const [newProjClient, setNewProjClient] = useState('');
  const [newProjValue, setNewProjValue] = useState('');
  const [newProjDuration, setNewProjDuration] = useState('5 Bulan');
  const [newProjDesc, setNewProjDesc] = useState('');
  const [newProjImage, setNewProjImage] = useState('');

  // New News Form state
  const [newNewsTitle, setNewNewsTitle] = useState('');
  const [newNewsCat, setNewNewsCat] = useState<'Proyek' | 'Korporasi' | 'Desain' | 'Edukasi'>('Korporasi');
  const [newNewsAuthor, setNewNewsAuthor] = useState('Biro Komunikasi ADINATA');
  const [newNewsSummary, setNewNewsSummary] = useState('');
  const [newNewsContent, setNewNewsContent] = useState('');
  const [newNewsImage, setNewNewsImage] = useState('');

  // New Job Form state
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobDept, setNewJobDept] = useState('Divisi Operasional & Konstruksi');
  const [newJobLoc, setNewJobLoc] = useState('Jakarta / Lapangan');
  const [newJobType, setNewJobType] = useState<'Full Time' | 'Contract' | 'Project-Based'>('Full Time');
  const [newJobExp, setNewJobExp] = useState('Min. 3 Tahun Pengalaman');
  const [newJobDeadline, setNewJobDeadline] = useState('31 Maret 2026');
  const [newJobDesc, setNewJobDesc] = useState('');

  // Submit Handlers
  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    const catLabels: Record<string, string> = {
      exterior: 'EKSTERIOR — DESAIN & BANGUN',
      interior: 'INTERIOR — DESAIN & BANGUN',
      renovasi: 'RENOVASI — DESAIN & BANGUN',
      konsultansi: 'Konsultansi Arsitektur',
    };

    addProject({
      title: newProjTitle,
      titleEn: newProjTitle,
      category: newProjCategory,
      categoryLabel: catLabels[newProjCategory] || 'Konstruksi',
      categoryLabelEn: catLabels[newProjCategory] || 'Construction',
      location: newProjLocation,
      year: parseInt(newProjYear, 10) || 2026,
      status: newProjStatus,
      statusEn: newProjStatus === 'Selesai' ? 'Completed' : 'In Progress',
      client: newProjClient,
      contractValue: newProjValue || 'Rp 500 Miliar',
      duration: newProjDuration,
      image: newProjImage || 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        newProjImage || 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=1200&q=80',
      ],
      description: newProjDesc,
      descriptionEn: newProjDesc,
      scope: ['Pekerjaan Struktur', 'Pekerjaan Arsitektur & MEP'],
      featured: true,
    });

    setShowAddProjectModal(false);
    setNewProjTitle('');
    setNewProjLocation('');
    setNewProjClient('');
    setNewProjValue('');
    setNewProjDesc('');
    setNewProjImage('');
  };

  const handleCreateNews = (e: React.FormEvent) => {
    e.preventDefault();
    addNews({
      title: newNewsTitle,
      titleEn: newNewsTitle,
      category: newNewsCat,
      categoryEn: newNewsCat === 'Proyek' ? 'Projects' : 'Corporate',
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      readTime: '3 Menit Baca',
      image: newNewsImage || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      summary: newNewsSummary,
      summaryEn: newNewsSummary,
      content: newNewsContent,
      contentEn: newNewsContent,
      author: newNewsAuthor,
      featured: true,
    });

    setShowAddNewsModal(false);
    setNewNewsTitle('');
    setNewNewsSummary('');
    setNewNewsContent('');
    setNewNewsImage('');
  };

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    addVacancy({
      title: newJobTitle,
      department: newJobDept,
      location: newJobLoc,
      type: newJobType,
      experience: newJobExp,
      deadline: newJobDeadline,
      description: newJobDesc,
      requirements: ['Pendidikan min. S1 terkait', 'Memiliki pengalaman relevan', 'Disiplin dan teliti'],
      responsibilities: ['Memimpin koordinasi pekerjaan teknis', 'Mengawasi kepatuhan K3L'],
    });

    setShowAddJobModal(false);
    setNewJobTitle('');
    setNewJobDesc('');
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-24 pb-20">
      {/* Admin Top Header */}
      <div className="bg-slate-900 border-b border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Portal Content Management System (CMS)</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight mt-1">
              Dashboard Admin Internal ADINATA
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-bold text-slate-200 border border-slate-700 transition-colors flex items-center space-x-1.5"
            >
              <span>Lihat Tampilan Website Publik</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Admin Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'overview'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Ringkasan Statistik
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'projects'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Kelola Proyek ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'news'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Kelola Berita ({news.length})
          </button>
          <button
            onClick={() => setActiveTab('vacancies')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'vacancies'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Kelola Karir ({vacancies.length})
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all relative ${
              activeTab === 'messages'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span>Pesan Masuk ({messages.length})</span>
            {messages.filter((m) => m.status === 'Baru').length > 0 && (
              <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] bg-rose-500 text-white font-mono">
                {messages.filter((m) => m.status === 'Baru').length} Baru
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all relative ${
              activeTab === 'applications'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span>Berkas Pelamar ({applications.length})</span>
            {applications.filter((a) => a.status === 'Ditinjau').length > 0 && (
              <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] bg-blue-500 text-white font-mono">
                {applications.filter((a) => a.status === 'Ditinjau').length} Baru
              </span>
            )}
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Total Proyek</span>
                  <Building2 className="w-4 h-4 text-amber-500" />
                </div>
                <div className="text-3xl font-black text-white">{projects.length}</div>
                <span className="text-[11px] text-amber-400 mt-1 block">Aktif di Portofolio</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Siaran Pers & Berita</span>
                  <Newspaper className="w-4 h-4 text-sky-400" />
                </div>
                <div className="text-3xl font-black text-white">{news.length}</div>
                <span className="text-[11px] text-sky-400 mt-1 block">Terbit di Media Info</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Lowongan Kerja</span>
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-black text-white">{vacancies.length}</div>
                <span className="text-[11px] text-emerald-400 mt-1 block">Posisi Dibuka</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Pesan Formulir</span>
                  <Mail className="w-4 h-4 text-rose-400" />
                </div>
                <div className="text-3xl font-black text-white">{messages.length}</div>
                <span className="text-[11px] text-rose-400 mt-1 block">Dari Hubungi Kami</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Kandidat Pelamar</span>
                  <UserCheck className="w-4 h-4 text-violet-400" />
                </div>
                <div className="text-3xl font-black text-white">{applications.length}</div>
                <span className="text-[11px] text-violet-400 mt-1 block">Masuk ke Database HR</span>
              </div>
            </div>

            {/* Quick Actions Guide */}
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                Panduan Operasional CMS Administrator
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                Modul CMS ini dirancang sesuai kebutuhan PRD F-12 untuk memungkinkan tim konten internal mengelola halaman, proyek portofolio, siaran pers berita, lowongan pekerjaan, serta memproses pesan permohonan informasi tanpa perlu intervensi developer secara teknis. Seluruh perubahan tersimpan dan langsung tercermin di halaman publik website.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-white">Daftar Proyek Portofolio</h3>
                <p className="text-xs text-slate-400">Kelola informasi proyek konstruksi yang ditampilkan kepada publik.</p>
              </div>
              <button
                onClick={() => setShowAddProjectModal(true)}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Proyek Baru</span>
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="p-4">Proyek & Lokasi</th>
                      <th className="p-4">Sektor</th>
                      <th className="p-4">Klien</th>
                      <th className="p-4">Nilai Kontrak</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {projects.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-850 transition-colors">
                        <td className="p-4">
                          <div className="font-bold text-white text-sm">{p.title}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{p.location} • Tahun {p.year}</div>
                        </td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                            {p.categoryLabel}
                          </span>
                        </td>
                        <td className="p-4 font-medium">{p.client}</td>
                        <td className="p-4 font-bold text-amber-400">{p.contractValue}</td>
                        <td className="p-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold text-white ${
                              p.status === 'Selesai' ? 'bg-emerald-600' : 'bg-blue-600'
                            }`}
                          >
                            {p.status}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => {
                              if (confirm(`Yakin ingin menghapus proyek: ${p.title}?`)) {
                                deleteProject(p.id);
                              }
                            }}
                            className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors"
                            title="Hapus Proyek"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: NEWS */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-white">Daftar Siaran Pers & Berita</h3>
                <p className="text-xs text-slate-400">Kelola artikel publikasi dan kabar korporasi.</p>
              </div>
              <button
                onClick={() => setShowAddNewsModal(true)}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Tulis Berita Baru</span>
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="p-4">Judul Berita</th>
                      <th className="p-4">Kategori</th>
                      <th className="p-4">Tanggal Terbit</th>
                      <th className="p-4">Penulis</th>
                      <th className="p-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {news.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-850 transition-colors">
                        <td className="p-4">
                          <div className="font-bold text-white text-sm">{item.title}</div>
                          <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{item.summary}</div>
                        </td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400">
                            {item.category}
                          </span>
                        </td>
                        <td className="p-4">{item.date}</td>
                        <td className="p-4 font-medium">{item.author}</td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => {
                              if (confirm(`Yakin ingin menghapus berita: ${item.title}?`)) {
                                deleteNews(item.id);
                              }
                            }}
                            className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors"
                            title="Hapus Berita"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: VACANCIES */}
        {activeTab === 'vacancies' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-white">Daftar Lowongan Kerja</h3>
                <p className="text-xs text-slate-400">Buka atau tutup posisi karir yang sedang dicari perusahaan.</p>
              </div>
              <button
                onClick={() => setShowAddJobModal(true)}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Buka Lowongan Baru</span>
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="p-4">Posisi</th>
                      <th className="p-4">Departemen</th>
                      <th className="p-4">Lokasi & Tipe</th>
                      <th className="p-4">Batas Akhir</th>
                      <th className="p-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {vacancies.map((v) => (
                      <tr key={v.id} className="hover:bg-slate-850 transition-colors">
                        <td className="p-4">
                          <div className="font-bold text-white text-sm">{v.title}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{v.experience}</div>
                        </td>
                        <td className="p-4 font-medium">{v.department}</td>
                        <td className="p-4">
                          {v.location} • <span className="text-amber-400">{v.type}</span>
                        </td>
                        <td className="p-4 text-slate-300">{v.deadline}</td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => {
                              if (confirm(`Yakin ingin menghapus lowongan: ${v.title}?`)) {
                                deleteVacancy(v.id);
                              }
                            }}
                            className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors"
                            title="Hapus Lowongan"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: MESSAGES */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Kotak Pesan Masuk (Contact Inquiries)</h3>
              <p className="text-xs text-slate-400">Pesan dari calon klien, rekanan vendor, dan pemohon informasi.</p>
            </div>

            {messages.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
                <Mail className="w-12 h-12 mx-auto text-slate-600 mb-3" />
                <p className="text-sm font-bold text-slate-300">Belum ada pesan yang masuk.</p>
                <p className="text-xs mt-1">
                  Pesan yang dikirimkan melalui formulir "Hubungi Kami" akan otomatis tercatat di sini.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-6 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-white text-sm">{m.name}</span>
                          {m.company && (
                            <span className="text-[11px] text-slate-400 font-normal">
                              ({m.company})
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {m.email} • {m.phone} • Ditujukan ke: <strong className="text-amber-400">{m.division}</strong>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <span className="text-[11px] text-slate-400">{m.createdAt}</span>
                        <select
                          value={m.status}
                          onChange={(e) => updateMessageStatus(m.id, e.target.value as any)}
                          className={`px-3 py-1 rounded-xl text-xs font-bold border focus:outline-none ${
                            m.status === 'Baru'
                              ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                              : m.status === 'Diproses'
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                              : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          }`}
                        >
                          <option value="Baru">Baru</option>
                          <option value="Diproses">Diproses</option>
                          <option value="Selesai">Selesai</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-200 mb-1">Perihal: {m.subject}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line bg-slate-950 p-4 rounded-xl border border-slate-800/60">
                        {m.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 6: APPLICATIONS */}
        {activeTab === 'applications' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Data Berkas Pelamar Karir</h3>
              <p className="text-xs text-slate-400">Daftar kandidat yang melamar lowongan di website ADINATA.</p>
            </div>

            {applications.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center text-slate-400">
                <UserCheck className="w-12 h-12 mx-auto text-slate-600 mb-3" />
                <p className="text-sm font-bold text-slate-300">Belum ada pelamar pekerjaan yang masuk.</p>
                <p className="text-xs mt-1">
                  Kandidat yang mengisi formulir di halaman "Karir" akan langsung tersimpan di database ini.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {applications.map((app) => (
                  <div
                    key={app.id}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-6 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-white text-sm">{app.fullName}</span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/30">
                            {app.jobTitle}
                          </span>
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {app.email} • {app.phone} • Pengalaman: {app.experienceYears}
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <span className="text-[11px] text-slate-400">{app.appliedAt}</span>
                        <select
                          value={app.status}
                          onChange={(e) => updateApplicationStatus(app.id, e.target.value as any)}
                          className={`px-3 py-1 rounded-xl text-xs font-bold border focus:outline-none ${
                            app.status === 'Ditinjau'
                              ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                              : app.status === 'Wawancara'
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                              : app.status === 'Diterima'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                          }`}
                        >
                          <option value="Ditinjau">Ditinjau</option>
                          <option value="Wawancara">Wawancara</option>
                          <option value="Diterima">Diterima</option>
                          <option value="Ditolak">Ditolak</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center space-x-3">
                        <span className="text-slate-400">Berkas CV:</span>
                        <span className="font-mono text-amber-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                          {app.resumeFileName}
                        </span>
                        {app.linkedinUrl && (
                          <a
                            href={app.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sky-400 hover:underline flex items-center"
                          >
                            <span>Lihat LinkedIn</span>
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        )}
                      </div>

                      {app.coverLetter && (
                        <p className="text-[11px] text-slate-400 italic">
                          "{app.coverLetter}"
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* MODAL 1: ADD PROJECT */}
      {showAddProjectModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md p-4 sm:p-6 flex justify-center items-center">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 my-8">
            <h3 className="text-xl font-bold text-white mb-4">Tambah Proyek Baru ke Portofolio</h3>
            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Nama Proyek *</label>
                <input
                  type="text"
                  required
                  value={newProjTitle}
                  onChange={(e) => setNewProjTitle(e.target.value)}
                  placeholder="Contoh: Menara Landmark Nusantara"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Sektor Konstruksi</label>
                  <select
                    value={newProjCategory}
                    onChange={(e) => setNewProjCategory(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="exterior">EKSTERIOR — DESAIN & BANGUN</option>
                    <option value="interior">INTERIOR — DESAIN & BANGUN</option>
                    <option value="renovasi">RENOVASI — DESAIN & BANGUN</option>
                    <option value="konsultansi">Konsultansi Arsitektur</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Status Proyek</label>
                  <select
                    value={newProjStatus}
                    onChange={(e) => setNewProjStatus(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Sedang Berjalan">Sedang Berjalan</option>
                    <option value="Selesai">Selesai</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Lokasi Proyek</label>
                  <input
                    type="text"
                    required
                    value={newProjLocation}
                    onChange={(e) => setNewProjLocation(e.target.value)}
                    placeholder="Jakarta / Balikpapan"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Klien / Owner</label>
                  <input
                    type="text"
                    required
                    value={newProjClient}
                    onChange={(e) => setNewProjClient(e.target.value)}
                    placeholder="Kementerian PUPR / Swasta"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Nilai Kontrak</label>
                  <input
                    type="text"
                    required
                    value={newProjValue}
                    onChange={(e) => setNewProjValue(e.target.value)}
                    placeholder="Rp 750 Miliar"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">URL Foto Proyek (Opsional)</label>
                <input
                  type="url"
                  value={newProjImage}
                  onChange={(e) => setNewProjImage(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Deskripsi Ringkas Proyek</label>
                <textarea
                  rows={3}
                  required
                  value={newProjDesc}
                  onChange={(e) => setNewProjDesc(e.target.value)}
                  placeholder="Jelaskan spesifikasi teknis dan keunggulan pengerjaan proyek ini..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddProjectModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                >
                  Simpan & Terbitkan Proyek
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: ADD NEWS */}
      {showAddNewsModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md p-4 sm:p-6 flex justify-center items-center">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 my-8">
            <h3 className="text-xl font-bold text-white mb-4">Tulis Siaran Pers & Berita Baru</h3>
            <form onSubmit={handleCreateNews} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Judul Berita *</label>
                <input
                  type="text"
                  required
                  value={newNewsTitle}
                  onChange={(e) => setNewNewsTitle(e.target.value)}
                  placeholder="Contoh: ADINATA Resmikan Fasilitas Precast Hijau..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Kategori Berita</label>
                  <select
                    value={newNewsCat}
                    onChange={(e) => setNewNewsCat(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Korporasi">Korporasi</option>
                    <option value="Proyek">Proyek</option>
                    <option value="Desain">Desain</option>
                    <option value="Edukasi">Edukasi</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Penulis / Sumber</label>
                  <input
                    type="text"
                    required
                    value={newNewsAuthor}
                    onChange={(e) => setNewNewsAuthor(e.target.value)}
                    placeholder="Tim Humas & Komunikasi"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Ringkasan Berita (Lead Paragraph)</label>
                <textarea
                  rows={2}
                  required
                  value={newNewsSummary}
                  onChange={(e) => setNewNewsSummary(e.target.value)}
                  placeholder="Ringkasan 1-2 kalimat untuk kartu depan..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Isi Lengkap Artikel</label>
                <textarea
                  rows={5}
                  required
                  value={newNewsContent}
                  onChange={(e) => setNewNewsContent(e.target.value)}
                  placeholder="Tuliskan isi berita secara mendalam..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddNewsModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                >
                  Terbitkan Berita
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: ADD JOB */}
      {showAddJobModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md p-4 sm:p-6 flex justify-center items-center">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 my-8">
            <h3 className="text-xl font-bold text-white mb-4">Buka Lowongan Karir Baru</h3>
            <form onSubmit={handleCreateJob} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Nama Posisi *</label>
                <input
                  type="text"
                  required
                  value={newJobTitle}
                  onChange={(e) => setNewJobTitle(e.target.value)}
                  placeholder="Contoh: Geotechnical Engineer"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Departemen</label>
                  <input
                    type="text"
                    required
                    value={newJobDept}
                    onChange={(e) => setNewJobDept(e.target.value)}
                    placeholder="Divisi Engineering"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Lokasi Penempatan</label>
                  <input
                    type="text"
                    required
                    value={newJobLoc}
                    onChange={(e) => setNewJobLoc(e.target.value)}
                    placeholder="Jakarta & Proyek IKN"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Uraian Tugas & Deskripsi Singkat</label>
                <textarea
                  rows={3}
                  required
                  value={newJobDesc}
                  onChange={(e) => setNewJobDesc(e.target.value)}
                  placeholder="Tanggung jawab utama posisi ini..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddJobModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                >
                  Buka Lowongan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
