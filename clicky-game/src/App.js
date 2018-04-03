import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

class App extends React.Component {
  state = {
    characters
  };

  // removedFriend = id => {
  //   const characters = this.state.characters.filter(character => character.id !== id);
  //   this.setState({ characters});
  // }

  render() {
    return (
      <Wrapper>
        <div>
          <nav class="navbar">
            <ul class="nav">
              <li class="nav-item col-sm-4">
                <a href="/">Clicky Game</a>
              </li>
              <li class="nav-item col-sm-4">
                Click an image to begin!
              </li>
              <li class="nav-item col-sm-4">
                "Score: "
                "0"
                " | Top Score: "
                "0"
              </li>
            </ul>
          </nav>
        
        {this.state.characters.map(character => (
          <CharacterCard 
            // removeFriend={this.removedFriend}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}</div>
      </Wrapper>
    );
  }
     
 
}

export default App;
