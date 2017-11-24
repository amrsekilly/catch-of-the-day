import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component {

  // the constructor method
  constructor() {
    // to allow the use of this
    super();
    // bind the renderOrder method to the Order class
    this.renderOrder = this.renderOrder.bind(this);
  }

  // render an item in the order 
  renderOrder(key) {
    // get the fish 
    const fish = this.props.fishes[key];
    // get the number of selected items of the fish
    const count = this.props.order[key];

    // if the fish is not available anymore, return a not available 
    if(!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, we ran out of {fish ? fish.name : 'this type of fish'}</li>
    }
    // render the fish into the order 
    return (
      <li key={key}>
        <span>{count}lbs {fish.name}</span>
        <span className="price">{formatPrice(count * fish.price)}</span>
      </li>
    )
  }

  render() {
    // get the order from the state
    const {order, fishes} = this.props;
    // get the key of the order
    const orderKeys = Object.keys(order);

    // calculate the total bill 
    const total = orderKeys.reduce((lastTotal, item) => {
      // get the selected fish 
      const fish = this.props.fishes[item];
      // get the count of the added fish items in the order state
      const count = this.props.order[item];
      // check if the fish was available (to avoid selling a sold out fish)
      const isAvailable = fish && fish.status === 'available';
      // calculate the price for the fish and add it to the total if it was available in the store
      if(isAvailable) {
        return lastTotal + (count * fish.price || 0);
      }
      return lastTotal;
    }, 0);

    return (
        <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">      
        {orderKeys.map(this.renderOrder)}
          <li className="total">
            <strong>Total: {formatPrice(total)}</strong>
          </li>
        </ul>
      </div>
    )
  }
}

export default Order;