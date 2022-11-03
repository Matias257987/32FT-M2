// import React from 'react';
// import Style from '../styles/SearchBar.module.css'

// export default function SearchBar(props) {
//   // acá va tu código
//   return <div>
//     <input type="text" name="search" id={Style.search} placeholder='Busca tu Ciudad ...' />
//     <button id={Style.buscar} onClick={() => props.onSearch()}> Agregar </button>
//   </div>
// };


import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value = {city}
        onChange = {(e) => setCity(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}