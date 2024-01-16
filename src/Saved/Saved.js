import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Saved/Saved.css';
import PropTypes from 'prop-types';
import Spells from '../Spells/Spells.js';

export default function Saved({buttonToggle, savedSpells, handleKnown, handleDelete}) {

  return (
    <div className='main-component'>
      <button className='nav-button'>
        <NavLink to='/' className='nav'>All Spells</NavLink>
      </button>
      <main className='known-view'>
        {savedSpells.length === 0 && <span className='message'>go learn some spells</span>}
        <Spells buttonToggle={buttonToggle} spells={savedSpells} handleKnown={handleKnown} handleDelete={handleDelete} />
      </main>
    </div>
  )
}

Saved.propTypes = {
  buttonToggle: PropTypes.bool.isRequired,
  savedSpells: PropTypes.array.isRequired,
  handleKnown: PropTypes.func.isRequired, 
  handleDelete: PropTypes.func.isRequired
};