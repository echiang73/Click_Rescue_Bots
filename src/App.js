import React, { Component } from "react";
import RescuebotCard from "./components/RescuebotCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import rescuebots from "./rescuebots.json";
import Nav from "./components/Nav";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    rescuebots,
    currentScore: 0,
    topScore: 0,
    rightWrong: "Click an image to start!",
    clicked: []
  };

  removeRescuebot = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const rescuebots = this.state.rescuebots.filter(rescuebot => rescuebot.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ rescuebots });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    // randomize the array of objects
    rescuebots.sort(function(a, b){return 0.5 - Math.random()});
    // console.log(rescuebots);
    // rescuebots.filter(function(index){return index <10});
    let temprescuebots = rescuebots.slice(0, 10);
    this.state.rescuebots = temprescuebots;

    
    return (
      <Wrapper>
        <Nav
          rightWrong={this.state.rightWrong}
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />

        <Title>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
        </Title>
        

        {this.state.rescuebots.map(rescuebot => (
          <RescuebotCard
            removeRescuebot={this.removeRescuebot}
            id={rescuebot.id}
            key={rescuebot.id}
            name={rescuebot.name}
            image={rescuebot.image}
            // occupation={rescuebot.occupation}
            // location={rescuebot.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
