import React, { useMemo } from 'react';

const CharacterCard = ({ character, onClick }) => {
  const imageUrl = character.portrait_path 
    ? `https://cdn.thesimpsonsapi.com/500${character.portrait_path}`
    : null;

  const randomPhrase = useMemo(() => {
    if (character.phrases && character.phrases.length > 0) {
      return character.phrases[Math.floor(Math.random() * character.phrases.length)];
    }
    return null;
  }, [character.id]); 
  
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden border-4 border-yellow-400 shadow-yellow-200 hover:shadow-xl hover:scale-102 transition-all duration-300 h-full flex flex-col cursor-pointer"
      style={{ boxShadow: '0 0 20px rgba(250, 204, 21, 0.5), 0 4px 6px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-4 flex justify-center items-center min-h-60 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={character.name} 
            className="h-56 object-contain"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="text-gray-400 text-center text-sm">No image available</div>
        )}
      </div>
      
      <div className="p-5 text-center flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{character.name}</h3>
        <p className="text-blue-600 font-semibold text-sm mb-2">{character.occupation || 'Unknown'}</p>
        
        {randomPhrase && (
          <p className="text-gray-600 italic text-xs mb-3 px-2 py-1 line-clamp-1">
            "{randomPhrase}"
          </p>
        )}
        
        <div className="flex gap-2 justify-center flex-wrap">
          <span className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-300">
            {character.age || 'N/A'} years
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            character.status === 'Alive' 
              ? 'bg-green-100 text-green-900 border-green-300'
              : 'bg-red-100 text-red-900 border-red-300'
          }`}>
            {character.status || 'Unknown'}
          </span>
        </div>
      </div>
    </div>
  );
};


export default CharacterCard;