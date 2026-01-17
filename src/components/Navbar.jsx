const Navbar = ({ onLogoClick, onNavigate, currentPage, isDisabled }) => {
  return (
    <nav className={`bg-white border-b-4 border-gray-900 sticky top-0 z-50 shadow-lg transition-all ${isDisabled ? 'hidden' : ''}`}>
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        <button
          onClick={onLogoClick}
          className="text-3xl font-bold text-gray-900 tracking-tight hover:text-blue-700 transition-colors cursor-pointer"
        >
          Springfield 
        </button>
        
        <div className="flex gap-8 font-semibold text-gray-700">
          <button 
            onClick={() => onNavigate('characters')}
            className={`pb-1 transition-all border-b-2 ${currentPage === 'characters' ? 'text-blue-700 border-blue-700' : 'text-gray-700 border-transparent hover:text-blue-700 hover:border-blue-700'}`}
          >
            Characters
          </button>
          <button 
            onClick={() => onNavigate('episodes')}
            className={`pb-1 transition-all border-b-2 ${currentPage === 'episodes' ? 'text-blue-700 border-blue-700' : 'text-gray-700 border-transparent hover:text-blue-700 hover:border-blue-700'}`}
          >
            Episodes
          </button>
          <button 
            onClick={() => onNavigate('locations')}
            className={`pb-1 transition-all border-b-2 ${currentPage === 'locations' ? 'text-blue-700 border-blue-700' : 'text-gray-700 border-transparent hover:text-blue-700 hover:border-blue-700'}`}
          >
            Locations
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className={`pb-1 transition-all border-b-2 ${currentPage === 'about' ? 'text-blue-700 border-blue-700' : 'text-gray-700 border-transparent hover:text-blue-700 hover:border-blue-700'}`}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;