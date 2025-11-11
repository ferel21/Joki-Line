import React from 'react';
import type { Package } from '../../types';
import { StarIcon } from '../Icons';
import FeatureListItem from './FeatureListItem';
import { createPackageOrderLink } from '../../utils/constants';

// Definisi kelas warna yang dapat digunakan kembali
const colorClasses = {
  'brand-cyan': {
    bg: 'bg-brand-cyan',
    hoverBg: 'hover:bg-cyan-600',
    text: 'text-brand-cyan',
    border: 'border-brand-cyan',
    shadow: 'shadow-brand-cyan/20'
  }
};

/**
 * Komponen untuk menampilkan detail satu paket layanan.
 * Kartu ini menyoroti nama, harga, fitur, dan tombol ajakan bertindak (CTA).
 * Paket populer memiliki gaya visual yang berbeda.
 */
const PackageCard: React.FC<Package> = ({ name, price, description, features, isPopular, color }) => {
  const selectedColor = colorClasses[color];
  const whatsappLink = createPackageOrderLink(name);

  return (
    <div className={`
      relative flex flex-col bg-brand-gray border border-brand-light-gray rounded-xl p-8 
      transform transition-all duration-300 hover:scale-105 hover:border-brand-cyan
      ${isPopular ? `border-2 ${selectedColor.border} animate-glow` : ''}
    `}>
      {/* Lencana 'Paling Laris' untuk paket populer */}
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center" aria-hidden="true">
            <div className={`inline-flex items-center ${selectedColor.bg} text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg`}>
                <StarIcon className="w-4 h-4 mr-1.5"/>
                Paling Laris
            </div>
        </div>
      )}
      
      <div className="flex-grow">
        {/* Nama dan Harga Paket */}
        <h3 className={`text-2xl font-bold font-brand tracking-wider ${selectedColor.text}`}>{name}</h3>
        <p className="mt-4">
          <span className="text-5xl font-extrabold text-white">{price}</span>
          <span className="text-lg font-medium text-gray-400">/tugas</span>
        </p>
        <p className="mt-2 text-sm text-gray-400 h-10">{description}</p>
        
        {/* Daftar Fitur Paket */}
        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <FeatureListItem key={index} feature={feature} colorClass={selectedColor.text} />
          ))}
        </ul>
      </div>
      
      {/* Tombol Aksi (Pilih Paket) */}
      <div className="mt-10">
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`w-full text-center block ${selectedColor.bg} text-white font-bold py-3 px-6 rounded-lg text-lg ${selectedColor.hoverBg} transition-colors duration-300 transform hover:scale-105`}
          aria-label={`Pilih paket ${name}`}
        >
          Pilih Paket
        </a>
      </div>
    </div>
  );
};

export default PackageCard;
