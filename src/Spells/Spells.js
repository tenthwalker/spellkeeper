import './Spells.css';
import Card from '../Card/Card.js';

export default function Spells({spells, handleKnown}) {
  const selectedSpell = {
    name: spell.name,
    id: spell.index,
    casting_time: spell.casting_time,
    range: spell.range,
    duration: spell.duration,
    desc: spell.desc,
    isKnown: false
  }

  const spellCards = spells.map((spell) => (
    <Card
      key={spell.index}
      id={spell.index}
      name={spell.name}
      casting_time={spell.casting_time}
      range={spell.range}
      duration={spell.duration}
      desc={spell.desc}
      // isKnown="false"
      handleKnown={handleKnown}
    />
  ))

  return (
    <section className='spell-list'>
      {spellCards}
    </section>
  )
};