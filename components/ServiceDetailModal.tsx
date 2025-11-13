import React, { useEffect } from 'react';
import type { ServiceCategory } from '../types';
import { XMarkIcon } from './Icons';
import { createServiceItemOrderLink } from '../utils/constants';

interface ServiceDetailModalProps {
    isOpen: boolean;
    service: ServiceCategory | null;
    onClose: () => void;
}

/**
 * Komponen modal yang menampilkan detail daftar layanan dan harga
 * untuk sebuah kategori yang dipilih.
 */
const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ isOpen, service, onClose }) => {
    // Efek untuk menutup modal dengan tombol 'Escape'
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen || !service) return null;

    return (
        <div 
            className="fixed inset-0 bg-brand-dark bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up"
            style={{ animationDuration: '0.3s' }}
            onClick={onClose} // Menutup modal saat mengklik latar belakang
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-brand-gray border border-brand-light-gray/80 rounded-xl shadow-2xl shadow-brand-cyan/20 w-full max-w-lg relative"
                onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat mengklik di dalam modal
            >
                {/* Header Modal */}
                <div className="flex items-start justify-between p-5 border-b border-brand-light-gray/50">
                    <div>
                        <h3 className="text-xl font-bold font-brand tracking-wider text-brand-cyan">{service.name}</h3>
                        <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Tutup modal">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Daftar Layanan */}
                <div className="p-6">
                    <ul className="space-y-4">
                        {service.items.map((item) => {
                            const whatsappLink = createServiceItemOrderLink(service.name, item.title);
                            return (
                                <li key={`${item.title}-${item.price}`} className="flex items-center justify-between p-4 bg-brand-dark rounded-lg border border-brand-light-gray/50 gap-4">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-white">{item.title}</h4>
                                        {item.description && <p className="text-xs text-gray-500 mt-1">{item.description}</p>}
                                        <p className="text-sm text-gray-400 mt-1">{item.price}</p>
                                    </div>
                                    <a 
                                      href={whatsappLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex-shrink-0 bg-brand-cyan text-white font-semibold px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-sm"
                                    >
                                        Pesan
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailModal;