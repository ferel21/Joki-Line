import React, { useState } from 'react';
import type { ServiceCategory } from '../types';
import PackageCard from './PackageCard';
import ServiceDetailModal from './ServiceDetailModal';
import {
  PresentationChartLineIcon,
  DocumentTextIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  AcademicCapIcon,
} from './Icons';

// Data untuk berbagai kategori layanan yang ditawarkan
const serviceCategories: ServiceCategory[] = [
  {
    name: 'Tugas Tulis & PPT',
    icon: <PresentationChartLineIcon className="w-8 h-8 text-brand-cyan" />,
    description: 'Pembuatan esai, makalah, ringkasan, dan presentasi (PPT) yang terstruktur dan informatif.',
    items: [
      { title: 'Menulis (Tanpa Materi)', price: 'Mulai dari 40k' },
      { title: 'Menulis (Dengan Materi)', price: 'Mulai dari 30k' },
      { title: 'Pembuatan PPT (Tanpa Materi)', price: 'Mulai dari 50k' },
      { title: 'Pembuatan PPT (Dengan Materi)', price: 'Mulai dari 35k' },
    ],
    color: 'brand-cyan',
    ctaText: 'Lihat Harga',
  },
  {
    name: 'Makalah & Analisis',
    icon: <DocumentTextIcon className="w-8 h-8 text-brand-cyan" />,
    description: 'Penyusunan makalah, laporan, dan analisis data mendalam untuk berbagai keperluan akademik.',
    items: [
        { title: 'Makalah (SMA)', price: 'Mulai dari 75k' },
        { title: 'Makalah (Universitas)', price: 'Mulai dari 100k' },
        { title: 'Analisis Jurnal', price: 'Mulai dari 80k' },
        { title: 'Laporan Praktikum', price: 'Mulai dari 90k' },
    ],
    color: 'brand-cyan',
    ctaText: 'Lihat Harga',
  },
    {
    name: 'Tugas Coding',
    icon: <CodeBracketIcon className="w-8 h-8 text-brand-cyan" />,
    description: 'Bantuan pengerjaan tugas coding, perbaikan bug, dan pembuatan program sederhana.',
    items: [
      { title: 'Python', price: 'Nego' },
      { title: 'HTML & CSS', price: 'Nego' },
      { title: 'Javascript', price: 'Nego' },
      { title: 'PHP', price: 'Nego' },
    ],
    color: 'brand-cyan',
    ctaText: 'Lihat Harga',
  },
  {
    name: 'Desain UI/UX & Mockup',
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-brand-cyan" />,
    description: 'Desain antarmuka aplikasi mobile atau web yang modern dan user-friendly menggunakan Figma.',
    items: [
        { title: 'Desain Aplikasi Mobile', price: 'Mulai dari 150k' },
        { title: 'Desain Website', price: 'Mulai dari 120k' },
        { title: 'Revisi Desain', price: 'Mulai dari 75k' },
    ],
    color: 'brand-cyan',
    ctaText: 'Lihat Harga',
  },
  {
    name: 'Website Sederhana',
    icon: <CpuChipIcon className="w-8 h-8 text-brand-cyan" />,
    description: 'Pembuatan website profil, portofolio, atau landing page sederhana dengan cepat.',
    items: [
        { title: 'Website Statis', price: 'Mulai dari 200k' },
        { title: 'Landing Page', price: 'Mulai dari 180k' },
    ],
    color: 'brand-cyan',
    ctaText: 'Lihat Harga',
  },
  {
    name: 'Tugas Kuliah Umum',
    icon: <AcademicCapIcon className="w-8 h-8 text-brand-cyan" />,
    description: 'Pengerjaan tugas-tugas mata kuliah umum seperti Agama, PKN, dan lainnya.',
    items: [
        { title: 'Resume', price: 'Mulai dari 25k' },
        { title: 'Jawaban Esai', price: 'Mulai dari 30k' },
        { title: 'Tugas Kelompok', price: 'Nego' },
    ],
    color: 'brand-cyan',
    ctaText: 'Lihat Harga',
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
