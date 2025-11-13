import React from 'react';
import type { ServiceCategory } from '../types';

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

interface PackageCardProps extends ServiceCategory {
  onSelect: () => void;
}

/**
 * Komponen untuk menampilkan ringkasan satu kategori layanan.
 * Kartu ini menampilkan ikon, nama, deskripsi, dan tombol untuk melihat detail harga.
 * Didesain agar interaktif saat di-hover.
 */
const PackageCard: React.FC<PackageCardProps> = ({ name, icon, description, color, ctaText, onSelect }) => {
  const selectedColor = colorClasses[color];

  return (
    <div className={`
      flex flex-col bg-brand-gray/80 backdrop-blur-sm border border-brand-light-gray/50 rounded-xl p-6
      transform transition-all duration-300 hover:scale-[1.03] hover:border-brand-cyan hover:shadow-2xl hover:shadow-brand-cyan/20
    `}>
      <div className="flex-grow">
        {/* Header: Icon dan Nama */}
        <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 bg-brand-light-gray p-3 rounded-lg border border-brand-light-gray/80">
                {icon}
            </div>
            <h3 className={`text-xl font-bold font-brand tracking-wider ${selectedColor.text}`}>{name}</h3>
        </div>

        {/* Deskripsi */}
        <p className="text-sm text-gray-400 min-h-[60px]">{description}</p>
        
      </div>
      
      {/* Tombol Aksi */}
      <div className="mt-8">
        <button
          onClick={onSelect}
          className={`w-full text-center block ${selectedColor.bg} text-white font-bold py-3 px-6 rounded-lg text-lg ${selectedColor.hoverBg} transition-colors duration-300 transform hover:scale-105`}
          aria-label={`Lihat opsi harga untuk ${name}`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default PackageCard;