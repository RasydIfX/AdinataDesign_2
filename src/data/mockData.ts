export interface Project {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  category: 'exterior' | 'interior' | 'renovasi' | 'konsultansi';
  categoryLabel: string;
  categoryLabelEn: string;
  location: string;
  year: number;
  status: 'Selesai' | 'Sedang Berjalan';
  statusEn: 'Completed' | 'In Progress';
  client: string;
  contractValue: string;
  duration: string;
  buildingArea?: string;
  landArea?: string;
  materials?: string[];
  drawingCode?: string;
  image: string;
  gallery: string[];
  description: string;
  descriptionEn: string;
  scope: string[];
  featured?: boolean;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  category: 'Proyek' | 'Korporasi' | 'Desain' | 'Edukasi';
  categoryEn: 'Projects' | 'Corporate' | 'Design' | 'Education';
  date: string;
  readTime: string;
  image: string;
  summary: string;
  summaryEn: string;
  content: string;
  contentEn: string;
  author: string;
  featured?: boolean;
}

export interface JobVacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full Time' | 'Contract' | 'Project-Based';
  experience: string;
  deadline: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  roleEn: string;
  bio: string;
  photo: string;
  group: 'komisaris' | 'direksi' | 'manajemen' | 'teknis';
}


export interface ClientTestimonial {
  id: string;
  name: string;
  role: string;
  project: string;
  location: string;
  rating: number;
  comment: string;
}

export interface ServiceDivision {
  id: string;
  code: string;
  title: string;
  titleEn: string;
  shortDesc: string;
  shortDescEn: string;
  details: string[];
}

export const COMPANY_INFO = {
  name: 'CV. ADINATA DESIGN',
  brandName: 'ADINATA DESIGN AND BUILD',
  tagline: 'Architecture, Interior, Design and Consultancy',
  legalName: 'CV ADINATA DESIGN',
  deedNumber: 'Akta Pendirian Nomor 112 tanggal 22 Juli 2026',
  ahuNumber: 'SK AHU Nomor AHU-0049498-AH.01.14 Tahun 2026',
  nib: '2507260006863',
  npwp: '10.000.000.1-045.633',
  scale: 'PMDN Skala Usaha Mikro',
  address: 'Ngentak, Bangunjiwo, Kecamatan Kasihan, Kabupaten Bantul, DIY, 55184',
  officeAddress: 'Perumahan Pesona Madina No. D15, Bangunjiwo, Kasihan, Bantul, DIY',
  operatingHours: 'Senin - Sabtu: 08.00 - 17.00 WIB (Minggu & Hari Libur Nasional Tutup)',
  stats: {
    completedProjects: '50+',
    completedProjectsLabel: 'Proyek Selesai',
    completedProjectsSub: 'Yogyakarta, Lampung & Bali',
    serviceDivisions: '4 Divisi',
    serviceDivisionsSub: 'Layanan Terpadu',
    workflowSteps: '11 Alur Kerja',
    workflowStepsSub: 'Standar Operasional'
  },
  phone1: '+62 857-8847-7607',
  phone1Name: 'Adi Akbar Tama',
  phone2: '+62 821-7367-055',
  phone2Name: 'WhatsApp Business',
  email: 'cv.adinatadesain@gmail.com',
  instagram: '@adinata.design',
  tiktok: '@adinata.design',
  kbli: [
    { code: '71101', name: 'Aktivitas Arsitektural' },
    { code: '74191', name: 'Aktivitas Desain Interior' },
    { code: '71102', name: 'Aktivitas Perancangan dan Konsultansi Teknis' },
    { code: '46100', name: 'Perdagangan Besar atas Dasar Balas Jasa/Fee atau Kontrak' }
  ],
  philosophy: {
    title: 'Filosofi Nama ADINATA',
    desc: 'Nama "ADINATA" berakar pada dua prinsip kerja: "Adi" mewakili keunggulan teknis, ketepatan kalkulasi, dan disiplin gambar kerja; "Nata" adalah ketrampilan menata ruang, struktur, dan material menjadi kesatuan tektonik yang kokoh. Bagi kami, arsitektur bukan sekadar gambar di atas layar, melainkan realitas fisik yang harus berdiri presisi di atas tanah dan dapat dieksekusi tanpa pembengkakan biaya.'
  },
  vision: 'Membangun praktik arsitektur dan rancang bangun yang berakar pada ketepatan gambar kerja teknis (DED), transparansi kalkulasi volume (BoQ), dan kejujuran material lokal tropis.',
  missions: [
    'Menyusun dokumen gambar kerja teknis (For Construction) terpadu hingga detail skala 1:10 untuk mencegah kesalahan tukang.',
    'Mengunci akurasi anggaran melalui Rencana Anggaran Biaya (RAB/BoQ) berbasis analisa harga satuan dan volume nyata.',
    'Merespons iklim mikro tropis Indonesia melalui optimasi orientasi matahari, bukaan silang, dan peneduh alami.',
    'Melakukan pengawasan berkala langsung di tapak proyek untuk mengawal mutu pembesian, campuran beton, dan sambungan struktur.'
  ],
  coreValues: [
    { name: 'Presisi Teknis', desc: 'Setiap garis pada gambar kerja mengikat akurasi pengukuran di lapangan.' },
    { name: 'Kejujuran Material', desc: 'Mengekspos karakter alami bata, beton, kayu, dan baja tanpa ornamen artifisial.' },
    { name: 'Disiplin Anggaran', desc: 'Menyajikan BoQ transparan per item pekerjaan demi melindungi investasi pemilik proyek.' },
    { name: 'Adaptasi Iklim Tropis', desc: 'Menghadirkan kantilever lebar, bukaan ventilasi silang, dan perlindungan dari tempias air hujan.' },
    { name: 'Supervisi Nyata', desc: 'Kehadiran rutin di lokasi proyek untuk verifikasi checklist mutu kerja sebelum serah terima.' }
  ]
};

