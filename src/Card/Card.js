import './Card.css';
import React from 'react';

export default function Card({ index, name,  casting_time, range, duration, desc, handleKnown }) {

  const selectedSpell = {
    key: index,
    id: index,
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
      <button className="learn-toggle" onClick={() => handleKnown(selectedSpell)}>Learn</button>
    </div>
  )
};