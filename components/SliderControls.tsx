import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface SliderControlsProps {
    prev: () => void;
    next: () => void;
}

/**
 * Komponen untuk kontrol navigasi (sebelumnya/berikutnya) pada slider.
 */
const SliderControls: React.FC<SliderControlsProps> = ({ prev, next }) => {
    return (
        <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
                onClick={prev} 
                className="p-2 rounded-full bg-brand-light-gray hover:bg-brand-cyan text-white transition-colors duration-300"
                aria-label="Testimoni Sebelumnya"
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button 
                onClick={next} 
                className="p-2 rounded-full bg-brand-light-gray hover:bg-brand-cyan text-white transition-colors duration-300"
                aria-label="Testimoni Berikutnya"
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>
        </div>
    );
};

export default SliderControls;