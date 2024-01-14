import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Spells from '../Spells/Spells.js';
import Saved from '../Saved/Saved.js';
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

  function handleKnown(selectedSpell) {
    const saveSpells = (selectedSpell) => {
      console.log('spell saved')
      const learnSpell = savedSpells.filter(spell => spell.id === selectedSpell.index);
      learnSpell.isKnown = "true";
      setSavedSpells([...savedSpells, learnSpell]);
    }

    const deleteSpells = (selectedSpell) => {
      const learnedSpell = savedSpells.filter(spell => spell.id === selectedSpell.index);
      learnedSpell.isKnown = "false";
      const filteredSpells = savedSpells.filter(spell => spell.id !== selectedSpell.index);
      setSavedSpells(filteredSpells);
    }
    
    return selectedSpell.isKnown ? deleteSpells : saveSpells
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
      {/* {spells.length === 0 && <span className='message'>loading spells</span>} */}
      <Routes>
        <Route path='' element={<Main spells={spells} handleKnown={handleKnown} />} />
        <Route path='/known' element={<Saved savedSpells={savedSpells} />} />
      </Routes>
    </div>
  );
};

export default App;
