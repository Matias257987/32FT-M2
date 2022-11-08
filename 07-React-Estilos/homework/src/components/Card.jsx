import React from 'react';
import Style from '../styles/Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div class={Style.container}>
      <button id={Style.close} onClick={onClose}> X </button>
      <h3 id={Style.name}> {name} </h3>
      <div class={Style.info}>
        <span >min: {min}</span>
        <span >max: {max}</span>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen"/>
    </div>
  );
};