import React from 'react';
import {formatPrice} from '../helpers';
// import the animations addon 
import CSSTransitionGroup from 'react-addons-css-transition-group';

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
    // the remove from order button 
    const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

    // if the fish is not available anymore, return a not available 
    if(!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, we ran out of {fish ? fish.name : 'this type of fish'} {removeButton}</li>
    }
    // render the fish into the order 
    return (
      <li key={key}>
        <span>
        
          <CSSTransitionGroup
            component="span"
            className="count"
            transitionName="count"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
          >
            <span key={count}>{count}</span>
          </CSSTransitionGroup>

          lbs {fish.name} {removeButton}
        </span>
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
        <CSSTransitionGroup 
        className="order"
        transitionName="order"
        component="ul"
        transitionEnterTimeout="700"
        transitionLeaveTimeout="700"
        >      
        {orderKeys.map(this.renderOrder)}
          <li className="total">
            <strong>Total: {formatPrice(total)}</strong>
          </li>
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Order;