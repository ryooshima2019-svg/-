import React, { useState } from 'react';
import { Page, Category, WorkItem } from './types';
import NoiseOverlay from './components/NoiseOverlay';
import Navigation from './components/Navigation';
import IntroSequence from './components/IntroSequence';
import WorkModal from './components/WorkModal';

// Views
import Home from './views/Home';
import Gallery from './views/Gallery';
import About from './views/About';
import Contact from './views/Contact';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [galleryFilter, setGalleryFilter] = useState<Category | 'ALL'>('ALL');
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleNavigate = (page: Page) => {
    // Scroll to top on transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={handleNavigate} setFilter={setGalleryFilter} />;
      case Page.GALLERY:
        return <Gallery initialFilter={galleryFilter} onItemClick={setSelectedItem} />;
      case Page.ABOUT:
        return <About />;
      case Page.CONTACT:
        return <Contact />;
      default:
        return <Home setPage={handleNavigate} setFilter={setGalleryFilter} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-noir-black text-white font-sans selection:bg-noir-red selection:text-white">
      <NoiseOverlay />

      {showIntro ? (
        <IntroSequence onComplete={handleIntroComplete} />
      ) : (
        <div className="animate-fade-in">
          <Navigation currentPage={currentPage} setPage={handleNavigate} />
          
          <main className="relative z-10 transition-opacity duration-500 min-h-screen flex flex-col">
            {renderPage()}
          </main>

          {/* Footer */}
          <footer className="w-full py-8 text-center text-gray-700 text-xs tracking-widest uppercase border-t border-white/5 relative z-10">
            &copy; {new Date().getFullYear()} Kazuto Mori. All Rights Reserved.
          </footer>

          <WorkModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </div>
      )}
    </div>
  );
};

export default App;