import React, { useEffect, useState, useCallback } from 'react';
import { getCharacterById } from '../services/api';

const CharacterModal = ({ character, isOpen, onClose, onModalStateChange }) => {
  const [fullCharacter, setFullCharacter] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (onModalStateChange) onModalStateChange(true);
      
      if (character && character.id) {
        setLoading(true);
        getCharacterById(character.id)
          .then(data => {
            setFullCharacter(data);
            setLoading(false);
          })
          .catch(() => {
            setFullCharacter(character);
            setLoading(false);
          });
      }
    } else {
      document.body.style.overflow = 'unset';
      if (onModalStateChange) onModalStateChange(false);
      setFullCharacter(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, character, onModalStateChange]);

  if (!isOpen || !character) return null;

  const displayCharacter = fullCharacter || character;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-40 p-2 sm:p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-2xl max-h-[95vh] overflow-y-auto relative z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-32 sm:h-40 bg-gradient-to-b from-sky-300 to-sky-100 flex items-end">
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-2 sm:top-3 right-2 sm:right-3 bg-white hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-700 font-bold transition-all shadow-md text-sm"
          >
            ✕
          </button>
          
          <div className="absolute -bottom-10 sm:-bottom-12 left-2 sm:left-4 w-24 h-32 sm:w-32 sm:h-40 rounded-lg overflow-hidden border-4 border-yellow-400 shadow-xl bg-white flex items-center justify-center">
            {displayCharacter.portrait_path ? (
              <img 
                src={`https://cdn.thesimpsonsapi.com/500${displayCharacter.portrait_path}`}
                alt={displayCharacter.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : (
              <div className="text-gray-400 text-xs sm:text-sm">No image</div>
            )}
          </div>
        </div>

        <div className="p-3 sm:p-4 pt-16 sm:pt-20 space-y-3 sm:space-y-4">
          <div className="pb-2 border-b-2 border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">{displayCharacter.name}</h2>
            <p className="text-sm sm:text-lg text-blue-600 font-bold">{displayCharacter.occupation || 'Unknown'}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="bg-yellow-100 p-2 sm:p-3 rounded-lg border-2 border-yellow-400">
              <p className="text-xs text-yellow-900 font-bold mb-1">Status</p>
              <p className={`font-black text-xs sm:text-sm ${displayCharacter.status === 'Alive' ? 'text-green-700' : 'text-red-700'}`}>
                {displayCharacter.status || 'Unknown'}
              </p>
            </div>
            <div className="bg-blue-100 p-2 sm:p-3 rounded-lg border-2 border-blue-400">
              <p className="text-xs text-blue-900 font-bold mb-1">Age</p>
              <p className="font-black text-xs sm:text-sm text-blue-900">{displayCharacter.age || 'N/A'}</p>
            </div>
            <div className="bg-purple-100 p-2 sm:p-3 rounded-lg border-2 border-purple-400">
              <p className="text-xs text-purple-900 font-bold mb-1">Gender</p>
              <p className="font-black text-xs sm:text-sm text-purple-900">{displayCharacter.gender || '?'}</p>
            </div>
            {displayCharacter.birthdate && (
              <div className="bg-pink-100 p-2 sm:p-3 rounded-lg border-2 border-pink-400">
                <p className="text-xs text-pink-900 font-bold mb-1">Born</p>
                <p className="font-black text-xs text-pink-900">{displayCharacter.birthdate}</p>
              </div>
            )}
          </div>

          {displayCharacter.description && (
            <div className="p-2 sm:p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
              <h3 className="text-xs font-black text-gray-700 mb-2 uppercase">About</h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{displayCharacter.description}</p>
            </div>
          )}

          {displayCharacter.first_appearance_ep && (
            <div>
              <h3 className="text-xs sm:text-sm font-black text-gray-900 mb-2 uppercase">First Episode</h3>
              <div className="bg-yellow-50 p-2 sm:p-3 rounded-lg border-4 border-yellow-400">
                <p className="font-bold text-gray-900 text-xs sm:text-sm mb-1">{displayCharacter.first_appearance_ep.name}</p>
                <p className="text-xs font-bold text-gray-700 mb-1">Season {displayCharacter.first_appearance_ep.season} • Episode {displayCharacter.first_appearance_ep.episode_number} • {displayCharacter.first_appearance_ep.airdate}</p>
                {displayCharacter.first_appearance_ep.synopsis && (
                  <p className="text-xs text-gray-700 line-clamp-2">{displayCharacter.first_appearance_ep.synopsis}</p>
                )}
              </div>
            </div>
          )}

          {displayCharacter.first_appearance_sh && (
            <div>
              <h3 className="text-xs sm:text-sm font-black text-gray-900 mb-2 uppercase">First Short</h3>
              <div className="bg-purple-50 p-2 sm:p-3 rounded-lg border-4 border-purple-400">
                <p className="font-bold text-gray-900 text-xs sm:text-sm mb-1">{displayCharacter.first_appearance_sh.name}</p>
                <p className="text-xs font-bold text-gray-700 mb-1">Season {displayCharacter.first_appearance_sh.season} • {displayCharacter.first_appearance_sh.airdate}</p>
                {displayCharacter.first_appearance_sh.synopsis && (
                  <p className="text-xs text-gray-700 line-clamp-2">{displayCharacter.first_appearance_sh.synopsis}</p>
                )}
              </div>
            </div>
          )}

          {displayCharacter.phrases && displayCharacter.phrases.length > 0 && (
            <div>
              <h3 className="text-xs sm:text-sm font-black text-gray-900 mb-2 uppercase">Catchphrases</h3>
              <div className="space-y-2 pb-4">
                {displayCharacter.phrases.slice(0, 3).map((phrase, idx) => (
                  <div key={idx} className="bg-blue-50 p-2 sm:p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-gray-800 text-xs sm:text-sm line-clamp-2">"{ phrase}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CharacterModal);
