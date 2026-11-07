// Isi program disalin dari dokumen "bahan web.pdf". Ubah di sini, halaman ikut berubah.

export interface Topic {
  title: string;
  desc?: string;
}

export interface Track {
  name: string;
  desc: string;
  topics: Topic[];
  outputs?: string[];
}

export interface Session {
  week: number;
  title: string;
  method: 'Online' | 'Offline';
  hours: number;
}

export interface Program {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  about: string[];
  /** jam belajar paket lengkap */
  hours: number;
  sessions: number;
  tracksLabel: string;
  tracksIntro: string;
  /** true jika setiap pelatihan bisa dibeli satuan */
  sellTracks: boolean;
  tracks: Track[];
  schedule: Session[];
  scheduleNote?: string;
  assessment?: { component: string; weight: number }[];
  requirements: string[];
  facilities: string[];
  outcomes: string[];
  note?: string;
}

export const PAKET_PRICE = 1100000;
export const SATUAN_PRICE = 499000;
export const SATUAN_HOURS = 8;
export const SATUAN_FORMAT = '2 sesi online × 2 jam + 1 praktik offline × 4 jam, dalam 2 minggu';

const REKOMENDASI_NOTE =
  'Kesempatan rekomendasi kepada perusahaan mitra bukan merupakan jaminan langsung diterima bekerja. Keputusan penerimaan tetap mengikuti proses seleksi yang ditetapkan oleh perusahaan.';

const SYARAT_UMUM = [
  'Nilai akhir minimal 70 dari skala 100.',
  'Kehadiran minimal 80% dari total kegiatan pembelajaran.',
];

