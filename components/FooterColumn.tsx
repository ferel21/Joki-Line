import React from 'react';

interface FooterLink {
    name: string;
    href: string;
}

interface FooterColumnProps {
    title: string;
    links: FooterLink[];
}

/**
 * Komponen untuk menampilkan satu kolom tautan di footer.
 * Terdiri dari judul kolom dan daftar tautan.
 */
const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
    return (
        <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                {title}
            </h3>
            <ul className="mt-4 space-y-3">
                {links.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} className="text-base text-gray-400 hover:text-brand-cyan transition-colors">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;