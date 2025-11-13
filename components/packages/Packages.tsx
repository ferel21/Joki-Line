import React, { useState } from 'react';
import type { ServiceCategory } from '../../types';
import PackageCard from '../PackageCard';
import ServiceDetailModal from '../ServiceDetailModal';
import {
  PresentationChartLineIcon,
  DocumentTextIcon,
  CpuChipIcon,
  CodeBracketIcon,
  PencilIcon,
} from '../Icons';

// Data untuk berbagai kategori layanan yang ditawarkan, sesuai dengan catatan pengguna
const serviceCategories: ServiceCategory[] = [
  {
    name: 'Tugas Menulis',
    icon: <PencilIcon className="w-8 h-8 text-brand-cyan" />,
    description: 'Layanan penulisan esai, laporan, dan tugas tulis lainnya dengan berbagai opsi sesuai kebutuhanmu.',
    items: [
      { title: 'Menulis (Tanpa Materi)', price: 'Rp 5k / halaman' },
      { title: 'Menulis (Dengan Materi)', price: 'Rp 3k / halaman' },
      { title: 'Laporan Kerja Praktek', price: 'Rp 100k - 150k' },
    ],
    color: 'brand-cyan',
    ctaText: 'Lihat Detail Harga',
  },
  {
    name: 'Tugas PPT',
    icon: <PresentationChartLineIcon className="w-8 h-8 text-brand-cyan" />,
    description: 'Pembuatan presentasi PowerPoint (PPT) yang menarik dan informatif, baik dengan materi atau tanpa.',
    items: [
      { title: 'PPT (Tanpa Materi)', price: 'Rp 5k / slide' },
      { title: 'PPT (Dengan Materi)', price: 'Rp 4k / slide' },
    ],
    color: 'brand-cyan',
    ctaText: 'Lihat Detail Harga',
  },
  {
    name: 'Tugas Makalah & Artikel',
    icon: <DocumentTextIcon className="w-8 h-8 text-brand-cyan" />,
    description: 'Penyusunan makalah dan artikel ilmiah yang terstruktur, lengkap dengan referensi.',
    items: [
      { title: 'Makalah / Artikel', price: 'Rp 50k', description: 'Untuk 1-15 halaman' },
      { title: 'Makalah / Artikel', price: 'Rp 75k - 100k', description: 'Untuk 16-30 halaman' },
    ],
    color: 'brand-cyan',
    ctaText: 'Lihat Detail Harga',
  },
  {
    name: 'Analisis Sentimen',
    icon: <CpuChipIcon className="w-8 h-8 text-brand-cyan" />,
    description: 'Layanan analisis data, termasuk scraping, analisis sentimen, dan deteksi emosi.',
    items: [
      { 
        title: 'Analisis Data & Sentimen', 
        price: 'Mulai dari Rp 100k',
        description: 'Pilih topik, scraping, analisis sentimen, deteksi emosi'
      },
    ],
    color: 'brand-cyan',
    ctaText: 'Lihat Detail Harga',
  },
  {
    name: 'Tugas Website & UI/UX',
    icon: <CodeBracketIcon className="w-8 h-8 text-brand-cyan" />,
    description: 'Pembuatan website dari statis hingga dinamis, serta desain UI/UX untuk aplikasi.',
    items: [
      { title: 'UI/UX Design (Mobile)', price: 'Rp 30k - 100k / Layer' },
      { title: 'UI/UX Design (PC)', price: 'Rp 50k - 100k / Layer' },
      { title: 'Website Statis', price: 'Rp 50k - 150k' },
      { title: 'Website Dinamis', price: 'Rp 100k - 250k' },
      { title: 'Website (Dashboard Admin)', price: 'Rp 200k - 400k' },
    ],
    color: 'brand-cyan',
    ctaText: 'Lihat Detail Harga',
  },
];


/**
 * Komponen yang bertanggung jawab untuk menampilkan semua kartu layanan
 * dan mengelola modal detail untuk setiap layanan.
 */
const Packages: React.FC = () => {
    // State untuk menyimpan layanan yang dipilih untuk ditampilkan di modal
    const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

    // Fungsi untuk mengatur layanan yang dipilih saat kartu diklik
    const handleSelectService = (service: ServiceCategory) => {
        setSelectedService(service);
    };

    // Fungsi untuk menutup modal
    const handleCloseModal = () => {
        setSelectedService(null);
    };

    return (
        <div className="container mx-auto">
            {/* Grid untuk menampilkan semua kartu layanan */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceCategories.map((service) => (
                    <PackageCard 
                        key={service.name} 
                        {...service} 
                        onSelect={() => handleSelectService(service)}
                    />
                ))}
            </div>

            {/* Modal untuk menampilkan detail layanan */}
            <ServiceDetailModal 
                service={selectedService}
                isOpen={!!selectedService}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default Packages;