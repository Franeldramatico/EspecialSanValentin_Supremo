import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause } from 'lucide-react';
import Swal from 'sweetalert2';

export const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const I_AM_YOU = new URL('../musica-audio/I am YOU.mp3', import.meta.url).href;
  const EMINEM_FACK = new URL('../musica-audio/Eminem - FACK (Audio).mp3', import.meta.url).href;

  const togglePlay = () => {
    if (audioRef.current) {
      const nextCount = clickCount + 1;
      setClickCount(nextCount);

      if (nextCount === 11) {
        Swal.fire({
          title: 'Elige tu vibe musical 💿',
          html: '',
          background: '#ffe4e6',
          color: '#9f1239',
          showDenyButton: true,
          confirmButtonText: 'Opción 1',
          denyButtonText: 'Opción UwU',
          confirmButtonColor: '#fb7185',
          denyButtonColor: '#a7f3d0'
        }).then(result => {
          if (!audioRef.current) return;
          if (result.isConfirmed) {
            audioRef.current.src = I_AM_YOU;
          } else if (result.isDenied) {
            audioRef.current.src = EMINEM_FACK;
          }
          audioRef.current.play().catch(() => {});
          setIsPlaying(true);
        });
        return;
      }

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed (interaction needed):", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Set initial volume low
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-fade-in-up">
      <audio 
        ref={audioRef} 
        loop 
        src={I_AM_YOU}
      />
      
      <button
        onClick={togglePlay}
        className={`group relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-500 overflow-hidden ${
          clickCount >= 10
            ? 'bg-green-200'
            : isPlaying
              ? 'bg-valentine-400 rotate-180'
              : 'bg-white/80 hover:bg-valentine-100'
        }`}
        title={isPlaying ? "Pausar música" : "Reproducir música romántica"}
      >
        {/* Animated rings when playing */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-30"></div>
        )}
        
        <div className={`relative z-10 transition-colors duration-300 ${isPlaying ? 'text-white' : 'text-valentine-500'}`}>
          {isPlaying ? <Pause size={24} fill="currentColor" /> : <Music size={24} />}
        </div>
      </button>

      {/* Floating Note Particles (Decorative) */}
      {isPlaying && (
        <>
           <div className="absolute -top-4 -right-2 text-valentine-500 animate-float opacity-0 text-sm">♪</div>
           <div className="absolute -top-8 left-0 text-valentine-400 animate-float opacity-0 animation-delay-500 text-lg">♫</div>
        </>
      )}
    </div>
  );
};
