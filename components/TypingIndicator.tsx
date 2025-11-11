import React from 'react';
import { SparklesIcon } from './Icons';

/**
 * Komponen untuk menampilkan animasi "mengetik" atau "berpikir".
 * Memberikan feedback visual kepada pengguna bahwa AI sedang memproses permintaan.
 */
const TypingIndicator: React.FC = () => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center">
                <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <div className="max-w-md lg:max-w-lg rounded-xl px-4 py-3 bg-brand-light-gray flex items-center space-x-1.5">
                <span className="sr-only">Joki AI sedang berpikir...</span>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
        </div>
    );
};

export default TypingIndicator;