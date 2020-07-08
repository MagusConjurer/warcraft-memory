import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import characters from "../../characters.json";
import CharacterCard from "../CharacterCard";
import "./style.css"

class CharacterGroup extends React.Component {
  state = {
    characters
  }

  // Callback to pass click status from card

  // Function to shuffle the list of characters
  handleCardClicked = event => {
    event.preventDefault();

    const key = parseInt(event.target.getAttribute("data-key"));
    const index = this.state.characters.findIndex(card => card.id === key);
    const newArray = this.state.characters.slice();
    newArray[index].clicked = true;
    this.setState({
        characters: newArray
      });
  }

  render() {
    return (
      <CardGroup>
        {this.state.characters.map(character => <CharacterCard
          key={character.id.toString()}
          data-key={character.id}
          onClick={this.handleCardClicked}
          name={character.name}
          image={character.image}
        />)}
      </CardGroup>
    )
  }
  
}

export default CharacterGroup;