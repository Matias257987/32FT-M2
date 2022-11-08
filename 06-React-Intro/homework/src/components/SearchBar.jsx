import React, { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form onSubmit = {(e) => 
      {e.preventDefault();
      onSearch(city);
      }}>
      <input id={style.searchBar} type="text" placeholder='Busca tu Ciudad...' value={city} onChange={(e) => setCity(e.target.value)}/>
      <button id={style.searchButton} >Agregar</button>
    </form>
  )
};