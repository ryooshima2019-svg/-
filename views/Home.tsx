import React from 'react';
import { Page, Category } from '../types';
import { Play } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

interface HomeProps {
  setPage: (page: Page) => void;
  setFilter: (cat: Category | 'ALL') => void;
}

const Home: React.FC<HomeProps> = ({ setPage, setFilter }) => {
  const featuredItem = PORTFOLIO_ITEMS[0]; // The Red Corridor

  const handleNavigate = (cat: Category) => {
      setFilter(cat);
      setPage(Page.GALLERY);
  }

  return (
    <div className="w-full min-h-screen pt-24 pb-12 px-6 md:px-12 flex flex-col justify-center relative">
      
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end md:items-center gap-12 animate-slide-up">
        
        {/* Left: Typography */}
        <div className="w-full md:w-1/2 z-10">
          <p className="text-noir-red font-sans text-sm tracking-[0.3em] uppercase mb-4 pl-1">
            Featured Work
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-8">
            THE RED <br />
            <span className="italic text-gray-400">CORRIDOR</span>
          </h1>
          <p className="font-sans text-gray-400 max-w-md leading-relaxed mb-8 border-l border-noir-red pl-6">
            {featuredItem.description} A study in architectural horror and memory.
          </p>
          
          <button 
             onClick={() => { setFilter(Category.FILM); setPage(Page.GALLERY); }}
             className="group flex items-center space-x-4 text-white uppercase tracking-widest text-xs hover:text-noir-red transition-colors"
          >
            <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-noir-red transition-colors">
              <Play size={14} fill="currentColor" />
            </div>
            <span>Watch Film</span>
          </button>
        </div>

        {/* Right: Abstract Visual */}
        <div className="w-full md:w-1/2 h-[50vh] relative group cursor-pointer" onClick={() => handleNavigate(Category.FILM)}>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700 z-10"></div>
          <img 
            src={featuredItem.imageUrl} 
            alt="Hero" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-1000 ease-out"
          />
          {/* Decorative lines */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-noir-red opacity-50"></div>
          <div className="absolute top-4 left-4 text-white/80 font-display text-6xl opacity-20 pointer-events-none select-none">01</div>
        </div>
      </div>

      {/* Quick Category Nav */}
      <div className="w-full max-w-7xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-8 animate-fade-in-slow">
        {Object.values(Category).map((cat, idx) => (
          <div 
            key={cat} 
            onClick={() => handleNavigate(cat)}
            className="group cursor-pointer border-r border-white/5 last:border-none p-4 hover:bg-white/5 transition-all duration-300"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <span className="block text-noir-red text-[10px] mb-2">0{idx + 1}</span>
            <h3 className="font-serif text-xl text-gray-300 group-hover:text-white group-hover:translate-x-2 transition-transform duration-300">{cat}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;