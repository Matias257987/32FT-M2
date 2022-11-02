import React from 'react';
import Style from '../styles/SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input type="text" name="search" id={Style.search} placeholder='Busca tu Ciudad ...' />
    <button id={Style.buscar} onClick={() => props.onSearch()}> Agregar </button>
  </div>
};