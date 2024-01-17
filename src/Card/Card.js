import './Card.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Card({ name, casting_time, range, duration, desc, handleKnown, handleDelete }) {

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const selectedSpell = {
    key: name,
    id: name,
    name: name,
    casting_time: casting_time,
    range: range,
    duration: duration,
    desc: desc,
    isKnown: false
  }

  return (
    <div className='spell-card'>
      <h2>{name}</h2>
      <p>{casting_time}</p>
      <p>{range}</p>
      <p>{duration}</p>
      <p>{desc}</p>
      <div className='button-box'>
        <button className="learn-toggle learn" onClick={() => handleKnown(selectedSpell)}>Learn</button>
        <button className='learn-toggle delete' onClick={()=> handleDelete(selectedSpell)}>Forget</button>
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
  handleKnown: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};