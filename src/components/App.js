import React from 'react';
import { render } from 'react-dom';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import { log } from 'util';
import SampleFishes from "../sample-fishes";


class App extends React.Component {

  // initialize the state 
  constructor() {
    // to allow the use of this
    super();
    this.addFish = this.addFish.bind(this);
    this.loadFishes = this.loadFishes.bind(this);
    // initilize state 
    this.state = {
      fishes: {}
    };
  }

  loadFishes() {
    this.setState({
      fishes: SampleFishes
    });
  }

  addFish(fish) {
    // spread the old fishes state into the new state, 
    // to avoid mutating the old state (for performance reasons)
    const fishes = {...this.state.fishes};
    // create a unique identifier using a timestamp
    const timestamp = Date.now();
    // write the new fish to the new state 
    fishes[`fish-${timestamp}`] = fish;
    // save that to the state 
    this.setState({fishes});
    // console.log(fishes);

  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Best Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
              .map(fish => <Fish />)
            }
          </ul>
        </div>
        <div className="menu">
          <Order />
        </div>
        <div className="menu">
         <Inventory addFish={this.addFish} loadFishes={this.loadFishes} />
        </div>
      </div>
    )
  }
}

export default App;