import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";

class JumboHeader extends React.Component {

  state = {
    text: "Click a card to start!"
  }

  updateStatus = event => {
    //setState(updater, [callback])
  }

  render() {
    return (
      <Jumbotron>
        <h1 id="status">{this.state.text}</h1>
      </Jumbotron>
    );
  };
};

export default JumboHeader;