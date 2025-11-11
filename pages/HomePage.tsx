import React from 'react';
import { BookOpenIcon, PencilIcon, AcademicCapIcon } from '../components/Icons';

const HomePage: React.FC = () => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '#/paket';
  };

  return (
    <section className="relative text-center py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden animate-fade-in-up">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Ilustrasi */}
        <div className="flex justify-center items-center space-x-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <BookOpenIcon className="w-16 h-16 text-brand-cyan opacity-80 animate-float" style={{ animationDelay: '0s' }} />
            <PencilIcon className="w-20 h-20 text-brand-cyan opacity-90 animate-float" style={{ animationDelay: '0.2s' }}/>
            <AcademicCapIcon className="w-16 h-16 text-brand-cyan opacity-80 animate-float" style={{ animationDelay: '0.4s' }}/>
        </div>
        
        {/* Judul */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-cyan leading-tight font-brand tracking-wide animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            SELAMAT DATANG DI JOKI LINE
        </h1>

        {/* Paragraf Deskripsi */}
        <p 
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          Layanan joki tugas terpercaya untuk mahasiswa sibuk. Dari tugas harian hingga skripsi, kami bantu selesaikan dengan cepat, aman, dan berkualitas tinggi. Mulai dari 40k saja!
        </p>

        {/* Tombol Aksi */}
        <div 
          className="mt-10 animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          <a
            href="#/paket"
            onClick={handleNavClick}
            className="inline-block bg-brand-cyan text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Pilih Paket Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;