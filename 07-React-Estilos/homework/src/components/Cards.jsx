import React from 'react';
import Card from './Card';
import Style from '../styles/Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div className={Style.contCards}>
    {props.cities.length > 0 ? (
      props.cities.map((city) => {
        return ( 
          <Card 
            key = {city.id}
            max = {city.main.temp_max}
            min = {city.main.temp_min}
            name = {city.name}
            img = {city.weather[0].icon}
            onClose = {() => alert(city.name)}
          />
        );
      })
    ) : (<h3>No hay Ciudades</h3>)}
  </div>);
};