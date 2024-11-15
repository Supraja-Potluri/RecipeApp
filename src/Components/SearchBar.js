// src/components/SearchBar.js
import './SearchBar.css';
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input" // Apply class for styling
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
