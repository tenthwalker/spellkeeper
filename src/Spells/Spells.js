import './Spells.css';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

export default function Spells({spells, handleKnown}) {

  const spellCards = spells.map((spell) => (
    <Card
      key={spell.index}
      id={spell.index}
      name={spell.name}
      casting_time={spell.casting_time}
      range={spell.range}
      duration={spell.duration}
      desc={spell.desc}
      isKnown="false"
      handleKnown={handleKnown}
    />
  ));

  return (
    <section className='spell-list'>
      {spellCards}
    </section>
  )
};

Spells.propTypes = {
  spells: PropTypes.array.isRequired
};