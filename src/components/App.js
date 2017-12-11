import React from 'react';
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import SampleFishes from "../sample-fishes";
import base from "../base";


class App extends React.Component {

  // initialize the state 
  constructor() {
    // to allow the use of this
    super();
    this.addFish = this.addFish.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.loadFishes = this.loadFishes.bind(this);
    // initilize state 
    this.state = {
      fishes: {},
      order: {}
    };
  }

  // when the state changes 
  componentWillUpdate(nextProps, nextState) {
    // save the order state to the local storage 
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
  }

  // component will mount 
  componentWillMount() {
    // set the state 
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    // check if there's an order saved to the local storage 
    const savedOrder = localStorage.getItem(`order-${this.props.params.storeId}`);
    // if there was an order saved, set the state with that order
    if (savedOrder) {
      this.setState({
        order: JSON.parse(savedOrder)
      });
    }
  }

  // if the user changes the view 
  componentWillUnmount() {
    base.removeBinding(this.ref);
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

  // add a fish to an order 
  addToOrder(fish) {
    const order = {...this.state.order};
    // either add a new fish to the order, or increment an old one
    order[fish] = order[fish] + 1 || 1;
    this.setState({order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Best Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
              .map(fish => 
                <Fish 
                  key={fish} 
                  index={fish}
                  details={this.state.fishes[fish]}
                  addToOrder={this.addToOrder}
                />
              )
            }
          </ul>
        </div>
        <div className="menu">
          <Order 
            order={this.state.order}
            fishes={this.state.fishes}
            params={this.props.params}
          />
        </div>
        <div className="menu">
         <Inventory 
          addFish={this.addFish} 
          loadFishes={this.loadFishes} 
          />
        </div>
      </div>
    )
  }
}

export default App;