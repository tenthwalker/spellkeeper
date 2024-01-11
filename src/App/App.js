import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Card from '../Card/Card.js';
import Spells from '..Spells/Spells.js';
import './App.css';

function App() {

  const [spells, setSpells] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <h1>spellkeeper</h1>
      </header>
      <main className='main-view'>
        <section className='spell-list'>
          <Spells />
        </section>
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
