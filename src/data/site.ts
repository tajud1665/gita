
export const site = {
  name: 'GITA',
  fullName: 'GITA — Pelatihan STEM untuk Dunia Industri',
  description:
    'GITA menyiapkan mahasiswa dan fresh graduate STEM memasuki dunia industri melalui lima program pelatihan berjenjang: wawasan global, keterampilan teknis, proyek industri, persiapan karier, dan mentoring.',
  contact: {
    whatsapp: '+628134567890',
    email: 'gita@gmail.com',
    instagram: '@gita_',
    address: 'MCC (Malang Creative Center) Jl. Ahmad Yani No.53, Blimbing, Kec. Blimbing, Kota Malang, Jawa Timur 65118.',
  },
  payment: {
    // Data fiktif untuk demo — ganti dengan rekening asli sebelum dipakai sungguhan.
    bank: 'Bank Contoh',
    accountNumber: '0000 0000 0000',
    accountName: 'GITA (Demo)',
    deadlineHours: 24,
  },
};

export const contactLinks = {
  whatsapp: `https://wa.me/${site.contact.whatsapp.replace(/\D/g, '')}`,
  email: `mailto:${site.contact.email}`,
  instagram: `https://instagram.com/${site.contact.instagram.replace(/^@/, '')}`,
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.contact.address)}`,
};

export const LOCATION_NAME = 'MCC (Malang Creative Center), Kota Malang';
