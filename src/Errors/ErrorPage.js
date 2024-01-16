import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className='main-component'>
      <h2>Oops! You seem to be lost.</h2>
      <p>Return to the path of knowledge:</p>
      <button className='nav-button'><Link to='/'>All Spells</Link></button>
      <button className='nav-button'><Link to='/known'>Your Spellbook</Link></button>
    </div>
  )
}