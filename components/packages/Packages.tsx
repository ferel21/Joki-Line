import React from 'react';
import type { Package } from '../../types';
import PackageCard from './PackageCard';

// Data yang diperluas untuk paket-paket layanan
const packages: Package[] = [
  {
    name: 'Basic',
    price: '40k',
    priceValue: 40000,
    description: 'Solusi hemat untuk tugas-tugas ringan dengan deadline fleksibel.',
    features: [
      { text: 'Pengerjaan 3-5 hari', available: true },
      { text: 'Revisi minor 1x', available: true },
      { text: 'Konsultasi via chat', available: true },
      { text: 'Cek plagiarisme dasar', available: false },
      { text: 'Garansi nilai', available: false },
    ],
    isPopular: false,
    color: 'brand-cyan',
  },
  {
    name: 'Premium',
    price: '80k',
    priceValue: 80000,
    description: 'Pilihan paling populer dengan pengerjaan cepat dan garansi nilai.',
    features: [
      { text: 'Pengerjaan 1-2 hari (prioritas)', available: true },
      { text: 'Revisi mayor 1x', available: true },
      { text: 'Konsultasi via chat/call', available: true },
      { text: 'Cek plagiarisme (Turnitin)', available: true },
      { text: 'Garansi nilai bagus', available: true },
    ],
    isPopular: true,
    color: 'brand-cyan',
  },
  {
    name: 'Kilat',
    price: '150k',
    priceValue: 150000,
    description: 'Untuk kamu yang butuh tugas selesai super cepat di bawah 24 jam.',
    features: [
      { text: 'Pengerjaan <24 jam (super kilat)', available: true },
      { text: 'Revisi cepat 2x', available: true },
      { text: 'Dukungan penuh 24/7', available: true },
      { text: 'Cek plagiarisme + Laporan', available: true },
      { text: 'Garansi nilai maksimal', available: true },
    ],
    isPopular: false,
    color: 'brand-cyan',
  },
    {
    name: 'Skripsi',
    price: 'Nego',
    priceValue: 0, // Harga dinegosiasikan
    description: 'Pendampingan lengkap pengerjaan skripsi dari proposal hingga sidang.',
    features: [
      { text: 'Pengerjaan per bab', available: true },
      { text: 'Bimbingan intensif', available: true },
      { text: 'Revisi tanpa batas', available: true },
      { text: 'Analisis data (SPSS, etc)', available: true },
      { text: 'Persiapan slide presentasi', available: true },
    ],
    isPopular: false,
    color: 'brand-cyan',
  },
];

/**
 * Komponen yang bertanggung jawab untuk menampilkan semua kartu paket
 * dalam tata letak grid yang responsif.
 */
const Packages: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg) => (
          <PackageCard key={pkg.name} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
