import React from 'react';
import { Category, WorkItem } from '../types';
import { PORTFOLIO_ITEMS } from '../constants';
import { Plus } from 'lucide-react';

interface GalleryProps {
  initialFilter: Category | 'ALL';
  onItemClick: (item: WorkItem) => void;
}

const Gallery: React.FC<GalleryProps> = ({ initialFilter, onItemClick }) => {
  const [activeFilter, setActiveFilter] = React.useState<Category | 'ALL'>(initialFilter);
  const [items, setItems] = React.useState<WorkItem[]>([]);

  React.useEffect(() => {
    if (activeFilter === 'ALL') {
      setItems(PORTFOLIO_ITEMS);
    } else {
      setItems(PORTFOLIO_ITEMS.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end animate-slide-up">
        <div>
           <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Selected Works</h1>
           <div className="h-[2px] w-24 bg-noir-red"></div>
        </div>
        
        {/* Filter */}
        <div className="flex flex-wrap gap-6 mt-8 md:mt-0 font-sans text-xs tracking-[0.2em] uppercase">
          <button 
             onClick={() => setActiveFilter('ALL')}
             className={`pb-1 border-b ${activeFilter === 'ALL' ? 'text-white border-noir-red' : 'text-gray-500 border-transparent hover:text-gray-300'} transition-all`}
          >
            All
          </button>
          {Object.values(Category).map(cat => (
             <button 
               key={cat}
               onClick={() => setActiveFilter(cat)}
               className={`pb-1 border-b ${activeFilter === cat ? 'text-white border-noir-red' : 'text-gray-500 border-transparent hover:text-gray-300'} transition-all`}
             >
               {cat}
             </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-16">
        {items.map((item, idx) => (
          <div 
            key={item.id} 
            onClick={() => onItemClick(item)}
            className="group cursor-pointer relative animate-slide-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-gray-900 border border-white/5">
              <div className="absolute inset-0 bg-noir-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 filter grayscale group-hover:grayscale-[0.5] contrast-125" 
              />
              
              {/* Hover overlay details */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm">
                      <Plus className="text-white" />
                  </div>
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-col">
              <span className="text-noir-red text-[10px] tracking-[0.2em] uppercase font-bold mb-1">{item.category} — {item.year}</span>
              <h3 className="text-white font-serif text-2xl group-hover:text-noir-paper transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;