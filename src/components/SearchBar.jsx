import React, { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(GlobalContext);

  return (
    <input
      className="w-full p-2 border rounded my-2"
      placeholder="Buscar persona..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
