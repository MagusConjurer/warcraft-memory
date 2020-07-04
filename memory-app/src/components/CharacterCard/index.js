import React from "react";
import "./style.css";

function CharacterCard(props) {
  var fullSRC = process.env.PUBLIC_URL + props.image;
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={fullSRC} />
      </div>
    </div>
  );
}

export default CharacterCard;