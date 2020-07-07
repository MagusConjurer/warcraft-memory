import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

class CharacterCard extends React.Component {
  fullSRC = process.env.PUBLIC_URL + this.props.image;

  // Callback to pass up when clicked

  render() {
    return (
      <Card>
        <Card.Img alt={this.props.name} src={this.fullSRC} />
      </Card>
    );
  };
};

export default CharacterCard;