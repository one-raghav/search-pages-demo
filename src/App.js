// src/App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import ResultsTable from './ResultsTable';

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const data = await response.json();
      console.log(data);
      setResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search App</h1>
        <SearchBar onSearch={handleSearch} />
        {results.length > 0 && <ResultsTable data={results} />}
      </header>
    </div>
  );
};

export default App;
