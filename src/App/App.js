import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Card from '../Card/Card.js';
// import Spells from '..Spells/Spells.js';
import './App.css';

function App() {

  const [spells, setSpells] = useState([]);
  const url = 'https://api.open5e.com/v1/spells/?format=json';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      // .then(data => setSpells(data))
      .catch(error => console.log(error))
  }, []);



  return (
    <div className="App">
      <header className="App-header">
        <h1>spellkeeper</h1>
      </header>
      <main className='spell-view'>
        <section className='spell-list'>
          {/* <Spells spells={spells}/> */}
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
