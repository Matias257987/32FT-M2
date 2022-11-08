import React from "react";
import { useParams } from "react-router-dom";


export default function Ciudad({ onFilter }) {
    let {ciudadId} = useParams();
    let city = onFilter(ciudadId);
    console.log(city);

    return (
        <div>
            <h3>{city.name}</h3>
            <span>min: {city.min}°</span><hr/>
            <span>max: {city.max}°</span><hr/>
            <span>Clouds: {city.clouds}</span><hr/>
            <span>weather: {city.weather}</span><hr/>
        </div>
    )
}
