import React from 'react';
import Testimonials from '../components/testimonials/Testimonials';

const TestimonialsPage: React.FC = () => {
  return (
    <section id="testimoni" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-gray/50 backdrop-blur-sm animate-fade-in-up">
         <div className="container mx-auto">
             <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-4 font-brand tracking-wider">
              Kata Mereka Tentang Kami
             </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
              Lihat apa yang dikatakan para pelanggan setia kami tentang kualitas dan keandalan Joki Line.
            </p>
            <Testimonials />
        </div>
    </section>
  );
};

export default TestimonialsPage;