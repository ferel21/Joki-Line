import React from 'react';
import { ChatIcon, DocumentIcon, ProcessIcon, DoneIcon } from './Icons';
import type { HowItWorksStep } from '../types';
import StepCard from './StepCard';

// Mendefinisikan langkah-langkah proses kerja dengan ikon yang sesuai
const steps: HowItWorksStep[] = [
  {
    icon: <ChatIcon className="w-10 h-10 text-brand-cyan"/>,
    title: '1. Hubungi Kami',
    description: 'Chat kami via WhatsApp dan ceritakan detail tugas yang kamu butuhkan.'
  },
  {
    icon: <DocumentIcon className="w-10 h-10 text-brand-cyan"/>,
    title: '2. Kirim Detail Tugas',
    description: 'Kirimkan semua file, brief, dan deadline tugasmu agar kami bisa segera memproses.'
  },
  {
    icon: <ProcessIcon className="w-10 h-10 text-brand-cyan"/>,
    title: '3. Proses Pengerjaan',
    description: 'Tim profesional kami akan langsung mengerjakan tugasmu sesuai standar terbaik.'
  },
  {
    icon: <DoneIcon className="w-10 h-10 text-brand-cyan"/>,
    title: '4. Tugas Selesai!',
    description: 'Kami akan mengirimkan hasil tugas yang sudah selesai tepat waktu. Kamu tinggal review!'
  }
];

/**
 * Komponen section yang menjelaskan alur kerja layanan Joki Line.
 * Menampilkan serangkaian langkah dalam grid yang responsif.
 */
const HowItWorks: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;