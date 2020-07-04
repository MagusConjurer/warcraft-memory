import React from 'react';
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import './App.css';

class App extends React.Component {
  state = {
    characters
  }
  render() {
    return (
      <div className="container">
          {this.state.characters.map(character => <CharacterCard
            key={character.id.toString()}
            name={character.name}
            image={character.image}
          />)}
      </div>
    );
  }
}

export default App;
