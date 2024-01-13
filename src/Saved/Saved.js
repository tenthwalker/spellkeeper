import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import '../Saved/Saved.css';
import PropTypes from 'prop-types';
import Spells from '../Spells/Spells.js';


export default function Saved({savedSpells}) {

  return (
    <div>
      <main className='known-view'>
      <Spells spells={savedSpells} />
    </main>
    <footer>
      <button>
        <NavLink to='/' className='nav'>All Spells</NavLink>
      </button>
    </footer></div>
    
  )
}

Saved.propTypes = {
  savedSpells: PropTypes.array
};