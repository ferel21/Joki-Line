import React from 'react';
import { WhatsappIcon, InstagramIcon } from './Icons';
import { INSTAGRAM_URL, DEFAULT_CONTACT_MESSAGE, createWhatsAppLink } from '../utils/constants';
import FooterColumn from './FooterColumn';

const serviceLinks = [
    { name: 'Tugas Tulis & PPT', href: '#/paket' },
    { name: 'Makalah & Analisis', href: '#/paket' },
    { name: 'Tugas Coding', href: '#/paket' },
    { name: 'Desain UI/UX', href: '#/paket' },
    { name: 'Website Sederhana', href: '#/paket' },
    { name: 'Tugas Kuliah Umum', href: '#/paket' },
];

const companyLinks = [
    { name: 'Tentang Kami', href: '#' },
    { name: 'Cara Kerja', href: '#/cara-kerja' },
    { name: 'Testimoni', href: '#/testimoni' },
];

const legalLinks = [
    { name: 'Kebijakan Privasi', href: '#' },
    { name: 'Syarat & Ketentuan', href: '#' },
];

const Footer: React.FC = () => {
  const contactLink = createWhatsAppLink(DEFAULT_CONTACT_MESSAGE);
  return (
    <footer className="bg-brand-gray/80 backdrop-blur-sm border-t border-brand-light-gray/50">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Kolom Branding */}
            <div className="md:col-span-1">
                <h3 className="text-2xl font-bold text-brand-cyan font-brand tracking-wider">
                    JOKI LINE
                </h3>
                <p className="mt-2 text-sm text-gray-400">Solusi Cepat, Tepat, dan Terpercaya untuk Tugasmu.</p>
                <div className="flex space-x-4 mt-4">
                    <a href={contactLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors" aria-label="WhatsApp Joki Line">
                        <WhatsappIcon className="w-7 h-7" />
                    </a>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors" aria-label="Instagram Joki Line">
                        <InstagramIcon className="w-7 h-7" />
                    </a>
                </div>
            </div>
            
            {/* Kolom Tautan */}
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                <FooterColumn title="Layanan" links={serviceLinks} />
                <FooterColumn title="Perusahaan" links={companyLinks} />
                <FooterColumn title="Legal" links={legalLinks} />
            </div>
        </div>

        {/* Bagian Hak Cipta */}
        <div className="mt-12 border-t border-brand-light-gray/50 pt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Joki Line. All Rights Reserved. Dibuat dengan &hearts; untuk para pejuang deadline.
              <span className="mx-2">|</span>
              <a href="#/admin" className="hover:text-brand-cyan transition-colors">Admin</a>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
