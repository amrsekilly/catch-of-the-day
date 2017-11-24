import React from 'react';

class Order extends React.Component {

  render() {
    // get the order from the state
    const {order} = this.props;
    // get the key of the order
    const orderId = Object.keys(order);

    return (
        <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">      
          {orderId}   
          <li className="total">
            <strong>Total:</strong>
          </li>
        </ul>
      </div>
    )
  }
}

export default Order;