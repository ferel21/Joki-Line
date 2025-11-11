import React from 'react';

interface AnimatedHeadlineProps {
    text: string;
}

const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({ text }) => {
    return (
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight font-brand tracking-wide">
            {text.split(' ').map((word, index) => {
                const isHighlighted = word.includes('Mepet?');
                return (
                    <span key={index} className="inline-block" style={{ animation: `fadeInUp 0.5s ${index * 0.1}s ease-out forwards`, opacity: 0 }}>
                        <span className={isHighlighted ? 'text-brand-cyan' : ''}>
                            {word}
                        </span>
                        {' '}
                    </span>
                );
            })}
        </h2>
    );
};

export default AnimatedHeadline;
