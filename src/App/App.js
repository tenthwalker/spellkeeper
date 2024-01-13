import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Spells from '../Spells/Spells.js';
import Saved from '../Saved/Saved.js';
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

  const saveSpells = (id) => {
    const learnSpell = savedSpells.filter(spell => spell.id === id)
    setSavedSpells([...savedSpells, learnSpell]);
  }

  const deleteSpells = (id) => {
    const filteredSpells = savedSpells.filter(spell => spell.id !== id)
    setSavedSpells(filteredSpells);
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
      <main className='spell-view'>
        <Spells spells={spells}/>
      </main>
      <footer>
        <button>
          <NavLink to='/known' className='nav'>Your Spellbook</NavLink>
        </button>
      </footer>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/known' element={<Saved savedSpells={savedSpells} />} />
      </Routes>
    </div>
  );
};

export default App;