export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: 'div-1',
    code: 'design-dev',
    title: 'Divisi Design Development',
    titleEn: 'Design Development Division',
    shortDesc: 'Mengembangkan konsep menjadi desain yang matang melalui evaluasi teknis, koordinasi multidisiplin, optimasi material, efisiensi biaya, dan kesiapan konstruksi.',
    shortDescEn: 'Developing conceptual designs into build-ready architecture through technical evaluations, multidisciplinary synergy, and cost efficiency.',
    details: [
      'Konseptualisasi arsitektur 3D photorealistic',
      'Penyusunan gambar kerja teknis (Working Drawing / DED)',
      'Optimasi pemilihan material lokal & ramah lingkungan',
      'Simulasi pencahayaan alami & penghawaan tropis'
    ]
  },
  {
    id: 'div-2',
    code: 'project-sup',
    title: 'Divisi Project Supervision',
    titleEn: 'Project Supervision Division',
    shortDesc: 'Melakukan pengawasan berkala terhadap mutu pekerjaan, kesesuaian dengan gambar kerja, spesifikasi material, jadwal pelaksanaan, serta penyusunan laporan progres proyek.',
    shortDescEn: 'Continuous quality control, on-site blueprint compliance, schedule milestones, and transparent progress auditing.',
    details: [
      'Supervisi lapangan berkala (Quality Assurance)',
      'Pengawasan kesesuaian material & metode kerja',
      'Penyusunan progress report berkala kepada owner',
      'Pencegahan deviasi biaya dan keterlambatan jadwal'
    ]
  },
  {
    id: 'div-3',
    code: 'construction-consulting',
    title: 'Divisi Construction Consulting',
    titleEn: 'Construction Consulting Division',
    shortDesc: 'Memberikan pendampingan teknis, kajian desain, review dokumen, value engineering, estimasi biaya, dan konsultasi selama proses pembangunan.',
    shortDescEn: 'Technical assistance, design review, value engineering, precision budget estimation, and tender consultancy.',
    details: [
      'Penyusunan Rencana Anggaran Biaya (RAB) terperinci',
      'Value engineering untuk optimasi efisiensi biaya',
      'Pendampingan seleksi kontraktor / tender pelaksana',
      'Kajian teknis struktur & instalasi mekanikal-elektrikal'
    ]
  },
  {
    id: 'div-4',
    code: 'renovation-modeling',
    title: 'Divisi Renovation and Modeling',
    titleEn: 'Renovation and Modeling Division',
    shortDesc: 'Menangani renovasi rumah, kantor, ruko, cafe, hotel, dan bangunan komersial dengan mempertahankan bagian bangunan yang masih layak sekaligus meningkatkan fungsi dan kualitas estetika.',
    shortDescEn: 'Expert renovation for houses, offices, retail spaces, cafes, and hotels optimizing existing structures into modern functional aesthetics.',
    details: [
      'Renovasi fasad eksterior & perkuatan struktur',
      'Remodeling tata ruang interior (Japandi, Modern, Klasik)',
      'Transformasi fungsi ruang hunian maupun komersial',
      'Pengerjaan turnkey (Desain sekaligus Pelaksanaan Bangun)'
    ]
  }
];

export const WORKFLOW_STEPS = [
  { step: '01', title: 'Konsultasi Awal', desc: 'Identifikasi kebutuhan ruang, selera desain, budget, dan karakter pengguna.' },
  { step: '02', title: 'Survey & Analisis Site', desc: 'Pengukuran lahan fisik, orientasi matahari, akses jalan, dan kondisi lingkungan.' },
  { step: '03', title: 'Penyusunan Proposal', desc: 'Penawaran ruang lingkup pekerjaan, jadwal pelaksanaan, dan skema biaya jasa.' },
  { step: '04', title: 'Konsep Desain', desc: 'Zoning ruang, denah layout awal, moodboard, dan eksplorasi bentuk gubahan massa.' },
  { step: '05', title: 'Presentasi & Revisi', desc: 'Pemaparan desain kepada klien dan penyesuaian detail sesuai masukan.' },
  { step: '06', title: 'Design Development', desc: 'Pengembangan detail arsitektur, pemilihan material spesifik, dan integrasi struktur.' },
  { step: '07', title: 'Gambar Kerja Teknis', desc: 'Penyusunan detail drawing (For Construction) lengkap arsitektur, struktur, dan MEP.' },
  { step: '08', title: 'Estimasi Biaya (RAB)', desc: 'Perhitungan volume material (Bill of Quantity) dan harga satuan pelaksanaan fisik.' },
  { step: '09', title: 'Pendampingan Tender', desc: 'Membantu owner dalam klarifikasi teknis kepada calon pelaksana konstruksi.' },
  { step: '10', title: 'Supervisi Berkala', desc: 'Kunjungan berkala ke proyek memastikan pengerjaan sesuai standar gambar kerja.' },
  { step: '11', title: 'Serah Terima', desc: 'Pemeriksaan akhir (checklist) dan serah terima hasil karya siap huni.' }
];

