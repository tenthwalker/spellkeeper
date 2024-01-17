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
  const [error, setError] = useState('');
  
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
        setError('There was an error with the fetch')
        alert(`Server Error: ${error.message}`)
    }
  }

  function buttonToggle(selectedSpell) {
    const isInList = savedSpells.find(spell => spell.id === selectedSpell.id)
    isInList? handleDelete(selectedSpell) : handleKnown(selectedSpell);
    return isInList
  }
  
  function handleDelete(selectedSpell){
    function deleteSpells() {
      if(savedSpells.length === 1){
        setSavedSpells([]);
      } else {
        const filteredSpells = () => {
        selectedSpell.isKnown = false;
        savedSpells.filter(spell => spell.id !== selectedSpell.id);
        setSavedSpells(filteredSpells);
      }}
      return selectedSpell;
    };
    deleteSpells();
    return savedSpells;
  }

  function handleKnown(selectedSpell) {
    function saveSpells() {
      const checkSpell = savedSpells.find(spell => spell.id === selectedSpell.id);
      if(checkSpell === undefined) {
        selectedSpell.isKnown = true;
        setSavedSpells([...savedSpells, selectedSpell])
      }
      return selectedSpell;
    }; 
    saveSpells();
    return savedSpells;
  }

  useEffect(() => {
    getSpells()
    .then(setSpells)
  }, []);

  if(error) {
    return <div className='error'>{error}</div>
  }

  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <h1>spellkeeper</h1>
        </header>
        {spells.length === 0 && <span className='message'>loading spells</span>}
        <Routes>
          <Route path='' element={<Main spells={spells} buttonToggle={buttonToggle} savedSpells={savedSpells}/>} />
          <Route path='/known' element={<Saved savedSpells={savedSpells} buttonToggle={buttonToggle}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default App;

App.propTypes = {
  spells: PropTypes.array,
  savedSpells: PropTypes.array,
  buttonToggle: PropTypes.func
}