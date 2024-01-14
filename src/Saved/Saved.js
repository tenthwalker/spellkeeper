import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Saved/Saved.css';
import PropTypes from 'prop-types';
import Spells from '../Spells/Spells.js';

export default function Saved({savedSpells, handleKnown}) {

  return (
    <div className='main-component'>
      <button className='nav-button'>
        <NavLink to='/' className='nav'>All Spells</NavLink>
      </button>
      <main className='known-view'>
        {savedSpells.length === 0 && <span className='message'>go learn some spells</span>}
        <Spells spells={savedSpells} handleKnown={handleKnown} />
      </main>
    </div>
  )
}

Saved.propTypes = {
  savedSpells: PropTypes.array.isRequired
};