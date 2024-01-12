import './Spells.css';
import Card from '../Card/Card.js';

export default function Spells({spells}) {
  const spellCards = spells.map((spell, i) => (
    <Card
      key={i}
      id={i}
      name={spell.name}
      casting_time={spell.casting_time}
      range={spell.range}
      duration={spell.duration}
      desc={spell.desc}
    />
  ))

  return (
    <section className='spell-list'>
      {spellCards}
    </section>
  )
};