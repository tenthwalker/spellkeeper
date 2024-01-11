import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>spellkeeper</h1>
      </header>
      <main className='main-view'>
        <section className='spell-list'></section>
      </main>
      <footer>
        <button>Your Spellbook</button>
      </footer>
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
