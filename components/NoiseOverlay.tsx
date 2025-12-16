import React from 'react';

const NoiseOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.08]">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain contrast-150 brightness-100"></div>
    </div>
  );
};

export default NoiseOverlay;