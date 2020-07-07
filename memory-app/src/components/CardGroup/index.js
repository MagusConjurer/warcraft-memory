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

  render() {
    return (
      <CardGroup>
        {this.state.characters.map(character => <CharacterCard
          key={character.id.toString()}
          name={character.name}
          image={character.image}
        />)}
      </CardGroup>
    )
  }
  
}

export default CharacterGroup;