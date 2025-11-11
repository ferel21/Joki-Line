import React, { useState, useEffect } from 'react';
import type { ChatMessage as ChatMessageType } from '../types';
import ChatMessage from '../components/ChatMessage';

const CHAT_HISTORY_KEY = 'joki_line_chat_history';

interface AdminDashboardPageProps {
  onLogout: () => void;
}

const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ onLogout }) => {
  const [chatHistory, setChatHistory] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(CHAT_HISTORY_KEY);
      if (savedHistory) {
        setChatHistory(JSON.parse(savedHistory));
      }
    } catch (error) {
      console.error("Failed to load chat history from localStorage", error);
    }
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-white font-brand tracking-wider">
            Admin Dashboard
          </h2>
          <button
            onClick={onLogout}
            className="bg-brand-light-gray text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            Logout
          </button>
        </div>

        {/* Card Riwayat Chat */}
        <div className="bg-brand-gray/80 backdrop-blur-sm border border-brand-light-gray/50 rounded-xl shadow-lg">
            <div className="p-4 border-b border-brand-light-gray/50">
                <h3 className="font-bold text-white">Riwayat Chat Joki AI</h3>
                <p className="text-xs text-gray-400">Menampilkan percakapan yang tersimpan di browser ini.</p>
            </div>
            <div className="p-6 h-96 overflow-y-auto space-y-4">
                {chatHistory.length > 0 ? (
                    chatHistory.map((msg, index) => (
                        <ChatMessage key={index} message={msg} />
                    ))
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">Belum ada riwayat percakapan.</p>
                    </div>
                )}
            </div>
        </div>

      </div>
    </section>
  );
};

export default AdminDashboardPage;