export const DESIGN_STAGES = [
  { stage: 'Tahap 1', name: 'Programming & Brief', desc: 'Pendalaman tujuan proyek & kebutuhan spesifik pemilik.' },
  { stage: 'Tahap 2', name: 'Site Analysis', desc: 'Kajian potensi tapak, iklim mikro, dan regulasi tata ruang (GSB/KDB).' },
  { stage: 'Tahap 3', name: 'Concept Design', desc: 'Gagasan utama, skematik sirkulasi, dan ekspresi bentuk bangunan.' },
  { stage: 'Tahap 4', name: 'Schematic Design', desc: 'Denah proporsional, tampak potongan, dan rencana denah fungsi.' },
  { stage: 'Tahap 5', name: 'Design Development', desc: 'Penyempurnaan material, detail sambungan, dan kajian teknis.' },
  { stage: 'Tahap 6', name: 'Working Drawing', desc: 'Gambar kerja presisi berbasis CAD untuk pedoman tukang di lapangan.' },
  { stage: 'Tahap 7', name: '3D Visualization', desc: 'Rendering foto-realistik interior dan eksterior visual kualitas tinggi.' },
  { stage: 'Tahap 8', name: 'Construction Administration', desc: 'Pengawasan administrasi kontrak dan konsultasi teknis selama konstruksi.' }
];

export const BUSINESS_LINES = SERVICE_DIVISIONS;

