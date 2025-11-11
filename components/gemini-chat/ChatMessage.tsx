import React from 'react';
import type { ChatMessage as ChatMessageType } from '../../types';
import { SparklesIcon } from '../Icons';

interface ChatMessageProps {
    message: ChatMessageType;
}

/**
 * Komponen untuk menampilkan satu pesan dalam antarmuka chat.
 * Memiliki gaya yang berbeda untuk pesan dari pengguna ('user') dan model AI ('model').
 */
const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
    const isModel = message.role === 'model';

    return (
        <div className={`flex items-start gap-4 ${isModel ? '' : 'justify-end'}`}>
            {isModel && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center">
                    <SparklesIcon className="w-5 h-5 text-white" />
                </div>
            )}
            <div className={`max-w-md lg:max-w-lg rounded-xl px-4 py-3 ${isModel ? 'bg-brand-light-gray text-gray-300' : 'bg-brand-cyan text-white'}`}>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
        </div>
    );
};

export default ChatMessage;
