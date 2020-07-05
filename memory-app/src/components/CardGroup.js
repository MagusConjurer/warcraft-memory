import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import characters from "../characters.json";
import CharacterCard from "./CharacterCard";

class CharacterGroup extends React.Component {
  state = {
    characters
  }

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