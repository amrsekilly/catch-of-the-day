import React from 'react';

class Order extends React.Component {

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
          <li className="total">
            <strong>Total: {total}</strong>
          </li>
        </ul>
      </div>
    )
  }
}

export default Order;