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

    // Set the state
    this.state = {
      characters,
      lost: false
    }
  }
  
  updateCharacters = (arr)  =>{
    console.log(arr);
    this.setState({
      characters: arr
    })
  }

  render() {
    return (
      <div className="container">
        <MainNav />
        <JumboHeader />
        <CardGroup characters={this.state.characters} updateCharacters={this.updateCharacters} />
    </div>
    );
  };
};

export default ClickyContainer;