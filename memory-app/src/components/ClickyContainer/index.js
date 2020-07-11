import React from "react";
import CardGroup from "../CardGroup";
import MainNav from "../MainNav";
import JumboHeader from "../JumboHeader";
import characters from "../../characters.json";

class ClickyContainer extends React.Component {
  constructor(props) {
    super(props)

    // Bind the this context to the function
    this.updateCharacters = this.updateCharacters.bind(this);
    this.updateLoseCondition = this.updateLoseCondition.bind(this);

    // Set the state
    this.state = {
      characters,
      lost: false,
      score: 0,
      highScore: 0
    }
  }
  
  updateCharacters = (arr)  =>{
    this.setState({
      characters: arr
    })
    this.updateScore();
  }

  updateLoseCondition = (bool) => {
    this.setState({
      lost: bool
    })
    this.restartGame(bool);
  }

  updateScore() {
    var newScore = 0;
    const oldHigh = this.state.highScore;
    var newHigh = 0;
    this.state.characters.forEach(function(character){
      if(character.clicked === true) {
        newScore++
      }
    })
    if(newScore > oldHigh){
      newHigh = newScore;
    } else {
      newHigh = oldHigh;
    }
    this.setState({
      score: newScore,
      highScore: newHigh
    })
  }

  restartGame = (bool) => {
    if(bool === true) {
      var resetArray = this.state.characters.slice();
      resetArray.forEach(function(character){
        if(character.clicked === true){
          character.clicked = false;
        }
      })
      setTimeout(function(){
        this.setState({
          characters: resetArray,
          lost: false,
          score: 0
        });
      }.bind(this),3000); 
    }
  }

  render() {
    return (
      <div className="container">
        <MainNav score={this.state.score} highScore={this.state.highScore} />
        <JumboHeader score={this.state.score} lost={this.state.lost} />
        <CardGroup {...this.state} updateLoseCondition={this.updateLoseCondition} updateCharacters={this.updateCharacters} />
    </div>
    );
  };
};

export default ClickyContainer;