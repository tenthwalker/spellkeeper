import './Main.css';
import Spells from '../Spells/Spells.js';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Saved from '../Saved/Saved.js';

export default function Main({spells, buttonToggle, savedSpells}) {
  return (
    <div className='main-component'>
      <button className='nav-button'>
        <NavLink to='/known' className='nav'>Your Spellbook</NavLink>
      </button>
      <main className='spell-view'>
        <Spells spells={spells} buttonToggle={buttonToggle} savedSpells={savedSpells}/>
      </main>
    </div>
  );
};

Main.propTypes = {
  spells: PropTypes.array.isRequired,
  buttonToggle: PropTypes.func.isRequired,
  // learn: PropTypes.bool.isRequired
};