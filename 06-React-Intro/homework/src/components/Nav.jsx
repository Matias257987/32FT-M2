import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Logo from '../logoHenry.png';
//import About from './About';


export default function Nav({ onSearch }) {
    return (
        <nav> 
            <Link to = '/home'>
                <div>
                    <img src={Logo} alt="logo" />
                    <span>App Clima (FT-32C)</span>
                </div>
            </Link> 
            <div>
                <SearchBar onSearch = {onSearch} />
            </div>
            <Link to = '/about'>
                <span>About</span>
            </Link>
        </nav>
    )
}