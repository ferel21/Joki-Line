import React, { useState, useEffect } from 'react';
import { DEFAULT_CONTACT_MESSAGE, createWhatsAppLink } from '../../utils/constants';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';
import { MenuIcon, XMarkIcon } from '../Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Efek untuk mendeteksi scroll dan mengubah tampilan header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
      setIsOpen(false);
  };

  const contactLink = createWhatsAppLink(DEFAULT_CONTACT_MESSAGE);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-gray/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0" aria-label="Joki Line Home">
            <h1 className="text-3xl font-bold text-brand-cyan font-brand tracking-wider">
              JOKI LINE
            </h1>
          </a>
          
          {/* Navigasi Desktop */}
          <nav className="hidden md:block">
            <NavLinks onLinkClick={handleLinkClick} />
          </nav>
          
          {/* Tombol CTA Desktop */}
          <a 
            href={contactLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:block bg-brand-cyan text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-cyan-600 transition-colors duration-300 transform hover:scale-105"
          >
              Hubungi Kami
          </a>
          
          {/* Tombol Menu Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-brand-light-gray inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Tutup menu utama" : "Buka menu utama"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XMarkIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Konten Menu Mobile */}
      <MobileMenu isOpen={isOpen} onLinkClick={handleLinkClick} contactLink={contactLink} />
    </header>
  );
};

export default Header;