import React, { useState } from 'react';
import '../Styles/App.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [Text, setText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSearch = () => {
    onSearch(Text);
  };

  return (
    <div className="SearchBar">
      <input type="text" value={Text} onChange={handleInputChange} placeholder="Введите запрос" />
      <button onClick={handleSearch}>Поиск</button>
    </div>
  );
};

export default SearchBar;
