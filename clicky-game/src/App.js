import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import animals from "./animals.json";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import "./App.css";

class App extends React.Component {
  state = {
    message: "Click any cutie-pie to begin!",
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

  selectAnimal = name => {
    const findAnimal = this.state.unselectedAnimals.find(item => item.name === name);

    if (findAnimal === undefined) {
      // Already clicked on the animal
      this.setState({
        message: "Must have been too cute! They've already been clicked!!",
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        animals: animals,
        unselectedAnimals: animals
      });
    } else {
      // Success, haven't clicked before
      const newAnimal = this.state.unselectedAnimals.filter(item => item.name !== name);

      this.setState({
        message: "What a cuttie-pie!",
        currentScore: this.state.currentScore + 1,
        animals: animals,
        unselectedAnimals: newAnimal
      });
    }
    this.shuffleArray(animals);
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          message = {this.state.message}
          currentScore = {this.state.currentScore}
          highScore = {this.state.highScore}
        />
        <Title/>
        <div className="containingDiv">
          {this.state.animals.map(character => (
            <CharacterCard 
              name={character.name} 
              id={character.id}
              key={character.id}
              image={character.image}
              selectAnimal={this.selectAnimal}
              currentScore={this.state.currentScore}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
     
 
}

export default App;
