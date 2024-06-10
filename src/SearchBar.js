// src/SearchBar.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter your search query..."
        variant="outlined"
        value={query}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
