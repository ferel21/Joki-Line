import React from 'react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
    isOpen: boolean;
    onLinkClick: () => void;
    contactLink: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onLinkClick, contactLink }) => {
    if (!isOpen) return null;

    return (
        <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLinks onLinkClick={onLinkClick} isMobile={true} />
                <a 
                    href={contactLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-brand-cyan text-white font-semibold block w-full text-center mt-2 px-4 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
                >
                    Hubungi Kami
                </a>
            </div>
        </div>
    );
};

export default MobileMenu;
