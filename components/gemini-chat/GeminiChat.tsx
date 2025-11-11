import React, { useState, useRef, useEffect } from 'react';
import { askJokiAI } from '../../services/geminiService';
import { SendIcon } from '../Icons';
import type { ChatMessage as ChatMessageType } from '../../types';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import ExamplePrompts from './ExamplePrompts';

const GeminiChat: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [history, setHistory] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Efek untuk auto-scroll ke pesan terbaru
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history, isLoading]);

  const handlePromptSelect = (selectedPrompt: string) => {
    setPrompt(selectedPrompt);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const userMessage: ChatMessageType = { role: 'user', content: prompt };
    setHistory(prev => [...prev, userMessage]);
    setPrompt('');
    setIsLoading(true);
    setError('');

    try {
      const aiResponse = await askJokiAI(prompt);
      const modelMessage: ChatMessageType = { role: 'model', content: aiResponse };
      setHistory(prev => [...prev, modelMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan tidak diketahui.';
      setError(errorMessage);
      const modelErrorMessage: ChatMessageType = { role: 'model', content: errorMessage };
      setHistory(prev => [...prev, modelErrorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-brand-gray border border-brand-light-gray rounded-xl shadow-2xl shadow-brand-cyan/10 flex flex-col h-[600px]">
        {/* Header Chat */}
        <div className="p-4 border-b border-brand-light-gray text-center">
            <h3 className="font-bold text-white">Asisten Joki AI</h3>
            <p className="text-xs text-gray-400">Dapatkan petunjuk untuk tugasmu</p>
        </div>

        {/* Kontainer Pesan Chat */}
        <div ref={chatContainerRef} className="flex-grow p-6 space-y-6 overflow-y-auto">
          {history.length === 0 && !isLoading && (
            <div className="text-center text-gray-500">
                <p>Belum ada percakapan. Mulai dengan bertanya sesuatu!</p>
            </div>
          )}
          {history.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))}
          {isLoading && <TypingIndicator />}
          {error && <p className="text-red-400 text-center text-sm">{error}</p>}
        </div>
        
        {/* Contoh Pertanyaan (hanya jika chat kosong) */}
        {history.length === 0 && (
            <ExamplePrompts onPromptClick={handlePromptSelect} isDisabled={isLoading} />
        )}

        {/* Input Form */}
        <div className="p-4 border-t border-brand-light-gray mt-auto">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Tulis pertanyaanmu di sini..."
                className="w-full bg-brand-dark border border-brand-light-gray rounded-lg py-3 pl-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-shadow"
                disabled={isLoading}
                aria-label="Input pesan"
              />
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full text-gray-400 hover:text-brand-cyan disabled:hover:text-gray-400 disabled:cursor-not-allowed transition-colors"
                aria-label="Kirim pesan"
              >
                <SendIcon className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeminiChat;