export const DOCUMENTS = [
  {
    id: 'doc-1',
    title: 'Company Profile CV. ADINATA DESIGN AND BUILD (PDF)',
    titleEn: 'Official Company Profile CV. ADINATA DESIGN AND BUILD (PDF)',
    category: 'Company Profile',
    year: 2026,
    fileSize: '12.4 MB PDF',
    downloadUrl: '#'
  },
  {
    id: 'doc-2',
    title: 'Brosur Layanan Rancang Bangun (Design and Build) 2026',
    titleEn: 'Design and Build Services Brochure 2026',
    category: 'Brosur Layanan',
    year: 2026,
    fileSize: '4.2 MB PDF',
    downloadUrl: '#'
  },
  {
    id: 'doc-3',
    title: 'Standar Dokumen Alur Kerja & 8 Tahapan Desain Arsitektur',
    titleEn: 'Workflow Standard & 8 Architecture Design Stages',
    category: 'SOP & Alur Kerja',
    year: 2026,
    fileSize: '2.8 MB PDF',
    downloadUrl: '#'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'AR. Tri Astuti Ratnaningsih, S.Ars., M.Ars., IAI',
    role: 'Komisaris',
    roleEn: 'Commissioner',
    bio: 'Bertanggung jawab penuh melakukan pengawasan umum maupun khusus atas kebijakan direksi serta jalannya operasional perusahaan agar tetap selaras dengan visi, anggaran dasar, dan regulasi hukum yang berlaku.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    group: 'komisaris'
  },
  {
    name: 'Adi Akbar Tama, S.Ars., IAI',
    role: 'Direktur Utama',
    roleEn: 'Managing Director / Founder',
    bio: 'Sebagai pendiri sekaligus Direktur Utama, Adi Akbar Tama bertanggung jawab dalam penyusunan strategi perusahaan, pengembangan bisnis, pengawasan mutu desain, hubungan dengan klien, serta pengambilan keputusan strategis. Berkomitmen membangun perusahaan yang profesional, inovatif, dan berorientasi pada kepuasan pelayanan.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    group: 'direksi'
  },
  {
    name: 'Muhamad Nur Fauzi, S.E / S.M',
    role: 'Direktur Operasional (COO)',
    roleEn: 'Chief Operating Officer',
    bio: 'Bertanggung jawab penuh untuk mengintegrasikan proses kreatif (desain/arsitektur) dan proses teknis (konstruksi/lapangan) agar proyek selesai tepat waktu, sesuai anggaran, dan memenuhi standar mutu tertinggi.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    group: 'direksi'
  },
  {
    name: 'Muchammad Abdul Rochman',
    role: 'Project Manager',
    roleEn: 'Project Manager',
    bio: 'Mengelola siklus proyek dari tahap perancangan hingga serah terima, pengendalian anggaran (RAB), jadwal kerja, koordinasi vendor, dan pengawasan kualitas di lapangan.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    group: 'manajemen'
  },
  {
    name: 'Dio Alif Utama, S.Ars.',
    role: 'Project Manager',
    roleEn: 'Project Manager',
    bio: 'Arsitek sekaligus Project Manager yang berfokus pada penyelarasan visi desain artistik dengan kepraktisan eksekusi lapangan, serta penyelesaian kendala teknis dengan cepat selama masa pembangunan.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    group: 'manajemen'
  },
  {
    name: 'Tri Yono Kusnanto',
    role: 'Site Manager',
    roleEn: 'Site Manager',
    bio: 'Memimpin dan mengawasi operasional konstruksi di lapangan agar sesuai dengan gambar kerja, spesifikasi material, penerapan K3, serta pelaporan progres harian secara teliti.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    group: 'teknis'
  },
  {
    name: 'Muhamad Majid, S.T.',
    role: 'Structural Engineer',
    roleEn: 'Structural Engineer',
    bio: 'Bertanggung jawab merancang dan menganalisis sistem struktur bangunan agar aman, kokoh, tahan gempa (SNI), serta efisien biaya melalui koordinasi teknis bersama arsitek dan MEP.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    group: 'teknis'
  },
  {
    name: 'Malika Putra Pratama, S.Ars.',
    role: 'Architect',
    roleEn: 'Architect',
    bio: 'Menerjemahkan kebutuhan klien menjadi konsep rancangan yang estetis, fungsional, dan efisien biaya, pembuatan gambar For Construction terintegrasi, serta pengawasan berkala di proyek.',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    group: 'teknis'
  },
  {
    name: 'Sidiq Hari Sutanto',
    role: 'Drafter',
    roleEn: 'Technical Drafter',
    bio: 'Menerjemahkan konsep arsitektur menjadi gambar kerja teknis presisi tinggi, shop drawing, as-built drawing, dan gambar perizinan PBG/IMB menggunakan CAD mutakhir.',
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    group: 'teknis'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'prj-1',
    buildingArea: '265 m²',
    landArea: '320 m²',
    materials: ['Baja Profil WF 150', 'Bata Ekspos Terakota', 'Plafon Conwood Tropis', 'Kaca Panasap 8mm'],
    drawingCode: 'DED-SKR-2026/01',
    slug: 'modern-gable-canopy-residence-sukarame',
    title: 'Modern Gable Canopy Residence',
    titleEn: 'Modern Gable Canopy Residence',
    category: 'exterior',
    categoryLabel: 'EKSTERIOR — DESAIN & BANGUN',
    categoryLabelEn: 'Exterior Design & Build',
    location: 'Sukarame, Bandar Lampung',
    year: 2026,
    status: 'Selesai',
    statusEn: 'Completed',
    client: 'Private Residence',
    contractValue: 'Desain & Bangun',
    duration: '6 Bulan',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Pembangunan hunian bernuansa modern minimalis tropis dengan kanopi carport baja profil kokoh, fasad segitiga bersih berpadu bata ekspos, dan pencahayaan hangat.',
    descriptionEn: 'Construction of a modern tropical minimalist house with a sleek steel carport canopy, clean gable facade accented with exposed brickwork, and warm ambient lighting.',
    scope: ['Perancangan Fasad Eksterior', 'Struktur Beton & Rangka Atap', 'Pekerjaan Carport Baja & Polycarbonate', 'Instalasi MEP & Finishing Cat'],
    featured: true
  },
  {
    id: 'prj-2',
    buildingArea: '145 m²',
    landArea: '180 m²',
    materials: ['Roster Tanah Liat Terakota', 'Pagar Plat Perforated 2mm', 'Granit Tile Slab 60x120', 'Cat Weathercoat Tropis'],
    drawingCode: 'DED-SLM-2026/02',
    slug: 'contemporary-tropical-house-sleman',
    title: 'Contemporary Tropical Compact House 01',
    titleEn: 'Contemporary Tropical Compact House 01',
    category: 'exterior',
    categoryLabel: 'EKSTERIOR — DESAIN & BANGUN',
    categoryLabelEn: 'Exterior Design & Build',
    location: 'Sleman, D.I. Yogyakarta',
    year: 2026,
    status: 'Selesai',
    statusEn: 'Completed',
    client: 'Keluarga Muda Yogyakarta',
    contractValue: 'Desain & Build',
    duration: '5 Bulan',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Karya rancang bangun hunian satu lantai berkarakter tegas dengan aksen terracotta modern, roster sirkulasi udara, pagar minimalis perforated, dan lansekap tanaman tropis.',
    descriptionEn: 'Single-story modern residence featuring bold terracotta architectural accents, functional air rosters, perforated modern fencing, and lush tropical landscaping.',
    scope: ['Perencanaan Konsep Arsitektur', 'Struktur Utama & Dinding Roster', 'Pagar Besi & Pintu Gerbang Sliding', 'Taman Tropis Kering Depan Rumah'],
    featured: true
  },
  {
    id: 'prj-3',
    buildingArea: '480 m²',
    landArea: '550 m²',
    materials: ['Atap Mansard Bitumen Bergaransi', 'Kusen Aluminium Arch Powder Coat', 'Balkon Besi Tempa Wrought Iron', 'Slab Marmer Travertine'],
    drawingCode: 'DED-KTB-2026/03',
    slug: 'classic-luxury-mansion-kotabumi',
    title: 'Classic Modern Luxury 2-Storey Residence',
    titleEn: 'Classic Modern Luxury 2-Storey Residence',
    category: 'exterior',
    categoryLabel: 'EKSTERIOR — DESAIN & BANGUN',
    categoryLabelEn: 'Exterior Design & Build',
    location: 'Kotabumi, Bandar Lampung',
    year: 2026,
    status: 'Selesai',
    statusEn: 'Completed',
    client: 'Owner Kediaman Kotabumi',
    contractValue: 'Desain & Build',
    duration: '9 Bulan',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Mahakarya rumah megah dua lantai bergaya Modern Classic dengan atap mansard elegan, jendela lengkung (arch window) berbingkai hitam, balkon besi tempa artistik, dan garasi tertutup mewah.',
    descriptionEn: 'Prestigious two-story luxury residence blending European Modern Classic elegance with mansard roof, striking arched windows, wrought-iron balcony railings, and integrated private garage.',
    scope: ['Detail Engineering Design (DED)', 'Struktur Beton 2 Lantai Tahan Gempa', 'Balkon Wrought Iron Ornamen', 'Kusen Aluminium Powder Coating & Arched Glass'],
    featured: true
  },
  {
    id: 'prj-4',
    buildingArea: '95 m² / Unit',
    landArea: 'Kawasan Klaster 1.200 m²',
    materials: ['Bata Merah Expose Bakar Halus', 'Kuda-Kuda Baja Ringan Zincalume', 'Genteng Flat Beton Monier', 'Paving Grassblock Porous'],
    drawingCode: 'DED-GDN-2026/04',
    slug: 'scandinavian-row-houses-godean',
    title: 'Contemporary Scandinavian Row Houses',
    titleEn: 'Contemporary Scandinavian Row Houses',
    category: 'exterior',
    categoryLabel: 'EKSTERIOR — DESAIN & BANGUN',
    categoryLabelEn: 'Exterior Design & Build',
    location: 'Godean, D.I. Yogyakarta',
    year: 2026,
    status: 'Selesai',
    statusEn: 'Completed',
    client: 'Pengembangan Klaster Hunian',
    contractValue: 'Desain & Build Klaster',
    duration: '7 Bulan',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Desain dan pembangunan deretan unit rumah bertingkat rendah dengan atap pelana tinggi bernuansa Skandinavia, fasad bata terracotta vertikal, dan akses sirkulasi privat asri.',
    descriptionEn: 'Design and construction of Scandinavian-inspired row houses with steep pitched roofs, terracotta brick focal points, and welcoming private driveways.',
    scope: ['Site Planning & Master Layout', 'Pembangunan Unit Rumah', 'Drainase Resapan Kawasan', 'Finishing Fasad Ramah Perawatan'],
    featured: false
  },
  {
    id: 'prj-5',
    buildingArea: '310 m²',
    landArea: '380 m²',
    materials: ['Secondary Skin Kisi Kayu Ulin', 'Kolom Struktur Beton Bertulang K-300', 'Lantai Parquet Jati Solid', 'Besi Hollow Galvanis 4x8'],
    drawingCode: 'DED-GMP-2026/05',
    slug: 'tropical-louvered-villa-gamping',
    title: 'Contemporary 2-Storey House with Wooden Louvers',
    titleEn: 'Contemporary 2-Storey House with Wooden Louvers',
    category: 'exterior',
    categoryLabel: 'EKSTERIOR — DESAIN & BANGUN',
    categoryLabelEn: 'Exterior Design & Build',
    location: 'Gamping, D.I. Yogyakarta',
    year: 2026,
    status: 'Selesai',
    statusEn: 'Completed',
    client: 'Private Residence Gamping',
    contractValue: 'Desain & Build',
    duration: '8 Bulan',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Hunian dua lantai dengan konsep arsitektur tropis modern. Menampilkan kisi-kisi kayu vertikal sebagai secondary skin penyaring sinar matahari barat, kanopi carport terintegrasi, dan taman hijau rimbun.',
    descriptionEn: 'Modern tropical two-story residence with vertical timber louvers acting as passive sun shading secondary skin, integrated warm-toned carport, and lush native greenery.',
    scope: ['Perancangan Secondary Skin Louver', 'Struktur 2 Lantai & Void Terbuka', 'Pekerjaan Landscape & Taman Vertikal', 'Sistem Pencahayaan Arsitektural'],
    featured: true
  },
  {
    id: 'prj-6',
    buildingArea: '560 m²',
    landArea: '750 m²',
    materials: ['Balok Kantilever Baja WF 300', 'Raw Concrete Expose Semen Curah', 'Curtain Wall Kaca Tempered 12mm', 'Batu Candi Hitam Bali'],
    drawingCode: 'DED-TBN-2026/06',
    slug: 'geometric-modern-villa-tabanan-bali',
    title: 'Modern Geometric Villa & Gate Architecture',
    titleEn: 'Modern Geometric Villa & Gate Architecture',
    category: 'exterior',
    categoryLabel: 'EKSTERIOR — DESAIN & BANGUN',
    categoryLabelEn: 'Exterior Design & Build',
    location: 'Tabanan, Bali',
    year: 2026,
    status: 'Selesai',
    statusEn: 'Completed',
    client: 'Villa Owner Tabanan',
    contractValue: 'Desain & Build',
    duration: '10 Bulan',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Arsitektur villa ultra-modern dengan balok kantilever diagonal asimetris bernuansa concrete expose, dinding kaca lebar frameless, pagar vertikal elegan, dan sistem lighting twilight yang dramatis.',
    descriptionEn: 'Striking contemporary villa architecture showcasing dramatic angular cantilevered beams, raw concrete finishes, frameless floor-to-ceiling glass, and breathtaking twilight lighting.',
    scope: ['Perancangan Struktur Kantilever Baja-Beton', 'Kaca Tempered & Curtain Wall', 'Pagar Besi Artistik & Autogate', 'Desain Pencahayaan Siang & Malam'],
    featured: true
  },
  {
    id: 'prj-7',
    buildingArea: '175 m² (Luas Interior)',
    landArea: 'Tapak 220 m²',
    materials: ['Skylight Kaca Laminated 10mm', 'Panel Dinding Kisi Akustik White Oak', 'Meja Solid Trembesi 8cm', 'Lantai Homogeneous Tile Matte'],
    drawingCode: 'INT-SLM-2026/07',
    slug: 'japandi-inner-courtyard-interior-sleman',
    title: 'Inner Courtyard & Cozy Interior Residence',
    titleEn: 'Inner Courtyard & Cozy Interior Residence',
    category: 'interior',
    categoryLabel: 'INTERIOR — DESAIN & BANGUN',
    categoryLabelEn: 'Interior Design & Build',
    location: 'Sleman, D.I. Yogyakarta',
    year: 2026,
    status: 'Selesai',
    statusEn: 'Completed',
    client: 'Rumah Tinggal Sleman',
    contractValue: 'Interior & Build',
    duration: '4 Bulan',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Penataan interior terpadu yang memadukan ruang makan terbuka menghadap inner courtyard beratap kaca, kamar tidur berpanel kayu vertikal hangat, area laundry skylight, dan ruang keluarga cozy berpanel marmer.',
    descriptionEn: 'Integrated residential interior featuring an open dining space overlooking a lush indoor courtyard with glass skylight, warm timber-slatted bedroom, and sleek marble-accented living lounge.',
    scope: ['Desain Interior & Custom Cabinetry', 'Inner Courtyard & Kanopi Kaca Tempered', 'Panel Dinding Kisi Kayu & Marmer', 'Furnitur Ergonomis & Lighting Ambient'],
    featured: true
  },
  {
    id: 'prj-8',
    buildingArea: '230 m² (Luas Interior)',
    landArea: 'Void Tinggi 5.8 M',
    materials: ['Slab Marmer Statuario Putih', 'Island Counter Top Dekton Tahan Panas', 'Plafon Gypsum Drop Ceiling Akustik', 'Kusen Pintu Lengkung Duco'],
    drawingCode: 'INT-KTB-2026/08',
    slug: 'double-height-luxury-interior-kotabumi',
    title: 'High-Ceiling Luxury Living & Kitchen Suite',
    titleEn: 'High-Ceiling Luxury Living & Kitchen Suite',
    category: 'interior',
    categoryLabel: 'INTERIOR — DESAIN & BANGUN',
    categoryLabelEn: 'Interior Design & Build',
    location: 'Kotabumi, Bandar Lampung',
    year: 2026,
    status: 'Selesai',
    statusEn: 'Completed',
    client: 'Kediaman Kotabumi',
    contractValue: 'INTERIOR — DESAIN & BANGUN',
    duration: '5 Bulan',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Desain interior megah dengan void tinggi (double height ceiling), lantai marmer putih mengkilap, lampu gantung modern kontemporer, island bar dapur elegan, dan kamar tidur utama berpintu lengkung klasik.',
    descriptionEn: 'Grand interior design showcasing soaring double-height ceilings, polished marble floors, statement pendant lighting, chic kitchen island bar, and master suite with classic arched entryway.',
    scope: ['Plafon Drop Ceiling Akustik Mewah', 'Kitchen Set Island & Mini Bar', 'Lantai Marmer Slab & Skirting', 'Pintu Lengkung Klasik & Railing Tangga'],
    featured: true
  },
  {
    id: 'prj-9',
    buildingArea: '110 m² (Luas Interior)',
    landArea: 'Kamar & Ruang Baca',
    materials: ['Partisi Kayu Ash Wood & Kaca Fluted', 'Lantai Kayu Engineered Herringbone', 'Kabinet Multiplex Lapisan HPL Anti-Bakteri', 'Lampu Strip 3000K Warm'],
    drawingCode: 'INT-KTB-2026/09',
    slug: 'warm-japandi-lounge-interior-kotabumi',
    title: 'Warm Japandi Study & Bedroom Lounge',
    titleEn: 'Warm Japandi Study & Bedroom Lounge',
    category: 'interior',
    categoryLabel: 'INTERIOR — DESAIN & BANGUN',
    categoryLabelEn: 'Interior Design & Build',
    location: 'Kotabumi, Bandar Lampung',
    year: 2026,
    status: 'Selesai',
    statusEn: 'Completed',
    client: 'Rumah Tinggal Kotabumi',
    contractValue: 'Interior Custom',
    duration: '3 Bulan',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Ruang santai dan kamar tidur bertema Japandi natural dengan partisi kaca berbingkai kayu, rak pajangan tersembunyi berlampu LED warm white, lantai parket kayu, dan koridor laundry beratap kaca.',
    descriptionEn: 'Serene Japandi lounge and private bedroom with natural wood partitions, recessed warm LED display cabinetry, hardwood flooring, and a sunlit glass-roofed laundry corridor.',
    scope: ['Custom Wardrobe & Storage Wall', 'Plafon Kayu Kisi Natural', 'Lighting Warm Ambience 3000K', 'Lantai Vinyl Wood Plank'],
    featured: false
  },
  {
    id: 'prj-10',
    buildingArea: '85 m² (Luas Remodeling)',
    landArea: 'Unit Eksisting',
    materials: ['Perkuatan Balok Baja I-Beam', 'Dinding Partisi GRC Soundproof Rockwool', 'Pintu Geser Aluminium Slimframe', 'Sanitary Toto Eco-Washer'],
    drawingCode: 'RNV-TGS-2026/10',
    slug: 'renovasi-interior-tangsel',
    title: 'Before-After Room Remodeling & Fit-out',
    titleEn: 'Before-After Room Remodeling & Fit-out',
    category: 'renovasi',
    categoryLabel: 'RENOVASI — DESAIN & BANGUN',
    categoryLabelEn: 'Renovation Design & Build',
    location: 'Tangerang Selatan, Banten',
    year: 2026,
    status: 'Selesai',
    statusEn: 'Completed',
    client: 'Unit Hunian Tangsel',
    contractValue: 'Renovasi Total',
    duration: '2 Bulan',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Transformasi tuntas dari ruangan kosong dalam tahap renovasi kasar menjadi kamar tidur modern fungsional dengan panel dinding kayu, lantai kayu hangat, dan kamar mandi sekat kaca hitam.',
    descriptionEn: 'Complete before-and-after transformation from raw construction state into a cozy, fully finished modern bedroom with wood-accented walls and black-framed glass en-suite.',
    scope: ['Pembongkaran & Perbaikan Dinding', 'Instalasi Partisi Kaca & Pintu Geser', 'Finishing Lantai Parquet & Plafon', 'Pemasangan Sanitari & MEP'],
    featured: false
  }
];

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    slug: 'adinata-design-filosofi-dan-legalitas-resmi',
    title: 'Mengenal CV ADINATA DESIGN: Sinergi Keunggulan Seni Arsitektur & Ketepatan Bangun',
    titleEn: 'Discovering CV ADINATA DESIGN: Synergy of Architectural Art & Build Precision',
    category: 'Korporasi',
    categoryEn: 'Corporate',
    date: '10 Februari 2026',
    readTime: '3 Menit Baca',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    summary: 'Berlandaskan filosofi "Adi" (keunggulan & integritas) dan "Nata" (menata & merancang), CV ADINATA DESIGN resmi berbadan hukum dan siap melayani jasa rancang bangun di DIY, Lampung, Bali, hingga Jabodetabek.',
    summaryEn: 'Rooted in the philosophy of "Adi" (excellence & integrity) and "Nata" (structuring & designing), CV ADINATA DESIGN is officially licensed to deliver design & build services nationwide.',
    content: `Yogyakarta - CV ADINATA DESIGN resmi memperkuat posisinya sebagai konsultan arsitektur dan kontraktor pelaksanaan rancang bangun terpercaya di Indonesia.

Didirikan di Kabupaten Bantul, Daerah Istimewa Yogyakarta melalui Akta Pendirian Nomor 112 tanggal 22 Juli 2026 dan SK Kemenkumham AHU-0049498-AH.01.14 Tahun 2026 serta NIB 2507260006863, perusahaan ini hadir menjawab kebutuhan pemilik hunian maupun ruang usaha yang mendambakan desain bernilai estetika tinggi sekaligus dapat dieksekusi secara nyata tanpa deviasi biaya.

"Kami tidak hanya menggambar keindahan di atas kertas. Melalui empat pilar divisi layanan kami — Design Development, Project Supervision, Construction Consulting, dan Renovation & Modeling — setiap garis desain diwujudkan menjadi bangunan yang kokoh, nyaman, dan berdaya guna jangka panjang," tutur Adi Akbar Tama, S.Ars., IAI selaku Direktur Utama.`,
    contentEn: `Yogyakarta - CV ADINATA DESIGN has officially strengthened its footprint as a premier architecture consultancy and integrated design & build contractor in Indonesia.`,
    author: 'Tim Komunikasi ADINATA',
    featured: true
  },
  {
    id: 'news-2',
    slug: 'tren-desain-inner-courtyard-dan-skylight-tropis',
    title: 'Tren Inner Courtyard & Skylight: Solusi Rumah Sehat Sejuk di Lahan Padat',
    titleEn: 'Inner Courtyard & Skylight Trends: Healthy, Naturally Ventilated Homes',
    category: 'Desain',
    categoryEn: 'Design',
    date: '28 Januari 2026',
    readTime: '4 Menit Baca',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    summary: 'Menerapkan konsep ruang makan terbuka dengan taman dalam ruangan (inner courtyard) beratap kaca skylight mampu mereduksi suhu ruangan hingga 3-5 derajat dan menghemat listrik siang hari.',
    summaryEn: 'Implementing inner courtyards with glass skylights lowers indoor temperatures by 3-5 degrees while drastically reducing daytime lighting energy.',
    content: `Salah satu portofolio unggulan ADINATA DESIGN di Sleman, Yogyakarta berhasil menarik perhatian publik dengan integrasi inner courtyard di tengah rumah.

Melalui desain ini, sirkulasi udara silang (cross ventilation) berjalan optimal dan cahaya alami leluasa menerangi area ruang makan serta ruang keluarga. Penggunaan tanaman tropis berdaun lebar serta batu koral putih di bawah atap kaca tempered menjadikan ruang makan laksana berada di resort terbuka setiap harinya.`,
    contentEn: `One of ADINATA DESIGN's landmark projects in Sleman, Yogyakarta showcases a stunning inner courtyard seamlessly nestled within the home core.`,
    author: 'Tim Arsitek ADINATA',
    featured: true
  },
  {
    id: 'news-3',
    slug: '11-tahap-alur-kerja-profesional-adinata',
    title: 'Transparansi Alur Kerja ADINATA: Dari Konsultasi Awal Hingga Serah Terima Kunci',
    titleEn: 'ADINATA Professional 11-Stage Workflow: From Initial Brief to Handover',
    category: 'Edukasi',
    categoryEn: 'Education',
    date: '15 Januari 2026',
    readTime: '3 Menit Baca',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    summary: 'Menghindari risiko boncos dan salah bangun dengan 11 alur kerja terstruktur yang memberikan kepastian desain, RAB, dan pengawasan berkala.',
    summaryEn: 'Eliminating budget overruns and construction flaws with an 11-stage transparent workflow guaranteeing design accuracy, clear BOQ, and scheduled supervision.',
    content: `Banyak pemilik rumah khawatir mengalami pembengkakan biaya (budget overruns) saat membangun. CV ADINATA DESIGN menerapkan metodologi 11 tahapan alur kerja yang transparan, diawali dengan analisis site mendalam, penyusunan konsep 3D fotorealistik, gambar kerja teknis presisi, hingga pendampingan pemilihan material dan supervisi berkala di lapangan.`,
    contentEn: `CV ADINATA DESIGN strictly adheres to an 11-stage disciplined workflow to safeguard client budgets and ensure flawless architectural realization.`,
    author: 'Biro Komunikasi & Publikasi',
    featured: false
  }
];

