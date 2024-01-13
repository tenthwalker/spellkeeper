import './Card.css';
import React from 'react';

export default function Card({ name, casting_time, range, duration, desc, handleKnown }) {
  return (
    <div className='spell-card'>
      <h2>{name}</h2>
      <p>{casting_time}</p>
      <p>{range}</p>
      <p>{duration}</p>
      <p>{desc}</p>
      <button className="learn-toggle" onClick={handleKnown}>Learn</button>
    </div>
  )
}