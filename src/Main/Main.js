import './Main.css';
import Spells from '../Spells/Spells.js';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Main({spells, handleKnown}) {

  return (
    <div className='main-component'>
      <button className='nav-button'>
        <NavLink to='/known' className='nav'>Your Spellbook</NavLink>
      </button>
      <main className='spell-view'>
        <Spells spells={spells} handleKnown={handleKnown}/>
      </main>
    </div>
  )
}

Main.propTypes = {
  spells: PropTypes.array.isRequired,
  handleKnown: PropTypes.func.isRequired
};