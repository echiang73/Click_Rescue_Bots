import React from "react";
import "./style.css";
// import rescuebots from './images/blades2.png';

const images = require.context('./images', true);

function RescuebotCard(props) {
  // let rescuebots = images('./blades1.png');
  let rescuebots = images(`./${props.image}.png`);
  // console.log(props.name);
  // console.log(`${props.image}.png`);

  return (
    <div className="card remove" onClick={() => props.removeRescuebot(props.id)} >
      <div className="img-container">
        <img alt={props.name} src={rescuebots} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default RescuebotCard;
