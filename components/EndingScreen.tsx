import React from 'react';
import { RefreshCcw } from 'lucide-react';

interface EndingScreenProps {
  title: string;
  narrative: string;
  onRestart: () => void;
}

export const EndingScreen: React.FC<EndingScreenProps> = ({ title, narrative, onRestart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-valentine-50 via-pink-100 to-purple-100 text-gray-800 p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      <div className="max-w-2xl w-full z-10 text-center space-y-8">
        <div className="space-y-2">
          <p className="text-valentine-600 font-hand text-2xl tracking-wide uppercase">Final Desbloqueado</p>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-valentine-500 to-purple-500 pb-2">
            {title}
          </h1>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-md">
          <p className="text-lg md:text-xl leading-relaxed font-sans text-gray-700">
            {narrative}
          </p>
        </div>

        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-8 py-3 bg-valentine-600 hover:bg-valentine-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
        >
          <RefreshCcw size={20} />
          Jugar otra vez
        </button>
      </div>
    </div>
  );
};
