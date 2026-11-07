// Penyimpanan pendaftaran untuk mode demo. Semua data hanya ada di browser pengunjung.

export type Status = 'menunggu_pembayaran' | 'menunggu_verifikasi' | 'lunas';
export type PaymentMethod = 'transfer' | 'qris';

export interface Registration {
  kode: string;
  programSlug: string;
  /** id pilihan dari getOffers(): "paket" atau "t1".."t3" */
  offerId: string;
  /** label pilihan saat mendaftar, mis. "Paket Lengkap" atau "Python" */
  offerLabel: string;
  nama: string;
  email: string;
  hp: string;
  institusi: string;
  amount: number;
  status: Status;
  method?: PaymentMethod;
  createdAt: string;
  paidAt?: string;
  verifiedAt?: string;
}

const KEY = 'gita-demo-registrations';

export const STATUS_LABEL: Record<Status, string> = {
  menunggu_pembayaran: 'Menunggu Pembayaran',
  menunggu_verifikasi: 'Menunggu Verifikasi',
  lunas: 'Lunas',
};

export const METHOD_LABEL: Record<PaymentMethod, string> = {
  transfer: 'Transfer Bank',
  qris: 'QRIS',
};

export function loadAll(): Registration[] {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    // Abaikan data dari versi lama yang belum punya pilihan paket/satuan
    return Array.isArray(parsed) ? parsed.filter((r) => r && typeof r.offerId === 'string') : [];
  } catch {
    return [];
  }
}

function saveAll(list: Registration[]): boolean {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}

export function find(kode: string | null): Registration | undefined {
  if (!kode) return undefined;
  return loadAll().find((r) => r.kode === kode);
}

export function add(reg: Registration): boolean {
  return saveAll([reg, ...loadAll()]);
}

export function update(kode: string, patch: Partial<Registration>): Registration | undefined {
  const list = loadAll();
  const i = list.findIndex((r) => r.kode === kode);
  if (i === -1) return undefined;
  list[i] = { ...list[i], ...patch };
  saveAll(list);
  return list[i];
}

export function remove(kode: string) {
  saveAll(loadAll().filter((r) => r.kode !== kode));
}

export function clearAll() {
  saveAll([]);
}

// Tanpa huruf/angka yang mudah tertukar (0/O, 1/I/L).
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

export function makeKode(programCode: string): string {
  const existing = new Set(loadAll().map((r) => r.kode));
  let kode: string;
  do {
    const bytes = crypto.getRandomValues(new Uint8Array(4));
    const suffix = Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join('');
    kode = `GITA-${programCode}-${suffix}`;
  } while (existing.has(kode));
  return kode;
}

export const formatDateTime = (iso: string) =>
  new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeStyle: 'short' }).format(new Date(iso));
