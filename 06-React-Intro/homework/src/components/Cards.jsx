import React from 'react';
import Card from './Card.jsx';
import style from './Cards.module.css';

export default function Cards({ cities, onClose }) {
  if (cities.length > 0) { 
    return (
      <div className={style.container}>
        {cities.map((c) => 
          <Card 
            key = {c.id}
            max = {c.max} 
            min = {c.min} 
            name = {c.name} 
            img = {c.img}
            onClose = {() => onClose(c.id)}
            id = {c.id}
          />
        )}
      </div>
    );
  } else {
    return (
      <div>Sin ciudades</div>
    )
  }
};