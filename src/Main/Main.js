import './Main.css';
import Spells from '../Spells/Spells.js';
import { NavLink } from 'react-router-dom';

export default function Main({spells}) {

  return (
    <div>
      <main className='spell-view'>
        <Spells spells={spells}/>
      </main>
      <footer>
        <button>
          <NavLink to='/known' className='nav'>Your Spellbook</NavLink>
        </button>
      </footer>
    </div>
  )
}

