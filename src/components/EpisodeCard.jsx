import React from 'react';

const EpisodeCard = ({ episode, onClick }) => {
  const imageUrl = episode.image_path 
    ? `https://cdn.thesimpsonsapi.com${episode.image_path}`
    : null;

  const getSeasonColor = (season) => {
    const colors = [
      'from-yellow-400 to-orange-400',
      'from-purple-400 to-pink-400',
      'from-blue-400 to-cyan-400',
      'from-green-400 to-teal-400',
      'from-red-400 to-pink-400',
      'from-indigo-400 to-purple-400',
    ];
    return colors[(season - 1) % colors.length];
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-4 border-yellow-400 hover:border-yellow-500 h-full flex flex-col"
    >
      <div className={`h-40 bg-gradient-to-br ${getSeasonColor(episode.season)} overflow-hidden flex items-center justify-center relative`}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={episode.name} 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white font-black text-center">
            <p className="text-xs uppercase tracking-wide opacity-80 mb-2">Season {episode.season}</p>
            <p className="text-3xl font-black">#{episode.episode_number}</p>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold bg-purple-200 text-purple-900 px-2 py-1 rounded">Season {episode.season}</span>
            <span className="text-xs font-bold bg-pink-200 text-pink-900 px-2 py-1 rounded">Ep. {episode.episode_number}</span>
          </div>
          <h3 className="font-black text-gray-900 text-sm line-clamp-2 mb-2">{episode.name || 'Unknown Episode'}</h3>
          <p className="text-xs text-gray-600 font-semibold mb-3">{episode.airdate || 'N/A'}</p>
        </div>
        
        {episode.synopsis && (
          <p className="text-xs text-gray-700 line-clamp-3 italic border-t pt-2">
            {episode.synopsis}
          </p>
        )}
      </div>
    </div>
  );
};

export default EpisodeCard;
