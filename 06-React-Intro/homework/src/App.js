import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Ciudad from './components/Ciudad';

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((city) => city.id === parseInt(ciudadId));
    if (ciudad.length > 0) return ciudad[0];
    else return null;
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path="/home" element={<Cards cities={cities} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/ciudad/:ciudadId" element={<Ciudad onFilter={onFilter}/>} />
      </Routes>
    </div>
  );
}

// Arreglar estilos y ordenar archivos.
