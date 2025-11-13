import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
    { name: 'Home', href: '#/' },
    { name: 'Paket', href: '#/paket' },
    { name: 'Cara Kerja', href: '#/cara-kerja' },
    { name: 'Tanya Joki', href: '#/tanya-joki' },
    { name: 'Testimoni', href: '#/testimoni' },
];

interface NavLinksProps {
    onLinkClick: () => void;
    isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick, isMobile = false }) => {
    const [activeRoute, setActiveRoute] = useState(window.location.hash || '#/');

    useEffect(() => {
        const handleHashChange = () => {
            setActiveRoute(window.location.hash || '#/');
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const navClass = isMobile 
        ? "text-gray-300 hover:bg-brand-light-gray hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
        : "text-gray-300 hover:bg-brand-light-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors";

    const activeClass = isMobile ? 'bg-brand-light-gray text-white' : 'text-brand-cyan font-semibold';

    const navLinks = NAV_LINKS.map((link) => {
        const isActive = activeRoute === link.href;
        return (
            <a
                key={link.name}
                href={link.href}
                onClick={onLinkClick}
                className={`${navClass} ${isActive ? activeClass : ''}`}
                aria-current={isActive ? 'page' : undefined}
            >
                {link.name}
            </a>
        );
    });

    if (isMobile) {
        return <>{navLinks}</>;
    }

    return (
        <div className="ml-10 flex items-baseline space-x-4">
            {navLinks}
        </div>
    );
};

export default NavLinks;