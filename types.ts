/**
 * Interface untuk mendefinisikan fitur dalam sebuah paket.
 * @property text - Deskripsi fitur.
 * @property available - Status ketersediaan fitur (true jika tersedia, false jika tidak).
 */
export interface PackageFeature {
  text: string;
  available: boolean;
}

/**
 * Interface untuk mendefinisikan struktur sebuah paket layanan.
 * @property name - Nama paket (e.g., 'Basic', 'Premium').
 * @property price - Tampilan harga dalam bentuk string (e.g., '40k').
 * @property priceValue - Nilai numerik harga untuk pemrosesan lebih lanjut.
 * @property description - Deskripsi singkat mengenai target pengguna paket.
 * @property features - Array dari objek PackageFeature yang berisi detail fitur paket.
 * @property isPopular - Menandakan apakah paket ini adalah pilihan populer.
 * @property color - Skema warna yang digunakan untuk branding paket.
 */
export interface Package {
  name: string;
  price: string;
  priceValue: number;
  description: string;
  features: PackageFeature[];
  isPopular: boolean;
  color: 'brand-cyan';
}

/**
 * Interface untuk mendefinisikan struktur data testimoni pelanggan.
 * @property quote - Kutipan atau testimoni dari pelanggan.
 * @property name - Nama pelanggan.
 * @property role - Peran atau status pelanggan (e.g., 'Mahasiswa Tingkat Akhir').
 * @property university - Nama universitas atau institusi pelanggan.
 * @property avatar - URL ke gambar avatar pelanggan.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  university: string;
  avatar: string;
}

/**
 * Interface untuk mendefinisikan langkah dalam bagian "Cara Kerja".
 * @property icon - Komponen React yang berfungsi sebagai ikon untuk langkah tersebut.
 * @property title - Judul langkah.
 * @property description - Deskripsi singkat dari langkah tersebut.
 */
export interface HowItWorksStep {
    icon: React.ReactNode;
    title: string;
    description: string;
}

/**
 * Tipe untuk mendefinisikan peran dalam sebuah pesan chat.
 * 'user' untuk pengguna, 'model' untuk AI.
 */
export type ChatRole = 'user' | 'model';

/**
 * Interface untuk mendefinisikan struktur sebuah pesan dalam histori chat.
 * @property role - Peran pengirim pesan (user atau model).
 * @property content - Isi teks dari pesan.
 */
export interface ChatMessage {
  role: ChatRole;
  content: string;
}
