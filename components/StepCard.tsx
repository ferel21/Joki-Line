import React from 'react';
import type { HowItWorksStep } from '../types';
import useScrollAnimation from '../utils/hooks/useScrollAnimation';

interface StepCardProps {
    step: HowItWorksStep;
    index: number;
}

/**
 * Komponen untuk menampilkan satu kartu langkah dalam bagian "Cara Kerja".
 * Menggunakan hook useScrollAnimation untuk memicu animasi saat terlihat.
 */
const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

    return (
        <div 
            ref={ref}
            className={`text-center p-6 bg-brand-dark rounded-lg border border-brand-light-gray transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-light-gray mx-auto mb-6 border-2 border-brand-cyan/50">
                {step.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-brand tracking-wider">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
        </div>
    );
};

export default StepCard;