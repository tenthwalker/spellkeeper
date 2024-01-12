import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spells from '../Spells/Spells.js';
import './App.css';

function App() {

  const [spells, setSpells] = useState([]);
  // const [savedSpells, setSavedSpells] = useState([]);
  const url = 'https://api.open5e.com/v1/spells/?format=json';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setSpells(data.results))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>spellkeeper</h1>
      </header>
      <main className='spell-view'>
        <Spells spells={spells}/>
      </main>
      <footer>
        <button>Your Spellbook</button>
      </footer>
      <Routes>
        <Route />
      </Routes>
    </div>
  );
};

export default App;
