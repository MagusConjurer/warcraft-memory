import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import characters from "../../characters.json";
import CharacterCard from "../CharacterCard";
import "./style.css"

class CharacterGroup extends React.Component {
  state = {
    characters
  }

  // Shuffle the cards
  shuffleCards = (arr) => {
    for (let i = arr.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = arr[i]
      arr[i] = arr[j]
      arr[j] = k
    }
    return arr;
  }

  // Check which card was clicked and set its clicked property to true
  handleCardClicked = event => {
    event.preventDefault();

    const key = parseInt(event.target.getAttribute("data-key"));
    const index = this.state.characters.findIndex(card => card.id === key);
    const newArray = this.state.characters.slice();
    newArray[index].clicked = true;
    this.shuffleCards(newArray);
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