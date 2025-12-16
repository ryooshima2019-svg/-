import React from 'react';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const links = [
    { id: Page.HOME, label: 'Home' },
    { id: Page.GALLERY, label: 'Gallery' },
    { id: Page.ABOUT, label: 'About' },
    { id: Page.CONTACT, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-black/90 to-transparent pt-6 pb-12 px-8 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto cursor-pointer" onClick={() => setPage(Page.HOME)}>
        <h1 className="font-display text-2xl tracking-[0.2em] text-white hover:text-noir-red transition-colors duration-500">
          KM<span className="text-noir-red">.</span>
        </h1>
      </div>
      
      <div className="hidden md:flex space-x-12 pointer-events-auto">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => setPage(link.id)}
            className={`relative group font-sans text-xs tracking-[0.25em] uppercase transition-all duration-300 ${
              currentPage === link.id ? 'text-noir-red' : 'text-gray-400 hover:text-white'
            }`}
          >
            {link.label}
            <span 
              className={`absolute -bottom-2 left-0 w-full h-[1px] bg-noir-red transform origin-left transition-transform duration-500 ${
                currentPage === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Mobile Menu Button (simplified for brevity, usually a hamburger) */}
      <div className="md:hidden pointer-events-auto flex space-x-4">
         {links.map((link) => (
             <button
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`text-[10px] uppercase tracking-widest ${currentPage === link.id ? 'text-noir-red' : 'text-gray-500'}`}
             >
                {link.label}
             </button>
         ))}
      </div>
    </nav>
  );
};

export default Navigation;