import React, { useRef, useState, useEffect } from 'react';
import DonutRain from './components/DonutRain';
import Characters from './pages/Characters';
import Episodes from './pages/Episodes';
import Locations from './pages/Locations';
import About from './pages/About';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('characters');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const charactersRef = useRef();
  const episodesRef = useRef();
  const locationsRef = useRef();

  useEffect(() => {
    console.log('%c"Mmm... Donuts..." - Homer Simpson', 'font-style: italic; color: #4A90E2;', "https://www.youtube.com/shorts/OSZ0J154Kqw");
  }, []);

  const handleLogoClick = () => {
    if (currentPage === 'characters' && charactersRef.current) {
      charactersRef.current.goToFirstPage();
    } else if (currentPage === 'episodes' && episodesRef.current) {
      episodesRef.current.goToFirstPage();
    } else if (currentPage === 'locations' && locationsRef.current) {
      locationsRef.current.goToFirstPage();
    }
    setCurrentPage('characters');
  };

  const handleNavigation = (page) => {
    // Resetear búsqueda cuando navegas a otra página
    if (page === 'characters' && charactersRef.current) {
      charactersRef.current.goToFirstPage();
    } else if (page === 'episodes' && episodesRef.current) {
      episodesRef.current.goToFirstPage();
    } else if (page === 'locations' && locationsRef.current) {
      locationsRef.current.goToFirstPage();
    }
    setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-300 via-sky-100 to-white font-sans overflow-x-hidden flex flex-col">
      <Navbar onLogoClick={handleLogoClick} onNavigate={handleNavigation} currentPage={currentPage} isDisabled={isModalOpen} />
      <DonutRain />

      <main className="pt-10 relative z-20 flex-grow">
        {currentPage === 'characters' && <Characters ref={charactersRef} onModalStateChange={setIsModalOpen} />}
        {currentPage === 'episodes' && <Episodes ref={episodesRef} />}
        {currentPage === 'locations' && <Locations ref={locationsRef} />}
        {currentPage === 'about' && <About />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-300 mt-20 p-8 text-center">
        <p className="text-gray-700 font-semibold text-sm">Springfield Chronicles - Powered by The Simpsons API</p>
      </footer>
    </div>
  );
}

export default App;