import React from 'react';

const NAV_LINKS = [
    { name: 'Paket', href: '#paket' },
    { name: 'Cara Kerja', href: '#cara-kerja' },
    { name: 'Tanya Joki', href: '#tanya-joki' },
    { name: 'Testimoni', href: '#testimoni' },
];

interface NavLinksProps {
    onLinkClick: () => void;
    isMobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick, isMobile = false }) => {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: "smooth" });
        onLinkClick();
    };

    if (isMobile) {
        return (
            <>
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={handleScroll}
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
                    onClick={handleScroll}
                    className="text-gray-300 hover:bg-brand-light-gray hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};

export default NavLinks;