export const INITIAL_VACANCIES: JobVacancy[] = [
  {
    id: 'job-1',
    title: 'Junior Architect & 3D Visualizer',
    department: 'Divisi Design Development',
    location: 'Studio Bantul, Yogyakarta',
    type: 'Full Time',
    experience: 'Min. 1-2 Tahun Pengalaman / Fresh Graduate Berbakat',
    deadline: '31 Maret 2026',
    description: 'Mengembangkan gambar konsep arsitektur, rendering 3D fotorealistik, serta membantu penyusunan moodboard interior untuk proyek hunian dan komersial.',
    requirements: [
      'Pendidikan S1 / D3 Arsitektur atau Desain Interior.',
      'Mahir mengoperasikan SketchUp, Enscape / Lumion / D5 Render, dan AutoCAD.',
      'Memiliki sense of art, estetika proporsi ruang yang kuat, dan pemahaman material.',
      'Mampu bekerja sama dalam tim dan komunikatif.',
      'Wajib melampirkan portofolio karya desain terbaru.'
    ],
    responsibilities: [
      'Membuat pemodelan 3D dan rendering eksterior/interior berkualitas tinggi.',
      'Menyusun presentasi konsep desain kepada klien.',
      'Berkoordinasi dengan Project Manager dan Drafter.'
    ]
  },
  {
    id: 'job-2',
    title: 'Site Supervisor / Pengawas Lapangan',
    department: 'Divisi Project Supervision',
    location: 'Penempatan Proyek (Yogyakarta & Sekitarnya)',
    type: 'Full Time',
    experience: 'Min. 2 Tahun Pengalaman',
    deadline: '25 Maret 2026',
    description: 'Melakukan pengawasan harian di lokasi proyek, memastikan pekerjaan tukang sesuai dengan gambar kerja arsitektur dan standar kualitas ADINATA.',
    requirements: [
      'Pendidikan SMK Bangunan / D3 / S1 Teknik Sipil.',
      'Memiliki pemahaman membaca gambar kerja detail (Shop Drawing).',
      'Tegas, teliti, disiplin, dan mampu mengarahkan mandor & tukang di lapangan.',
      'Memiliki kendaraan pribadi untuk mobilitas supervisi proyek.'
    ],
    responsibilities: [
      'Memeriksa kualitas pasangan batu, plesteran, instalasi pipa & kelistrikan.',
      'Menyusun laporan harian dan mingguan progres fisik proyek.',
      'Mengkoordinasikan kebutuhan material lapangan agar pekerjaan tidak terhenti.'
    ]
  }
];

