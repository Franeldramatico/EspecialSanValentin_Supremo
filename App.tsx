import React, { useState, useEffect, useRef } from 'react';
import { GameScreenState, GameStepData, FranciscoEmotion } from './types';
import { initializeGame, getStep } from './services/geminiService';
import { IntroScreen } from './components/IntroScreen';
import { NameInput } from './components/NameInput';
import { CharacterImage } from './components/CharacterImage';
import { EndingScreen } from './components/EndingScreen';
import { BackgroundMusic } from './components/BackgroundMusic';
import { Heart, ChevronRight, MapPin } from 'lucide-react';

// Background Animation Component
const FloatingHearts = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className={`absolute text-white/30 mix-blend-overlay animate-float`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 1.5}s`,
          fontSize: `${Math.random() * 40 + 20}px`,
          filter: 'blur(1px)'
        }}
      >
        <Heart fill="currentColor" />
      </div>
    ))}
  </div>
);

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameScreenState>(GameScreenState.INTRO);
  const [currentStep, setCurrentStep] = useState<GameStepData | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentStep]);

  const handleStartGame = () => {
    setGameState(GameScreenState.NAME_INPUT);
  };

  const handleNameConfirmed = () => {
    setGameState(GameScreenState.GAME_LOOP);
    const initialStep = initializeGame();
    setCurrentStep(initialStep);
  };

  const handleChoice = (nextStepId: string) => {
    setTimeout(() => {
      const nextStep = getStep(nextStepId);
      setCurrentStep(nextStep);
      if (nextStep.isEnding) {
        setGameState(GameScreenState.ENDING);
      }
    }, 250);
  };

  const handleRestart = () => {
    setGameState(GameScreenState.INTRO);
    setCurrentStep(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-valentine-50 via-pink-100 to-purple-100 animate-gradient-xy flex items-center justify-center p-0 md:p-6 relative transition-all duration-1000">
      <FloatingHearts />
      <BackgroundMusic />

      {/* Conditional Rendering */}
      {gameState === GameScreenState.INTRO && <IntroScreen onStart={handleStartGame} />}

      {gameState === GameScreenState.NAME_INPUT && <NameInput onNameConfirmed={handleNameConfirmed} />}

      {gameState === GameScreenState.ENDING && currentStep && (
        <EndingScreen
          title={currentStep.endingTitle || "Final"}
          narrative={currentStep.narrative || currentStep.dialogue}
          onRestart={handleRestart}
        />
      )}

      {/* GAME LOOP UI - Enhanced Visual Novel Style */}
      {gameState === GameScreenState.GAME_LOOP && (
        <div className="w-full h-screen md:h-[90vh] max-w-7xl glass-panel md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row relative z-10 transition-all duration-500">

          {/* --- LEFT: CHARACTER AREA --- */}
          <div className="w-full md:w-5/12 h-[45vh] md:h-full relative overflow-hidden">
            {/* Decorative radial gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-valentine-200/40 via-transparent to-transparent z-0"></div>

            {/* Location Tag */}
            <div className="absolute top-6 left-6 z-30 animate-fade-in-up">
              <div className="bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm flex items-center gap-2 text-valentine-800 font-semibold text-sm tracking-wide">
                <MapPin size={14} className="text-valentine-500" />
                Roma, Italia
              </div>
            </div>

            <CharacterImage emotion={currentStep?.emotion || FranciscoEmotion.GALAN} />
          </div>

          {/* --- RIGHT: STORY AREA --- */}
          <div className="w-full md:w-7/12 h-[55vh] md:h-full flex flex-col relative bg-white/30 backdrop-blur-sm">

            <div className="flex-grow flex flex-col p-6 md:p-12 overflow-y-auto custom-scrollbar scroll-smooth">

              <div key={currentStep?.id} className="flex flex-col gap-8 animate-fade-in-up">

                {/* Narrative Card */}
                {currentStep?.narrative && (
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-valentine-200 to-purple-200 rounded-2xl blur opacity-30"></div>
                    <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-sm">
                      <p className="text-gray-700 font-sans text-lg leading-relaxed font-medium">
                        {currentStep.narrative}
                      </p>
                    </div>
                  </div>
                )}

                {/* Soobin's Dialogue */}
                <div className="flex gap-4 items-start mt-2 group">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-valentine-300 to-valentine-500 p-[3px] shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-valentine-600 font-bold font-hand text-xl">
                        FG
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="bg-gradient-to-br from-white to-valentine-50/50 p-7 rounded-3xl rounded-tl-none shadow-md border border-white/80 relative">
                      <p className="text-valentine-900 text-2xl font-sans leading-relaxed drop-shadow-sm">
                        “{currentStep?.dialogue}”
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <div ref={scrollRef} className="pb-4" />
            </div>

            {/* --- BOTTOM: CHOICE AREA --- */}
            <div className="p-2 md:p-3 bg-white/40 backdrop-blur-xl border-t border-white/40 shadow-[0_-6px_24px_rgba(255,180,190,0.08)]">
              <div className="grid grid-cols-1 gap-2 max-w-md mx-auto">
                {currentStep?.choices.map((choice, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChoice(choice.nextStepId)}
                    className="group relative w-full text-left px-5 py-3 rounded-xl bg-white/80 border border-white shadow-sm hover:shadow-md hover:border-valentine-200 transition-all duration-200 overflow-hidden"
                  >
                    {/* Subtle animated gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-valentine-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="font-sans font-semibold text-gray-700 text-sm group-hover:text-valentine-800 transition-colors">
                        {choice.text}
                      </span>
                      <div className="bg-valentine-100 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-all">
                        <ChevronRight className="text-valentine-500" size={16} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="group relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-500 overflow-hidden bg-white/80 hover:bg-valentine-100"
          title="SB"
        >
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-valentine-600 font-bold font-hand text-xl">
            SB
          </div>
        </button>
      </div>
    </div>
  );
};

export default App;
