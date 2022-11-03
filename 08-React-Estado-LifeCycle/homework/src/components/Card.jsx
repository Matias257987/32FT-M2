// import React from 'react';
// import Style from '../styles/Card.module.css';


// export default function Card ({min, max, name, img, onClose, id}) {
//     return (
//       <div className={Style.container}>
//         <div id={Style.close}>
//             <button onClick={onClose}> X </button>
//         </div>
//         <div className={Style.name}>
//           <h5>{name}</h5>
//         </div>
//           <div className={Style.info}>
//               <p>Min</p>
//               <p>{min}°</p>
//               <p>Max</p>
//               <p>{max}°</p>
//           </div>
//             <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="imagen"/>
//       </div>
//     );
// };

import React from 'react';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

