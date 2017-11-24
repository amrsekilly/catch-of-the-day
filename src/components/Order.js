import React from 'react';

class Order extends React.Component {
  render() {
    return (
        <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">         
          <li className="total">
            <strong>Total:</strong>
          </li>
        </ul>

      </div>
    )
  }
}

export default Order;