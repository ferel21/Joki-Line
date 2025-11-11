import React from 'react';

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

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const href = e.currentTarget.getAttribute('href');
        
        // Hanya tangani tautan hash internal untuk routing
        if (href && href.startsWith('#/')) {
            // Mencegah perilaku default tautan agar kita bisa menanganinya secara manual
            e.preventDefault();
            // Perbarui hash URL secara manual, ini akan memicu listener di App.tsx
            window.location.hash = href;
        }
        
        // Panggil fungsi asli, yang digunakan untuk menutup menu mobile
        onLinkClick();
    };

    if (isMobile) {
        return (
            <>
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={handleNavClick}
                        className="text-gray-300 hover:bg-brand-light-gray hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </>
        );
    }

    return (
        <div className="ml-10 flex items-baseline space-x-4">
            {NAV_LINKS.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-gray-300 hover:bg-brand-light-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};

export default NavLinks;