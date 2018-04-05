import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import animals from "./animals.json";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends React.Component {
  state = {
    message: "Click on an animal to begin!",
    highScore: 0,
    currentScore: 0,
    animals: animals,
    unselectedAnimals: animals
  };

  // src Laurens Holst via https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * ( i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
  }; 


  render() {
    return (
      <Wrapper>
        <div>
        {/* <Navbar/> */}
        
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
