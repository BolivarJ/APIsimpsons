import React, { useState } from 'react';

const Navbar = ({ onLogoClick, onNavigate, currentPage, isDisabled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  const NavLink = ({ page, label }) => (
    <button 
      onClick={() => handleNavigation(page)}
      className={`pb-1 transition-all border-b-2 text-sm sm:text-base ${ currentPage === page ? 'text-blue-700 border-blue-700' : 'text-gray-700 border-transparent hover:text-blue-700 hover:border-blue-700'}`}
    >
      {label}
    </button>
  );

  return (
    <nav className={`bg-white border-b-4 border-gray-900 sticky top-0 z-50 shadow-lg transition-all ${ isDisabled ? 'hidden' : ''}`}>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-8 py-4">
        <button
          onClick={onLogoClick}
          className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight hover:text-blue-700 transition-colors cursor-pointer whitespace-nowrap"
        >
          Springfield
        </button>
        
        <div className="hidden sm:flex gap-4 sm:gap-8 font-semibold text-gray-700">
          <NavLink page="characters" label="Characters" />
          <NavLink page="episodes" label="Episodes" />
          <NavLink page="locations" label="Locations" />
          <NavLink page="about" label="About" />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 text-gray-900 hover:text-blue-700 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-white border-t-2 border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3 font-semibold text-gray-700">
            <NavLink page="characters" label="Characters" />
            <NavLink page="episodes" label="Episodes" />
            <NavLink page="locations" label="Locations" />
            <NavLink page="about" label="About" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
