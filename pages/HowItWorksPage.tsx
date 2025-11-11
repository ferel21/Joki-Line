import React from 'react';
import HowItWorks from '../components/HowItWorks';

const HowItWorksPage: React.FC = () => {
  return (
    <section id="cara-kerja" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-gray animate-fade-in-up">
         <div className="container mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-4 font-brand tracking-wider">
              Gimana Cara Kerjanya?
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
              Cuma butuh 4 langkah mudah untuk menyelesaikan tugasmu bersama kami. Cepat, simpel, dan efisien.
            </p>
            <HowItWorks />
        </div>
    </section>
  );
};

export default HowItWorksPage;
