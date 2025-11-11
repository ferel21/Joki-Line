import React from 'react';
import GeminiChat from '../components/GeminiChat';
import { SparklesIcon } from '../components/Icons';

const AskJokiPage: React.FC = () => {
  return (
    <section id="tanya-joki" className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="container mx-auto">
             <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center bg-brand-light-gray rounded-full p-1 mb-4">
                  <SparklesIcon className="w-6 h-6 text-brand-cyan" />
                  <span className="ml-2 text-sm font-medium text-brand-cyan mr-2">Powered by Gemini</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-4 font-brand tracking-wider">
                  Tanya Joki AI
                </h2>
                <p className="text-center text-gray-400 max-w-2xl mx-auto text-lg">
                  Punya pertanyaan singkat? Bingung mulai dari mana? Coba tanyakan pada asisten AI kami untuk mendapatkan petunjuk!
                </p>
            </div>
            <GeminiChat />
        </div>
    </section>
  );
};

export default AskJokiPage;
