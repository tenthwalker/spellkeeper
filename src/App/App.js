import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spells from '../Spells/Spells.js';
import Main from '../Main/Main.js';
import './App.css';

function App() {

  const [spells, setSpells] = useState([]);
  const [savedSpells, setSavedSpells] = useState([]);
  
  const url = 'https://www.dnd5eapi.co';

  async function getSpells() {
    try {
      const response = await fetch(url + '/api/spells');

      if (!response.ok) {
        throw new Error("Network response error");
      }

      const spellNames = await response.json();

      return Promise.all(
        spellNames.results.map(index => fetch(url + index.url).then(response => response.json()))
      );
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSpells()
    .then(setSpells);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>spellkeeper</h1>
      </header>
      <Main spells={spells}/>
      <Routes>
        <Route path='/' element={<Main spells={spells} />} />
      </Routes>
    </div>
  );
};

export default App;
