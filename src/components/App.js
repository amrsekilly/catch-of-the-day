import React from 'react';
import { render } from 'react-dom';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";


class App extends React.Component {

  // initialize the state 
  constructor() {
    // to allow the use of this
    super();
    this.addFish = this.addFish.bind(this);
    // initilize state 
    this.state = {
      fishes: {}
    };
  }

  addFish(fish) {
    // spread the old fishes state into the new state, 
    // to avoid mutating the old state (for performance reasons)
    const fishes = {...this.state.fishes};
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Best Seafood Market" />
        </div>
        <div className="menu">
          <Order />
        </div>
        <div className="menu">
         <Inventory addFish={this.addFish} />
        </div>
      </div>
    )
  }
}

export default App;