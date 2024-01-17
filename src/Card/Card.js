import './Card.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ name, casting_time, range, duration, desc,  buttonToggle, savedSpells }) {

  const selectedSpell = {
    key: name,
    id: name,
    name: name,
    casting_time: casting_time,
    range: range,
    duration: duration,
    desc: desc,
    isKnown: savedSpells?.find(spell => spell.name === name)
  }

  return (
    <div className='spell-card'>
      <h2>{name}</h2>
      <p>{casting_time}</p>
      <p>{range}</p>
      <p>{duration}</p>
      <p>{desc}</p>
      <div className='button-box'>
        <button className="learn-toggle learn" onClick={() => buttonToggle(selectedSpell)}>
          {selectedSpell.isKnown ? 'Forget' : 'Learn'}
        </button>
      </div>
    </div>
  )
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  casting_time: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  desc: PropTypes.array.isRequired,
  buttonToggle: PropTypes.func.isRequired,
  savedSpells: PropTypes.array.isRequired
};