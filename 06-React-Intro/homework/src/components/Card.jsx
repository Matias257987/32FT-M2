import React from 'react';
import {Link} from 'react-router-dom'
import style from './Card.module.css';

export default function Card({max, min, name, img, onClose, id}) {
  // acá va tu código
  return (
  <div className={style.cardContainer}>
    <div className={style.close}>
      <button id={style.buttonClose} onClick={onClose}> X </button>
    </div>
    <div className={style.nameCity}>
      <Link to = {`/ciudad/${id}`}>
        <h3 id={style.city}>City: {name}</h3>
      </Link>
    </div>
    <div className={style.info}>
      <span>min: {min}°</span>
      <span>max: {max}°</span>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen" id={style.icon} />
  </div>);
};