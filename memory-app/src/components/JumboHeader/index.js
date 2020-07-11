import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";

class JumboHeader extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1 id="status">{this.props.lost === false && this.props.score >= 0
          ? "Choose a card, but don't click the same one twice!"
          : "Oops, you clicked the same card twice! Let's try again."}</h1>
      </Jumbotron>
    );
  };
};

export default JumboHeader;