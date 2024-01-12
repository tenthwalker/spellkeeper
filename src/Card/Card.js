import './Card.css';
import React, { useState } from 'react';

export default function Card({ name, casting_time, range, duration, desc }) {
  return (
    <div className='spell-card'>
      <h2>{name}</h2>
      <p>{casting_time}</p>
      <p>{range}</p>
      <p>{duration}</p>
      <p>{desc}</p>
      <button>Learn</button>
    </div>
  )
}