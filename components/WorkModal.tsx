import React, { useEffect, useState } from 'react';
import { X, Calendar, Tag } from 'lucide-react';
import { WorkItem } from '../types';

interface WorkModalProps {
  item: WorkItem | null;
  onClose: () => void;
}

const WorkModal: React.FC<WorkModalProps> = ({ item, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (item) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }
  }, [item]);

  if (!item) return null;

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-noir-dark border border-noir-gray/30 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-noir-red transition-colors duration-300 bg-black/50 rounded-full"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Side */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden group">
             <div className="absolute inset-0 bg-noir-red/10 mix-blend-overlay z-10 pointer-events-none"></div>
             <img 
               src={item.imageUrl} 
               alt={item.title} 
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale contrast-125"
             />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
            <div className="mb-2 flex items-center space-x-2 text-noir-red font-bold text-xs tracking-[0.2em] uppercase">
              <span className="w-8 h-[1px] bg-noir-red inline-block"></span>
              <span>{item.category}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-2 tracking-wide font-light">
              {item.title}
            </h2>
            
            <div className="flex items-center text-noir-paper text-sm mb-6 space-x-4">
              <div className="flex items-center">
                <Calendar size={14} className="mr-2" />
                <span>{item.year}</span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10 mb-6"></div>

            <p className="text-gray-300 font-sans leading-relaxed mb-6">
              {item.details}
            </p>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map(tag => (
                  <div key={tag} className="flex items-center px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-400 font-sans">
                    <Tag size={10} className="mr-2" />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;