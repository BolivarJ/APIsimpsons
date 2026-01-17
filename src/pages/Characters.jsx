import React, { useState, forwardRef, useImperativeHandle, useMemo, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import CharacterCard from '../components/CharacterCard';
import CharacterModal from '../components/CharacterModal';
import SearchBar from '../components/SearchBar';

const Characters = forwardRef((props, ref) => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, loading, error } = useFetch("characters", page);

  // Resetear búsqueda cuando navegas entre páginas
  useEffect(() => {
    setSearchTerm('');
  }, [page]);

  useImperativeHandle(ref, () => ({
    goToFirstPage: () => {
      setPage(1);
      setSearchTerm(''); 
    },
  }));

  // Filtrar personajes de la página actual
  const filteredCharacters = useMemo(() => {
    if (!data || !data.result) return [];
    if (!searchTerm.trim()) return data.result;
    
    return data.result.filter(char => 
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Mientras carga, mostramos un mensaje 
  const currentLoading = loading;
  const currentError = error;

  if (currentLoading) return <div className="text-center mt-20 font-semibold text-xl text-gray-700">Loading...</div>;
  
  if (currentError) return (
    <div className="text-center mt-20 text-red-600 font-semibold">
      <p>{currentError}</p>
      <p className="text-sm mt-2">Please check your connection and try again.</p>
    </div>
  );

  if (filteredCharacters.length === 0 && !searchTerm.trim()) {
    return <div className="text-center mt-20 font-semibold text-xl text-gray-700">No characters available</div>;
  }

  const totalPages = data.info?.pages || 1;
  const hasNext = data.info?.next;
  const hasPrev = data.info?.prev;

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleModalStateChange = (isOpen) => {
    setIsModalOpen(isOpen);
    if (props.onModalStateChange) {
      props.onModalStateChange(isOpen);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-3">
          Characters
        </h1>
        <p className="text-center text-gray-600 font-medium mb-6">Discover the inhabitants of Springfield</p>
        <SearchBar onSearch={handleSearchChange} placeholder="Search by character name..." />
      </div>

      {filteredCharacters.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No characters found matching "{searchTerm}"</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10 mb-12">
            {filteredCharacters.map((char) => (
              <CharacterCard 
                key={char.id} 
                character={char}
                onClick={() => handleCardClick(char)}
              />
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 relative z-20 flex-wrap">
            <button 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={!hasPrev || page === 1}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 cursor-pointer  text-white font-semibold px-6 py-2 rounded-lg transition-all disabled:opacity-50"
            >
              Previous
            </button>
            
            <div className="bg-white border border-gray-300 px-6 py-2 rounded-lg">
              <span className="font-semibold text-gray-900">Page {page} of {totalPages}</span>
            </div>

            <button 
              onClick={() => setPage(p => p + 1)}
              disabled={!hasNext || page >= totalPages}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 cursor-pointer  text-white font-semibold px-6 py-2 rounded-lg transition-all disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      <div className="text-center mt-8 text-gray-600 font-medium">
        <p>Total Characters: <span className="text-blue-600 font-bold">{data.info?.count || 'N/A'}</span></p>
      </div>

      <CharacterModal 
        character={selectedCharacter}
        isOpen={isModalOpen}
        onClose={() => handleModalStateChange(false)}
        onModalStateChange={handleModalStateChange}
      />
    </div>
  );
});

Characters.displayName = 'Characters';

export default Characters;