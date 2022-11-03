import React from 'react';
import Card from './Card.jsx';
//import Style from '../styles/Cards.module.css';
import './Cards.css';
 
// export default function Cards(props) {
//   return (
//     <div className={Style.contCards}> {
//       props.cities.length > 0 ? (
//         props.cities.map((city) => {
//           return (
//             <Card 
//               key = {city.id}
//               max = {city.main.temp_max}
//               min = {city.main.temp_min}
//               name = {city.name}
//               onClose = {() => onClose(key)}
//             />
//           );
//         }) 
//       ) : (<h3>No hay Ciudades</h3>)
//     }
//     </div>
//   )
// }



export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
