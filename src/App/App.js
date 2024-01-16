import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Saved from '../Saved/Saved.js';
import PropTypes from 'prop-types';
import Main from '../Main/Main.js';
import './App.css';
import ErrorBoundary from '../Errors/ErrorBoundary.js';
import NotFound from '../Errors/ErrorPage.js';

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
        spellNames.results.map(spellName => fetch(url + spellName.url).then(response => response.json()))
      );
    } catch(error) {
        console.error("There was a problem with the fetch operation:", error);
        alert(`Server Error: ${error.message}`)
    }
  }
  
  function handleDelete(selectedSpell){
    function deleteSpells() {
      selectedSpell.isKnown = false;
      const filteredSpells = savedSpells.filter(spell => spell.id !== selectedSpell.id);
      setSavedSpells(filteredSpells);
      return savedSpells;
    };
    savedSpells.length > 0 && deleteSpells();
    return savedSpells;
  }

  function handleKnown(selectedSpell) {
    function saveSpells() {
      selectedSpell.isKnown = true;
      savedSpells.push(selectedSpell);
      return selectedSpell;
    }; 
      
    !selectedSpell.isKnown && saveSpells();
    return savedSpells;
  }

  useEffect(() => {
    getSpells()
    .then(setSpells)
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <h1>spellkeeper</h1>
        </header>
        {spells.length === 0 && <span className='message'>loading spells</span>}
        <Routes>
          <Route path='' element={<Main spells={spells} handleKnown={handleKnown} handleDelete={handleDelete} />} />
          <Route path='/known' element={<Saved savedSpells={savedSpells} handleKnown={handleKnown} handleDelete={handleDelete}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default App;

App.propTypes = {
  spells: PropTypes.array.isRequired,
  handleKnown: PropTypes.func,
  handleDelete: PropTypes.func
}