export const programs: Program[] = [
  {
    slug: 'global-stem-exposure',
    code: 'GSE',
    name: 'Global STEM Exposure',
    tagline: 'Buka wawasan tentang tren, inovasi, dan peluang STEM di tingkat global.',
    about: [
      'Global STEM Exposure merupakan layanan GITA yang bertujuan membuka wawasan peserta tentang perkembangan Science, Technology, Engineering, and Mathematics (STEM) di tingkat global. Peserta mempelajari tren industri dunia, praktik inovasi perusahaan internasional, serta peluang studi, riset, dan karier lintas negara.',
      'Kegiatan dimulai dari memahami lanskap STEM global, mempelajari studi kasus industri, hingga menyusun rencana langkah global pribadi.',
    ],
    hours: 24,
    sessions: 6,
    tracksLabel: 'Rangkaian pelatihan',
    tracksIntro: 'Ikuti ketiga pelatihan dalam paket lengkap, atau pilih satu pelatihan saja.',
    sellTracks: true,
    tracks: [
      {
        name: 'Global STEM Landscape',
        desc: 'Fokus pada pemahaman peta perkembangan STEM dunia dan arah industri masa depan.',
        topics: [
          { title: 'Pengantar STEM dan perannya dalam ekonomi global' },
          { title: 'Tren teknologi dunia', desc: 'Kecerdasan buatan, energi terbarukan, bioteknologi, dan manufaktur cerdas.' },
          { title: 'Negara dan kawasan pusat inovasi STEM serta alasan keunggulannya' },
          { title: 'Posisi Indonesia dalam ekosistem STEM global' },
        ],
        outputs: ['Ringkasan peta tren STEM global.'],
      },
      {
        name: 'Global Industry Case Study',
        desc: 'Fokus pada pembelajaran dari praktik nyata perusahaan dan lembaga riset internasional.',
        topics: [
          { title: 'Studi kasus perusahaan teknologi dan rekayasa kelas dunia' },
          { title: 'Proses inovasi', desc: 'Dari riset, prototipe, hingga produk di pasar.' },
          { title: 'Budaya kerja dan standar profesional di industri global' },
          { title: 'Diskusi kelompok dan presentasi hasil analisis studi kasus' },
        ],
        outputs: ['Analisis studi kasus industri global.'],
      },
      {
        name: 'Global Opportunity & Collaboration',
        desc: 'Fokus pada pengenalan peluang internasional dan kesiapan berkolaborasi lintas negara.',
        topics: [
          { title: 'Peluang beasiswa, program pertukaran, magang, dan riset internasional' },
          { title: 'Bahasa Inggris untuk komunikasi STEM dan profesional' },
          { title: 'Kolaborasi lintas budaya dan kerja tim jarak jauh' },
          { title: 'Penyusunan dan presentasi rencana langkah global (global roadmap) pribadi' },
        ],
        outputs: ['Rencana langkah global (global roadmap) pribadi.'],
      },
    ],
    schedule: [
      { week: 1, title: 'Pelatihan 1: pengantar STEM global dan tren teknologi dunia', method: 'Online', hours: 4 },
      { week: 2, title: 'Pelatihan 1: posisi Indonesia; Pelatihan 2: studi kasus industri global (bagian 1)', method: 'Online', hours: 4 },
      { week: 2, title: 'Global Exposure Day 1: diskusi dan simulasi studi kasus', method: 'Offline', hours: 4 },
      { week: 3, title: 'Pelatihan 2: proses inovasi, budaya kerja, dan studi kasus (bagian 2 dan 3)', method: 'Online', hours: 4 },
      { week: 4, title: 'Pelatihan 3: peluang internasional, bahasa Inggris STEM, dan kolaborasi lintas budaya', method: 'Online', hours: 4 },
      { week: 4, title: 'Global Exposure Day 2: presentasi global roadmap, evaluasi, dan feedback', method: 'Offline', hours: 4 },
    ],
    scheduleNote:
      'Contoh jadwal. Sesi online dapat dilaksanakan Selasa dan Kamis (2 jam/sesi), praktik offline pada Sabtu minggu kedua dan keempat (4 jam/sesi).',
    requirements: [
      'Mengikuti rangkaian pelatihan sesuai jadwal yang telah ditentukan.',
      'Menyelesaikan tugas, kuis, dan presentasi akhir.',
      'Mengikuti evaluasi atau ujian akhir.',
      ...SYARAT_UMUM,
    ],
    facilities: [
      'Modul pembelajaran digital',
      'Akses pelatihan online',
      'Kegiatan praktik secara offline',
      'Forum diskusi dan konsultasi',
      'Kuis dan ujian evaluasi',
      'Sertifikat kelulusan bagi peserta yang memenuhi ketentuan',
      'Kesempatan direkomendasikan kepada perusahaan mitra',
      'Kesempatan memperluas relasi dan networking profesional',
    ],
    outcomes: [
      'Wawasan tentang perkembangan dan tren STEM di tingkat global',
      'Kemampuan menganalisis praktik inovasi perusahaan dan lembaga internasional',
      'Pengetahuan tentang peluang beasiswa, riset, magang, dan karier internasional',
      'Rencana langkah global (global roadmap) untuk portofolio',
      'Pengalaman bekerja dalam tim dan mempresentasikan hasil analisis',
    ],
    note: REKOMENDASI_NOTE,
  },
  {
    slug: 'stem-industry-training',
    code: 'SIT',
    name: 'STEM Industry Training',
    tagline: 'Kuasai Excel, Python, dan AutoCAD, tiga keterampilan teknis dasar dunia kerja.',
    about: [
      'Pelatihan Kompetensi Dasar adalah program pelatihan yang dirancang untuk membekali peserta dengan keterampilan teknis dasar yang dibutuhkan di dunia kerja. Program ini mencakup tiga keterampilan utama: Microsoft Excel untuk pengolahan data, Python untuk dasar pemrograman dan analisis data, serta AutoCAD untuk menggambar teknik 2D.',
      'Melalui pembelajaran online dan praktik offline, peserta mendapatkan pengalaman belajar yang terarah, latihan berbasis studi kasus, serta kesempatan membangun jaringan profesional dengan mentor dan mitra industri.',
    ],
    hours: 48,
    sessions: 12,
    tracksLabel: 'Kelas pelatihan',
    tracksIntro: 'Ikuti ketiga kelas dalam paket lengkap, atau pilih satu kelas saja.',
    sellTracks: true,
    tracks: [
      {
        name: 'Excel',
        desc: 'Mengolah, menganalisis, dan menyajikan data secara rapi dan efisien untuk kebutuhan administrasi dan pekerjaan sehari-hari.',
        topics: [
          { title: 'Dasar Excel', desc: 'Mengenal antarmuka, input data, format sel, dan manajemen worksheet.' },
          { title: 'Rumus dan Fungsi', desc: 'SUM, AVERAGE, IF, COUNTIF, SUMIF, serta fungsi teks dan tanggal.' },
          { title: 'Lookup', desc: 'VLOOKUP, XLOOKUP, dan INDEX-MATCH untuk mencari dan mencocokkan data.' },
          { title: 'Pengolahan Data', desc: 'Sorting, filter, validasi data, dan conditional formatting.' },
          { title: 'Pivot Table dan Grafik', desc: 'Merangkum data dan menyajikannya secara visual.' },
          { title: 'Dashboard Sederhana', desc: 'Menyusun laporan ringkas yang siap dipresentasikan.' },
        ],
        outputs: [
          'Template laporan dan rekap data.',
          'File Excel dengan rumus dan fungsi terapan.',
          'Dashboard sederhana berbasis Pivot Table.',
        ],
      },
      {
        name: 'Python',
        desc: 'Logika pemrograman dan kemampuan dasar Python untuk mengotomatiskan tugas serta menganalisis data.',
        topics: [
          { title: 'Dasar Python', desc: 'Instalasi, variabel, tipe data, dan operator.' },
          { title: 'Alur Program', desc: 'Percabangan (if-else) dan perulangan (for, while).' },
          { title: 'Struktur Data', desc: 'List, tuple, dictionary, dan set.' },
          { title: 'Fungsi dan Modul', desc: 'Membuat fungsi, menggunakan library, dan menangani error.' },
          { title: 'Pengolahan File', desc: 'Membaca dan menulis file teks, CSV, dan Excel.' },
          { title: 'Dasar Analisis Data', desc: 'Pandas untuk membersihkan data dan Matplotlib untuk visualisasi.' },
        ],
        outputs: [
          'Kumpulan program Python sederhana.',
          'Skrip otomatisasi pengolahan data.',
          'Visualisasi data dari dataset sederhana.',
        ],
      },
      {
        name: 'AutoCAD',
        desc: 'Menguasai gambar teknik 2D yang akurat, rapi, dan sesuai standar penggambaran.',
        topics: [
          { title: 'Antarmuka dan Dasar AutoCAD', desc: 'Workspace, satuan, koordinat, dan pengaturan gambar.' },
          { title: 'Perintah Gambar', desc: 'Line, circle, arc, rectangle, polyline, dan hatch.' },
          { title: 'Perintah Modifikasi', desc: 'Move, copy, rotate, trim, extend, offset, dan fillet.' },
          { title: 'Layer dan Properti', desc: 'Mengatur layer, warna, tipe garis, dan ketebalan garis.' },
          { title: 'Anotasi', desc: 'Teks, dimensi, dan blok.' },
          { title: 'Layout dan Plotting', desc: 'Menyusun lembar gambar, skala, dan mencetak ke PDF.' },
        ],
        outputs: [
          'Gambar kerja 2D sederhana.',
          'Template gambar dengan layer dan dimensi.',
          'File gambar siap cetak dalam format PDF.',
        ],
      },
    ],
    schedule: [
      { week: 1, title: 'Pengenalan Excel, input data, rumus dan fungsi dasar', method: 'Offline', hours: 4 },
      { week: 1, title: 'Fungsi logika, lookup, validasi data, dan conditional formatting', method: 'Online', hours: 4 },
      { week: 1, title: 'Pivot Table, grafik, dan dashboard sederhana', method: 'Offline', hours: 4 },
      { week: 2, title: 'Dasar Python: variabel, tipe data, percabangan, dan perulangan', method: 'Online', hours: 4 },
      { week: 2, title: 'Struktur data, fungsi, modul, dan pengolahan file', method: 'Offline', hours: 4 },
      { week: 2, title: 'Pandas dan visualisasi data dengan Matplotlib', method: 'Offline', hours: 5 },
      { week: 3, title: 'Antarmuka AutoCAD, perintah gambar dan modifikasi', method: 'Offline', hours: 4 },
      { week: 3, title: 'Layer, teks, dimensi, dan blok', method: 'Online', hours: 4 },
      { week: 3, title: 'Gambar kerja 2D, layout, dan plotting PDF', method: 'Offline', hours: 4 },
      { week: 4, title: 'Proyek terpadu Excel dan Python', method: 'Online', hours: 4 },
      { week: 4, title: 'Proyek AutoCAD, review hasil, dan pengenalan mitra industri', method: 'Offline', hours: 4 },
      { week: 4, title: 'Kuis, ujian akhir, dan evaluasi pelatihan', method: 'Online', hours: 3 },
    ],
    assessment: [
      { component: 'Kuis materi', weight: 20 },
      { component: 'Tugas praktik (Excel, Python, AutoCAD)', weight: 30 },
      { component: 'Proyek terpadu dan praktik offline', weight: 25 },
      { component: 'Ujian akhir', weight: 25 },
    ],
    requirements: SYARAT_UMUM,
    facilities: [
      'E-modul dan materi pembelajaran',
      'Sertifikat kelulusan',
      'Forum diskusi bersama mentor dan peserta',
      'Kuis untuk mengevaluasi pemahaman materi',
      'Ujian akhir pelatihan',
      'Bank latihan soal dan file praktik (dataset Excel, skrip Python, gambar kerja AutoCAD)',
      'Konsultasi dan evaluasi hasil praktik',
      'Praktik offline dan proyek terpadu',
      'Informasi peluang kerja dari mitra industri',
    ],
    outcomes: [
      'Template laporan, file Excel terapan, dan dashboard Pivot Table',
      'Kumpulan program Python, skrip otomatisasi, dan visualisasi data',
      'Gambar kerja 2D, template gambar, dan file siap cetak PDF',
    ],
  },
  {
    slug: 'industry-project-simulation',
    code: 'IPS',
    name: 'Industry Project Simulation',
    tagline: 'Kerjakan proyek yang menyerupai permasalahan nyata di dunia industri.',
    about: [
      'Industry Project Simulation merupakan layanan pelatihan GITA yang menggunakan metode Project-Based Learning. Peserta tidak hanya mempelajari teori, tetapi juga mengerjakan proyek yang menyerupai permasalahan di dunia industri.',
      'Kegiatan dimulai dari mengidentifikasi masalah, merancang solusi, mengimplementasikan proyek, hingga mempresentasikan hasilnya.',
    ],
    hours: 24,
    sessions: 6,
    tracksLabel: 'Pilihan jalur',
    tracksIntro: 'Ikuti ketiga jalur dalam paket lengkap, atau pilih satu jalur saja.',
    sellTracks: true,
    tracks: [
      {
        name: 'Data Analytics Project',
        desc: 'Pengolahan dan analisis data untuk membantu perusahaan mengambil keputusan.',
        topics: [
          { title: 'Pengenalan data dan identifikasi masalah bisnis' },
          { title: 'Pengolahan data menggunakan Microsoft Excel' },
          { title: 'Analisis dan interpretasi data' },
          { title: 'Pembuatan dashboard menggunakan Power BI' },
          { title: 'Presentasi hasil analisis' },
        ],
        outputs: ['Dashboard analisis data sederhana.'],
      },
      {
        name: 'Software Development Project',
        desc: 'Perancangan dan pembuatan aplikasi sederhana untuk menyelesaikan permasalahan operasional.',
        topics: [
          { title: 'Identifikasi kebutuhan pengguna' },
          { title: 'Dasar perancangan aplikasi' },
          { title: 'Pengenalan HTML, CSS, dan JavaScript' },
          { title: 'Pembuatan tampilan aplikasi sederhana' },
          { title: 'Pengujian dan presentasi aplikasi' },
        ],
        outputs: ['Prototipe aplikasi atau website sederhana.'],
      },
      {
        name: 'Engineering & IoT Prototype Project',
        desc: 'Pembuatan prototipe teknologi sederhana untuk menyelesaikan permasalahan industri.',
        topics: [
          { title: 'Pengenalan konsep Internet of Things (IoT)' },
          { title: 'Identifikasi masalah dan perancangan solusi' },
          { title: 'Pengenalan komponen dasar ESP32 atau Arduino' },
          { title: 'Perakitan sensor dan perangkat sederhana' },
          { title: 'Pengujian dan presentasi prototipe' },
        ],
        outputs: ['Prototipe IoT sederhana.'],
      },
    ],
    schedule: [
      { week: 1, title: 'Pengenalan proyek, identifikasi masalah industri, dan dasar materi', method: 'Online', hours: 4 },
      { week: 2, title: 'Pembelajaran tools dan perancangan solusi proyek', method: 'Online', hours: 4 },
      { week: 2, title: 'Praktik awal dan penyusunan proyek', method: 'Offline', hours: 4 },
      { week: 3, title: 'Implementasi proyek dan pendampingan mentor', method: 'Online', hours: 4 },
      { week: 4, title: 'Penyelesaian proyek dan persiapan presentasi', method: 'Online', hours: 4 },
      { week: 4, title: 'Presentasi proyek, evaluasi, dan feedback mentor', method: 'Offline', hours: 4 },
    ],
    scheduleNote:
      'Contoh jadwal. Sesi online dapat dilaksanakan Selasa dan Kamis (2 jam/sesi), praktik offline pada Sabtu minggu kedua dan keempat (4 jam/sesi).',
    requirements: [
      'Mengikuti rangkaian pelatihan sesuai jadwal yang telah ditentukan.',
      'Menyelesaikan tugas, kuis, dan proyek akhir.',
      'Mengikuti evaluasi atau ujian akhir.',
      ...SYARAT_UMUM,
    ],
    facilities: [
      'Modul pembelajaran digital',
      'Akses pelatihan online',
      'Kegiatan praktik proyek secara offline',
      'Forum diskusi dan konsultasi',
      'Kuis dan ujian evaluasi',
      'Pendampingan mentor',
      'Sertifikat kelulusan bagi peserta yang memenuhi ketentuan',
      'Kesempatan direkomendasikan kepada perusahaan mitra',
      'Kesempatan memperluas relasi dan networking profesional',
    ],
    outcomes: [
      'Pengalaman mengerjakan proyek berbasis simulasi industri',
      'Kemampuan mengidentifikasi masalah dan merancang solusi',
      'Keterampilan menggunakan tools sesuai bidang pelatihan',
      'Hasil proyek yang dapat dimasukkan ke dalam portofolio',
      'Pengalaman bekerja dalam tim dan mempresentasikan hasil proyek',
    ],
    note: REKOMENDASI_NOTE,
  },
  {
    slug: 'career-preparation',
    code: 'CRP',
    name: 'Career Preparation',
    tagline: 'Siapkan dokumen karier, hadapi rekrutmen, dan tentukan arah karier.',
    about: [
      'Career Preparation merupakan program pelatihan yang dirancang untuk membantu peserta mempersiapkan diri memasuki dunia kerja. Program ini membekali peserta dengan keterampilan menyusun dokumen karier, menghadapi proses rekrutmen, dan menentukan arah karier sesuai potensi diri.',
      'Melalui pembelajaran online dan praktik offline, peserta mendapatkan pengalaman belajar yang terarah serta kesempatan membangun jaringan profesional dengan mentor dan mitra industri.',
    ],
    hours: 48,
    sessions: 12,
    tracksLabel: 'Kelas pelatihan',
    tracksIntro: 'Ikuti ketiga kelas dalam paket lengkap, atau pilih satu kelas saja.',
    sellTracks: true,
    tracks: [
      {
        name: 'Persiapan Dokumen',
        desc: 'Menyusun dokumen lamaran kerja yang profesional, menarik, dan sesuai dengan kebutuhan perusahaan.',
        topics: [
          { title: 'CV dan Resume', desc: 'Menyusun CV yang jelas, ringkas, dan ramah ATS.' },
          { title: 'Cover Letter', desc: 'Membuat surat lamaran kerja sesuai posisi yang dituju.' },
          { title: 'Portofolio', desc: 'Menyusun dan menampilkan hasil karya, proyek, atau pengalaman.' },
          { title: 'LinkedIn', desc: 'Membangun profil profesional dan personal branding.' },
          { title: 'Strategi Melamar', desc: 'Memahami kualifikasi lowongan dan menyesuaikan dokumen lamaran.' },
        ],
        outputs: ['CV profesional.', 'Cover letter.', 'Portofolio sederhana.', 'Profil LinkedIn yang telah diperbaiki.'],
      },
      {
        name: 'Simulasi Rekrutmen',
        desc: 'Melatih peserta menghadapi proses seleksi kerja agar lebih siap, percaya diri, dan komunikatif.',
        topics: [
          { title: 'Proses Rekrutmen', desc: 'Memahami tahapan seleksi administrasi hingga wawancara.' },
          { title: 'Interview Preparation', desc: 'Mempelajari pertanyaan HR dan user serta teknik menjawabnya.' },
          { title: 'STAR Method', desc: 'Menyusun jawaban menggunakan Situation, Task, Action, dan Result.' },
          { title: 'Psikotes Dasar', desc: 'Latihan verbal, numerik, logika, dan penalaran.' },
          { title: 'Studi Kasus', desc: 'Menganalisis masalah dan menyampaikan solusi.' },
          { title: 'Komunikasi Profesional', desc: 'Melatih bahasa tubuh, etika, dan komunikasi saat wawancara.' },
        ],
      },
      {
        name: 'Career Guidance',
        desc: 'Mengenali potensi diri, menentukan pilihan pekerjaan, dan menyusun rencana pengembangan karier.',
        topics: [
          { title: 'Self-Assessment', desc: 'Mengenali minat, keahlian, dan potensi diri.' },
          { title: 'Career Mapping', desc: 'Menghubungkan kompetensi dengan pilihan pekerjaan.' },
          { title: 'Analisis Pasar Kerja', desc: 'Memahami kebutuhan industri dan kualifikasi pekerjaan.' },
          { title: 'Career Planning', desc: 'Menyusun target karier jangka pendek dan panjang.' },
          { title: 'Job Search Strategy', desc: 'Strategi mencari pekerjaan dan membangun jaringan profesional.' },
        ],
      },
    ],
    schedule: [
      { week: 1, title: 'Pengenalan dunia kerja dan penyusunan CV', method: 'Offline', hours: 4 },
      { week: 1, title: 'CV ATS, cover letter, portofolio, dan LinkedIn', method: 'Online', hours: 4 },
      { week: 1, title: 'Praktik pembuatan dan review dokumen karier', method: 'Offline', hours: 4 },
      { week: 2, title: 'Tahapan rekrutmen dan psikotes dasar', method: 'Online', hours: 4 },
      { week: 2, title: 'Teknik wawancara dan STAR Method', method: 'Offline', hours: 4 },
      { week: 2, title: 'Simulasi wawancara HR dan user', method: 'Offline', hours: 5 },
      { week: 3, title: 'Pengenalan minat, bakat, dan potensi diri', method: 'Offline', hours: 4 },
      { week: 3, title: 'Career Mapping dan strategi mencari kerja', method: 'Online', hours: 4 },
      { week: 3, title: 'Konsultasi dan penyusunan rencana karier', method: 'Offline', hours: 4 },
      { week: 4, title: 'Finalisasi CV dan portofolio', method: 'Online', hours: 4 },
      { week: 4, title: 'Forum diskusi dan pengenalan mitra industri', method: 'Offline', hours: 4 },
      { week: 4, title: 'Kuis, ujian akhir, dan evaluasi pelatihan', method: 'Online', hours: 3 },
    ],
    assessment: [
      { component: 'Kuis materi', weight: 20 },
      { component: 'Tugas dokumen karier', weight: 25 },
      { component: 'Praktik simulasi rekrutmen', weight: 30 },
      { component: 'Ujian akhir', weight: 25 },
    ],
    requirements: SYARAT_UMUM,
    facilities: [
      'E-modul dan materi pembelajaran',
      'Sertifikat kelulusan',
      'Forum diskusi bersama mentor dan peserta',
      'Kuis untuk mengevaluasi pemahaman materi',
      'Ujian akhir pelatihan',
      'Konsultasi dan evaluasi karier',
      'Praktik offline dan simulasi rekrutmen',
      'Informasi peluang kerja dari mitra industri',
    ],
    outcomes: [
      'CV profesional dan cover letter',
      'Portofolio sederhana',
      'Profil LinkedIn yang telah diperbaiki',
      'Kesiapan menghadapi wawancara dan psikotes',
      'Rencana karier jangka pendek dan panjang',
    ],
  },
  {
    slug: 'industry-mentoring',
    code: 'IMT',
    name: 'Industry Mentoring',
    tagline: 'Didampingi engineer, praktisi, dan expert STEM langsung dari industri.',
    about: [
      'STEM – Industry Mentoring merupakan layanan pendampingan yang menghubungkan peserta pelatihan STEM dengan mentor yang memiliki pengalaman dan keahlian di dunia industri. Program ini membantu peserta memahami penerapan ilmu STEM dalam lingkungan kerja, mengenali kebutuhan dan tantangan industri, serta mengembangkan kompetensi melalui arahan mentor.',
      'Selama satu bulan, peserta mengikuti sharing pengalaman, konsultasi proyek, career discussion, evaluasi kemampuan, dan feedback mentor, serta kegiatan tambahan seperti company visit, networking session, dan industry challenge.',
    ],
    hours: 32,
    sessions: 8,
    tracksLabel: 'Komponen layanan',
    tracksIntro: 'Lima komponen yang membentuk rangkaian mentoring selama satu bulan. Program ini hanya tersedia sebagai paket.',
    sellTracks: false,
    tracks: [
      {
        name: 'Mentor Industri',
        desc: 'Pendampingan dari pihak yang memahami praktik dan kebutuhan dunia industri.',
        topics: [
          { title: 'Engineer', desc: 'Praktisi yang bekerja pada bidang teknik atau rekayasa.' },
          { title: 'Praktisi perusahaan', desc: 'Profesional yang memahami proses dan budaya kerja perusahaan.' },
          { title: 'Expert bidang STEM', desc: 'Ahli dengan kompetensi khusus pada sains, teknologi, engineering, atau matematika.' },
        ],
      },
      {
        name: 'Aktivitas Mentoring',
        desc: 'Kegiatan interaktif untuk memperoleh wawasan industri dan mengembangkan gagasan atau proyek.',
        topics: [
          { title: 'Sharing pengalaman', desc: 'Mentor berbagi pengalaman kerja, perjalanan karier, dan tantangan di industri.' },
          { title: 'Konsultasi proyek', desc: 'Diskusi ide, proses pengerjaan, dan kendala proyek bersama mentor.' },
          { title: 'Career discussion', desc: 'Kompetensi, peluang karier, dan persiapan memasuki industri.' },
        ],
      },
      {
        name: 'Mentoring Progress',
        desc: 'Pemantauan perkembangan peserta agar mentoring memberikan arahan yang jelas.',
        topics: [
          { title: 'Evaluasi kemampuan', desc: 'Meninjau pemahaman, keterampilan, dan keterlibatan peserta.' },
          { title: 'Feedback mentor', desc: 'Masukan atas proses belajar maupun proyek peserta.' },
          { title: 'Laporan perkembangan', desc: 'Rangkuman aktivitas, capaian, kendala, dan rekomendasi tindak lanjut.' },
        ],
      },
      {
        name: 'Program Tambahan',
        desc: 'Kegiatan pendukung untuk memperluas pengalaman di luar sesi mentoring utama.',
        topics: [
          { title: 'Company visit', desc: 'Mengenal lingkungan kerja dan aktivitas industri secara langsung.' },
          { title: 'Networking session', desc: 'Membangun relasi dengan mentor dan profesional industri.' },
          { title: 'Industry challenge', desc: 'Tantangan berbasis permasalahan industri untuk melatih pemecahan masalah.' },
        ],
      },
      {
        name: 'Bentuk Mentoring',
        desc: 'Dipilih sesuai materi, jumlah peserta, dan ketersediaan mentor.',
        topics: [
          { title: 'One-on-one mentoring', desc: 'Sesi personal antara satu peserta dan satu mentor.' },
          { title: 'Group mentoring', desc: 'Pendampingan bersama beberapa peserta dalam satu kelompok.' },
          { title: 'Online mentoring', desc: 'Sesi jarak jauh melalui platform pertemuan daring.' },
        ],
      },
    ],
    schedule: [
      { week: 1, title: 'Pengenalan program, mentor, peserta, dan tujuan mentoring', method: 'Offline', hours: 4 },
      { week: 1, title: 'Sharing pengalaman mentor: dunia kerja, perjalanan karier, dan praktik industri', method: 'Online', hours: 3 },
      { week: 2, title: 'Konsultasi proyek: pembahasan ide, kebutuhan, dan kendala proyek peserta', method: 'Online', hours: 4 },
      { week: 2, title: 'Career discussion dan diskusi studi kasus/permasalahan industri', method: 'Offline', hours: 4 },
      { week: 3, title: 'Evaluasi kemampuan peserta dan feedback mentor terhadap perkembangan awal', method: 'Online', hours: 3 },
      { week: 3, title: 'Company visit: pengenalan lingkungan kerja dan proses industri', method: 'Offline', hours: 5 },
      { week: 4, title: 'Networking session dan industry challenge berbasis permasalahan industri', method: 'Offline', hours: 5 },
      { week: 4, title: 'Mentoring akhir, refleksi, penyusunan laporan perkembangan, dan rekomendasi', method: 'Online', hours: 4 },
    ],
    scheduleNote:
      'Durasi merupakan estimasi jam kegiatan efektif. Company visit menyesuaikan izin dan ketersediaan perusahaan mitra; jika tidak dapat dilaksanakan, kegiatan diganti dengan pemaparan proses industri atau diskusi bersama praktisi.',
    assessment: [
      { component: 'Kehadiran dan partisipasi mentoring', weight: 20 },
      { component: 'Keaktifan diskusi dan konsultasi proyek', weight: 20 },
      { component: 'Perkembangan proyek/tugas atau industry challenge', weight: 30 },
      { component: 'Laporan perkembangan dan refleksi akhir', weight: 30 },
    ],
    requirements: SYARAT_UMUM,
    facilities: [
      'Sesi mentoring bersama mentor industri sesuai bidang yang relevan',
      'Materi atau panduan kegiatan mentoring',
      'Kesempatan konsultasi proyek dan career discussion',
      'Feedback mentor dan evaluasi perkembangan peserta',
      'Laporan atau ringkasan hasil mentoring',
      'Company visit, networking session, dan industry challenge sesuai jadwal',
      'Sertifikat penyelesaian program bagi peserta yang memenuhi ketentuan',
    ],
    outcomes: [
      'Pemahaman penerapan STEM di dunia industri',
      'Catatan konsultasi dan feedback dari mentor',
      'Perkembangan atau hasil proyek/tugas peserta',
      'Laporan perkembangan dan refleksi akhir mentoring',
      'Rekomendasi pengembangan kompetensi dan langkah karier berikutnya',
    ],
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);

/** Pilihan pendaftaran: "paket" atau "t1", "t2", ... (indeks pelatihan, mulai 1) */
export interface Offer {
  id: string;
  label: string;
  price: number;
  hours: number;
  paket: boolean;
}

export function getOffers(p: Program): Offer[] {
  const paket: Offer = { id: 'paket', label: 'Paket Lengkap', price: PAKET_PRICE, hours: p.hours, paket: true };
  if (!p.sellTracks) return [paket];
  return [
    paket,
    ...p.tracks.map((t, i) => ({ id: `t${i + 1}`, label: t.name, price: SATUAN_PRICE, hours: SATUAN_HOURS, paket: false })),
  ];
}

export const getOffer = (p: Program, id: string | null) => getOffers(p).find((o) => o.id === id);

/** Persentase hemat paket dibanding membeli semua pelatihan satuan */
export const paketSaving = (p: Program) =>
  p.sellTracks ? Math.round((1 - PAKET_PRICE / (SATUAN_PRICE * p.tracks.length)) * 100) : 0;

export const formatRupiah = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
