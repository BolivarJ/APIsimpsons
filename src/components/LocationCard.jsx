import React from 'react';

const LocationCard = ({ location, onClick }) => {
  const imageUrl = location.image_path 
    ? `https://cdn.thesimpsonsapi.com${location.image_path}`
    : null;

  const getLocationColor = (type) => {
    return 'from-red-400 to-teal-400';
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-4 border-yellow-400 hover:border-yellow-500 h-full flex flex-col"
    >
      <div className={`h-40 bg-gradient-to-br ${getLocationColor(location.type)} overflow-hidden flex items-center justify-center relative`}>
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={location.name} 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white font-black text-center">
            <p className="text-xs uppercase tracking-wide opacity-80 mb-2">Location</p>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-black text-gray-900 text-sm line-clamp-2 mb-2">{location.name || 'Unknown Location'}</h3>
          
          <div className="space-y-2 mb-3">
            {location.type && (
              <div>
                <p className="text-xs text-gray-500 font-semibold">Type</p>
                <p className="text-xs text-gray-700 font-bold">{location.type}</p>
              </div>
            )}
            
            {location.town && (
              <div>
                <p className="text-xs text-gray-500 font-semibold">Town</p>
                <p className="text-xs text-gray-700 font-bold">{location.town}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="border-t-2 border-green-300 pt-2">
          {location.use && (
            <p className="text-xs text-green-700 font-semibold line-clamp-2 italic">
              {location.use}
            </p>
          )}
          {location.residents && Array.isArray(location.residents) && (
            <p className="text-xs text-green-700 font-semibold mt-1">
              {location.residents.length} Residents
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
