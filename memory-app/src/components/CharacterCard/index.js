import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

function CharacterCard(props) {
  var fullSRC = process.env.PUBLIC_URL + props.image;

  return (
    <Card>
      <Card.Img data-key={props["data-key"]} onClick={props.onClick} alt={props.name} src={fullSRC} />
    </Card>
  );
};

export default CharacterCard;