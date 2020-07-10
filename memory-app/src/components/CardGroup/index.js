import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import CharacterCard from "../CharacterCard";
import "./style.css"

class CharacterGroup extends React.Component {
  state ={
    characters: this.props.characters
  }

  componentDidUpdate(prevProps) {
    if(prevProps.characters !== this.props.characters) {
      this.setState({characters: this.props.characters});
    }
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

  // Check which card was clicked, whether it has previously been clicked, and update from there
  handleCardClicked = event => {
    event.preventDefault();

    const key = parseInt(event.target.getAttribute("data-key"));
    const index = this.state.characters.findIndex(card => card.id === key);
    const newArray = this.state.characters.slice();

    if(newArray[index].clicked === false && this.props.lost !== true) {
      newArray[index].clicked = true;
      this.shuffleCards(newArray);
      this.props.updateCharacters(newArray);
    } else {
      this.props.updateLoseCondition(true);
    }
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