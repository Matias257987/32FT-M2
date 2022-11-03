import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav>
      <span>
        <img src={Logo} alt="logo" />
        Clima App/ 32C
      </span>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
