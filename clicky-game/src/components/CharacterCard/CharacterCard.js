import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
//   <div className="card">
    <div className="img-container">
        <a onClick={() => props.selectAnimal(props.name)} className = { props.currentScore === 0 ? "newGame" : "playingGame" } >
            <img className="card" alt={props.name} src={props.image} />
        </a>
    </div>
//   </div>
);

export default CharacterCard;
