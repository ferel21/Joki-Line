import React, { useState, useEffect, useCallback } from 'react';
import type { Testimonial } from '../../types';
import TestimonialCard from './TestimonialCard';
import SliderControls from './SliderControls';

const testimonials: Testimonial[] = [
  {
    quote: "Gila sih, Joki Line penyelamat banget di saat deadline skripsi mepet. Pengerjaannya cepet dan hasilnya memuaskan banget. Recommended!",
    name: 'Ahmad Subagja',
    role: 'Mahasiswa Tingkat Akhir',
    university: 'Universitas Teknologi Canggih',
    avatar: 'https://i.pravatar.cc/150?u=ahmad'
  },
  {
    quote: "Awalnya ragu, tapi setelah coba paket Premium, tugas makalahku dapet nilai A! Konsultasinya juga enak, bener-bener dibantu sampai paham. Mantap!",
    name: 'Citra Lestari',
    role: 'Mahasiswi Semester 5',
    university: 'Institut Komunikasi Bangsa',
    avatar: 'https://i.pravatar.cc/150?u=citra'
  },
  {
    quote: "Untuk tugas-tugas programming yang bikin pusing, Joki Line solusinya. Codenya rapi dan dijelasin alurnya. Hemat waktu dan tenaga banget.",
    name: 'Budi Santoso',
    role: 'Mahasiswa',
    university: 'Sekolah Tinggi Manajemen Informatika',
    avatar: 'https://i.pravatar.cc/150?u=budi'
  },
  {
    quote: "Analisis data buat tesisku dibantuin sampai tuntas. Timnya sabar banget jawabin semua pertanyaanku. Nilai A+ di tangan!",
    name: 'Dewi Anggraini',
    role: 'Mahasiswi S2',
    university: 'Universitas Riset Nasional',
    avatar: 'https://i.pravatar.cc/150?u=dewi'
  }
];

const AUTOPLAY_INTERVAL = 5000; // 5 detik

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fungsi untuk ke slide berikutnya
  const next = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  // Fungsi untuk ke slide sebelumnya
  const prev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Efek untuk auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, AUTOPLAY_INTERVAL);

    // Cleanup timer saat komponen unmount
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="container mx-auto">
      <div className="relative h-96">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            testimonial={testimonial} 
            isActive={index === activeIndex} 
          />
        ))}
      </div>
      <SliderControls prev={prev} next={next} />
    </div>
  );
};

export default Testimonials;
