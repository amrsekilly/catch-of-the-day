import React from 'react';
// destructure the formatPrice from the hepers file
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  render() {
    // destructure the fish details from the passed down state 
    const {details} = this.props;
    
    return (
       <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button>Add To Order</button>
      </li>
    )
  }
}

export default Fish;