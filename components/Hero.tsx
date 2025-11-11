import React from 'react';
import { createWhatsAppLink, FREE_CONSULTATION_MESSAGE } from '../utils/constants';
import AnimatedHeadline from './AnimatedHeadline';

const Hero: React.FC = () => {
  const consultationLink = createWhatsAppLink(FREE_CONSULTATION_MESSAGE);

  return (
    <section className="relative text-center py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10">
        <AnimatedHeadline text="Tugas Numpuk? Deadline Mepet?" />
        
        <p 
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300"
          style={{ animation: 'fadeInUp 0.5s 0.5s ease-out forwards', opacity: 0 }}
        >
          Tenang, <span className="font-semibold text-white">Joki Line</span> hadir sebagai solusi andalan untuk semua tugas kuliah dan sekolahmu. Cepat, terpercaya, dan anti-pusing!
        </p>

        <div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'fadeInUp 0.5s 0.7s ease-out forwards', opacity: 0 }}
        >
          <a
            href="#/paket"
            className="w-full sm:w-auto bg-brand-cyan text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 animate-float"
          >
            Lihat Paket
          </a>
          <a
            href={consultationLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-light-gray text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-700 transition-colors duration-300"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;