import React from 'react';

import './App.scss';

import { InfoBox } from './components/InfoBox';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchBar />
        <InfoBox />
      </div>
    </div>
  );
}

export default App;
