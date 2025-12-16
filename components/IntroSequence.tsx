import React, { useEffect, useState } from 'react';

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Timeline of events
    const timers = [
      setTimeout(() => setStep(1), 500),   // Production presents
      setTimeout(() => setStep(2), 2000),  // Name flash
      setTimeout(() => setStep(3), 3200),  // Fade out
      setTimeout(() => onComplete(), 3800), // Finish
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Film grain specifically for intro */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 animate-grain"></div>
      
      {/* Vertical scanning line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10 animate-slide-up opacity-50"></div>

      {step === 1 && (
        <div className="animate-fade-in text-center z-10">
          <p className="font-sans text-xs tracking-[0.4em] text-gray-500 uppercase mb-4">
            A Portfolio Presentation
          </p>
        </div>
      )}

      {step === 2 && (
        <div className="animate-flicker z-10 flex flex-col items-center">
            <h1 className="font-display text-5xl md:text-8xl text-white tracking-[0.1em] scale-125 transition-transform duration-[2s]">
                KAZUTO MORI
            </h1>
            <div className="w-32 h-[1px] bg-noir-red mt-6"></div>
        </div>
      )}
      
      {/* Countdown-like circle */}
      <div className="absolute w-[80vh] h-[80vh] border border-white/5 rounded-full flex items-center justify-center animate-spin duration-[10s]">
          <div className="w-full h-[1px] bg-white/5 absolute"></div>
          <div className="h-full w-[1px] bg-white/5 absolute"></div>
      </div>
    </div>
  );
};

export default IntroSequence;