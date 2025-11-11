import React from 'react';

interface ExamplePromptsProps {
    onPromptClick: (prompt: string) => void;
    isDisabled: boolean;
}

const prompts = [
    "Jelasin dong apa itu metode penelitian kualitatif",
    "Kasih ide judul skripsi tentang marketing dong",
    "Gimana cara bikin kutipan APA style?",
];

/**
 * Komponen untuk menampilkan daftar contoh prompt yang dapat diklik oleh pengguna.
 */
const ExamplePrompts: React.FC<ExamplePromptsProps> = ({ onPromptClick, isDisabled }) => {
    return (
        <div className="mt-4 flex flex-wrap justify-center gap-2 px-6">
            {prompts.map((prompt, index) => (
                <button
                    key={index}
                    onClick={() => onPromptClick(prompt)}
                    disabled={isDisabled}
                    className="px-3 py-1.5 text-xs bg-brand-light-gray text-gray-300 rounded-full hover:bg-brand-cyan hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {prompt}
                </button>
            ))}
        </div>
    );
};

export default ExamplePrompts;
