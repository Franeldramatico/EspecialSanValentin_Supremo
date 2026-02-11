import React from 'react';
import { FranciscoEmotion } from '../types';
import { Sparkles } from 'lucide-react';

const IMAGE_MAP: Record<FranciscoEmotion, string> = {
  [FranciscoEmotion.PRESENTATION]: "/images/Francisco-Presentacion.png",
  [FranciscoEmotion.GALAN]: "/images/Francisco%20galan.png",
  [FranciscoEmotion.ORGULLOSO]: "/images/Francisco%20orgulloso.png",
  [FranciscoEmotion.SARCASMO]: "/images/Francisco%20sarcasmo.png",
  [FranciscoEmotion.FELIZ]: "/images/Francisco%20feliz.png",
  [FranciscoEmotion.FINGIDA_INDIFERENCIA]: "/images/Francisco%20Fingida%20indiferencia.png",
  [FranciscoEmotion.SORPRENDIDO]: "/images/Francisco%20sorprendido.png",
  [FranciscoEmotion.CONFUNDIDO]: "/images/Francisco%20confundido.png",
  [FranciscoEmotion.SONROJADO]: "/images/Francisco%20sonrojado.png",
  [FranciscoEmotion.TIMIDEZ]: "/images/Francisco%20timidez.png",
  [FranciscoEmotion.ENOJADO]: "/images/Francisco%20enojado.png",
  [FranciscoEmotion.SUPER_ENOJADO]: "/images/Francisco%20super%20enojado.png",
  [FranciscoEmotion.DECEPCIONADO]: "/images/Francisco%20decepcionado.png",
};

interface CharacterImageProps {
  emotion: FranciscoEmotion;
}

export const CharacterImage: React.FC<CharacterImageProps> = ({ emotion }) => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-end justify-center">

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-valentine-100/50 via-transparent to-transparent z-0 pointer-events-none"></div>

      {/* Animated Blobs for vibe */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-valentine-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 w-full max-w-md h-full flex flex-col justify-end items-center transition-all duration-700">

        {/* Floating Sparkles */}
        <div className="absolute top-20 right-10 text-yellow-400 animate-pulse-slow">
          <Sparkles size={24} />
        </div>
        <div className="absolute bottom-1/3 left-10 text-valentine-400 animate-float">
          <Sparkles size={16} />
        </div>

        {/* The Image Itself */}
        <img
          key={emotion} // Forces re-render animation
          src={`${baseUrl}${IMAGE_MAP[emotion].startsWith('/') ? IMAGE_MAP[emotion].slice(1) : IMAGE_MAP[emotion]}`}
          onError={(e) => {
            console.error(`Error loading image: ${e.currentTarget.src}`);
            e.currentTarget.style.display = 'none';
          }}
          alt={`Francisco feeling ${emotion}`}
          className="w-auto h-auto max-h-[85vh] object-contain drop-shadow-2xl animate-fade-in-up mask-image-gradient"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
          }}
        />

        {/* Stylish Nameplate */}
        <div className="absolute bottom-8 bg-white/30 backdrop-blur-md border border-white/50 px-8 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform cursor-default">
          <span className="font-hand text-3xl text-valentine-600 drop-shadow-sm tracking-wide">Francisco el cupido</span>
        </div>
      </div>
    </div>
  );
};
