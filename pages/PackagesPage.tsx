import React from 'react';
import Packages from '../components/packages/Packages';

const PackagesPage: React.FC = () => {
  return (
    <section id="paket" className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="container mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-4 font-brand tracking-wider">
              Layanan Kami
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
              Kami menawarkan berbagai layanan untuk memenuhi semua kebutuhan tugasmu. Pilih kategori untuk melihat rincian harga.
            </p>
            <Packages />
        </div>
    </section>
  );
};

export default PackagesPage;