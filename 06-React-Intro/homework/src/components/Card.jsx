import React from 'react';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return <div>
    <h1>{name}</h1>
    <h3>max: {max} / min: {min}</h3>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen" />
    <button onClick={onClose}> X </button>
  </div>
};