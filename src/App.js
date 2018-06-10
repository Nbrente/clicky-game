import React, { Component } from "react";
import Scoreboard from "./components/Scoreboard";
import BoardPiece from "./components/BoardPiece";
import dogs from "./components/utils/API";

class App extends Component {
  state = {
    message: "",
    highScore: 0,
    currentScore: 0,
    dogs: dogs,
    unselectedDogs: dogs
  };

  
  componentDidMount(){
   
  };

  shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  gameClick = (event) =>{
    let breed = event.target.dataset.breed;
    
    const findDog = this.state.unselectedDogs.find(dogs => dogs.breed === breed);
    
    if (findDog === undefined) {
      this.setState({
        message: "You guessed WRONG!",
            highScore: (this.state.currrentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
            currentScore: 0,
            dogs: dogs,
            unselectedDogs: dogs
          });
        } else {
          // success to select a new cat
          const newDogs = this.state.unselectedDogs.filter(dogs => dogs.breed !== breed);
          
          this.setState({
            message: "You guessed correctly!",
            currentScore: this.state.currentScore +1,
            highScore: (this.state.currrentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
            dogs: dogs,
            unselectedDogs: newDogs
          });
        }
        
        this.shuffleArray(dogs);
      }
      
      render() {
        return (
      <div>
        <Scoreboard 
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />
        <div className="container">
          <div className="row">

            {
              this.state.dogs.map(dog => (
                <BoardPiece   
                  key={dog.breed}
                  image={dog.image}
                  breed={dog.breed}
                  onClick={this.gameClick}
                />
              ))
            }

          </div>
        </div>
      </div>
    );
  };

};

export default App;
