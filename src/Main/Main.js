import './Main.css';
import Spells from '../Spells/Spells.js';

export default function Main({spells}) {

  return (
    <div>
      <main className='spell-view'>
        <Spells spells={spells}/>
      </main>
      <footer>
        <button>Your Spellbook</button>
      </footer>
    </div>
  )
}

