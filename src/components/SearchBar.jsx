import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = "Search..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="relative mb-8 max-w-md mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-5 py-3 pr-12 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all shadow-sm"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
