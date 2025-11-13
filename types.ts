import type { ReactNode } from 'react';

/**
 * Interface untuk mendefinisikan item layanan dalam sebuah kategori.
 * @property title - Nama layanan spesifik.
 * @property price - Harga layanan dalam bentuk string.
 * @property description - Deskripsi tambahan (opsional).
 */
export interface ServiceItem {
  title: string;
  price: string;
  description?: string;
}

/**
 * Interface untuk mendefinisikan kategori layanan.
 * @property name - Nama kategori layanan (e.g., 'Tugas Menulis').
 * @property icon - Komponen React yang berfungsi sebagai ikon untuk kategori.
 * @property description - Deskripsi singkat mengenai kategori layanan.
 * @property items - Array dari objek ServiceItem yang berisi detail layanan.
 * @property color - Skema warna yang digunakan untuk branding.
 * @property ctaText - Teks untuk tombol ajakan bertindak (Call to Action).
 */
export interface ServiceCategory {
  name: string;
  // Fix: Use imported ReactNode type instead of React.ReactNode to resolve namespace error.
  icon: ReactNode;
  description: string;
  items: ServiceItem[];
  color: 'brand-cyan';
  ctaText: string;
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
    // Fix: Use imported ReactNode type instead of React.ReactNode to resolve namespace error.
    icon: ReactNode;
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

// Fix: Add missing type definitions for Package and PackageFeature.
/**
 * Interface untuk mendefinisikan sebuah fitur dalam paket layanan.
 * @property text - Deskripsi fitur.
 * @property available - Status ketersediaan fitur.
 */
export interface PackageFeature {
  text: string;
  available: boolean;
}

/**
 * Interface untuk mendefinisikan struktur sebuah paket layanan.
 * @property name - Nama paket.
 * @property price - Harga dalam bentuk string (e.g., '40k').
 * @property priceValue - Nilai numerik dari harga.
 * @property description - Deskripsi singkat paket.
 * @property features - Array dari objek PackageFeature.
 * @property isPopular - Menandakan apakah paket ini populer.
 * @property color - Skema warna yang digunakan.
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
