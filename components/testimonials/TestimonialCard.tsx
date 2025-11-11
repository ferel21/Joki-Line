import React from 'react';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
    testimonial: Testimonial;
    isActive: boolean;
}

/**
 * Komponen untuk menampilkan satu kartu testimoni.
 * Menggunakan properti `isActive` untuk mengontrol transisi fade-in/out.
 */
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive }) => {
    return (
        <div className={`
            absolute inset-0 w-full h-full flex items-center justify-center p-4
            transition-opacity duration-500 ease-in-out
            ${isActive ? 'opacity-100' : 'opacity-0'}
        `}>
            <div className="bg-brand-dark p-8 rounded-xl border border-brand-light-gray flex flex-col max-w-2xl mx-auto text-center">
                <p className="text-gray-300 italic text-lg flex-grow">"{testimonial.quote}"</p>
                <div className="mt-6 flex flex-col items-center">
                    <img 
                        className="w-16 h-16 rounded-full border-2 border-brand-cyan mb-4" 
                        src={testimonial.avatar} 
                        alt={`Avatar ${testimonial.name}`} 
                        loading="lazy"
                    />
                    <div className="text-center">
                        <p className="font-bold text-white text-lg">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                        <p className="text-xs text-brand-cyan font-brand tracking-wider mt-1">{testimonial.university}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
