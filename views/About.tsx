import React from 'react';
import { DIRECTORS_INFLUENCE } from '../constants';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-32 pb-12 px-6 md:px-12 max-w-5xl mx-auto flex flex-col justify-center">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Image/Profile */}
        <div className="md:col-span-5 animate-slide-up">
          <div className="relative w-full aspect-[3/4] overflow-hidden border border-white/10">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
             <img 
               src="https://picsum.photos/id/1005/600/800" 
               alt="Kazuto Mori" 
               className="w-full h-full object-cover grayscale contrast-125"
             />
             <div className="absolute bottom-6 left-6 z-20">
                <h2 className="font-serif text-3xl text-white">Kazuto Mori</h2>
                <p className="text-noir-red text-sm tracking-widest uppercase mt-1">Filmmaker</p>
             </div>
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="md:col-span-7 flex flex-col justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
           <h1 className="font-serif text-5xl text-white mb-8">
             Visualizing the <span className="italic text-noir-paper">Unspoken</span>
           </h1>
           
           <div className="space-y-6 text-gray-400 font-sans leading-relaxed text-lg">
             <p>
               I am a third-year film production student specializing in directing and editing. My work is an exploration of memory, architectural spaces, and the psychological undercurrents of everyday life.
             </p>
             <p>
               Believing that cinema is not just storytelling but a sensory experience, I strive to create visuals that linger in the mind like a half-remembered dream. I utilize high-contrast lighting, deliberate pacing, and textured sound design to build tension and atmosphere.
             </p>
           </div>

           <div className="mt-12">
             <h3 className="text-white uppercase tracking-[0.2em] text-xs font-bold mb-6 border-b border-white/10 pb-2">
               Cinematic Influences
             </h3>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {DIRECTORS_INFLUENCE.map((director, i) => (
                 <li key={i} className="flex items-center text-gray-400 hover:text-noir-red transition-colors duration-300">
                   <span className="w-1 h-1 bg-noir-red rounded-full mr-3"></span>
                   <span className="font-serif italic text-lg">{director}</span>
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
         <div>
            <h4 className="text-white font-bold mb-2">Direction</h4>
            <p className="text-sm text-gray-500">Narrative construction, actor blocking, visual storytelling.</p>
         </div>
         <div>
            <h4 className="text-white font-bold mb-2">Editing</h4>
            <p className="text-sm text-gray-500">DaVinci Resolve, Premiere Pro. Rhythm and pacing focus.</p>
         </div>
         <div>
            <h4 className="text-white font-bold mb-2">Writing</h4>
            <p className="text-sm text-gray-500">Screenwriting, film criticism, structural analysis.</p>
         </div>
      </div>
    </div>
  );
};

export default About;