export const TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'testi-1',
    name: 'Bpk. Hendra Kurniawan',
    role: 'Pemilik Rumah Tinggal',
    project: 'Hunian Modern Gable Canopy',
    location: 'Sukarame, Bandar Lampung',
    rating: 5,
    comment: 'Pengerjaan sangat rapi dan presisi sesuai gambar kerja 3D. Tim ADINATA sangat komunikatif dalam memberikan laporan progres mingguan sehingga kami merasa tenang selama proses pembangunan.'
  },
  {
    id: 'testi-2',
    name: 'Ibu Ratna Dewi',
    role: 'Pemilik Hunian Tropis',
    project: 'Contemporary Tropical Compact House',
    location: 'Sleman, D.I. Yogyakarta',
    rating: 5,
    comment: 'Konsep inner courtyard yang diusulkan arsitek ADINATA terbukti membuat rumah kami terasa sejuk alami tanpa pendingin udara sepanjang siang. Transparansi RAB-nya luar biasa detail.'
  },
  {
    id: 'testi-3',
    name: 'Bpk. Agus Prasetyo',
    role: 'Pemilik Kediaman Mewah',
    project: 'Classic Modern Luxury Residence',
    location: 'Kotabumi, Lampung',
    rating: 5,
    comment: 'Desain fasad klasik modern yang megah dengan perincian interior double-height sangat memukau. Kualitas material dan pengawasan lapangannya terbukti profesional dan tepat waktu.'
  }
];
