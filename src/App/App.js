import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
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
  
  function handleDelete(selectedSpell){
    function deleteSpells() {
      console.log('spell deleted');
      selectedSpell.isKnown = false;
      const filteredSpells = savedSpells.filter(spell => spell.id !== selectedSpell.id);
      console.log(filteredSpells, 'filtered')
      setSavedSpells(filteredSpells);
      console.log(savedSpells, "deleted")
      return savedSpells;
    };
    savedSpells.length > 0 && deleteSpells();
    return savedSpells;
  }

  function handleKnown(selectedSpell) {
    function saveSpells() {
      console.log('spell saved');
      selectedSpell.isKnown = true;
      savedSpells.push(selectedSpell)
      console.log(savedSpells, "saved")
      return selectedSpell;
    }; 
      
    !selectedSpell.isKnown && saveSpells();
    console.log(selectedSpell, 'selectedSpell')
    return savedSpells;
  }

  useEffect(() => {
    getSpells()
    .then(setSpells)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>spellkeeper</h1>
      </header>
      {spells.length === 0 && <span className='message'>loading spells</span>}
      <Routes>
        <Route path='' element={<Main spells={spells} handleKnown={handleKnown} handleDelete={handleDelete} />} />
        <Route path='/known' element={<Saved savedSpells={savedSpells} handleKnown={handleKnown} handleDelete={handleDelete}/>} />
      </Routes>
    </div>
  );
};

export default App;