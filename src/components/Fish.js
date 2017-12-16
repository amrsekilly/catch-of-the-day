import React from 'react';
// destructure the formatPrice from the helpers file
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  render() {
    // destructure the fish details & the index from the passed down state 
    const {details, index} = this.props;
    // check the availability of a fish
    const isAvailable = details.status === 'available';
    // show the button if it's available,
    // otherwise show sold out
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';
    
    return (
       <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button 
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(index)}>
          {buttonText}
        </button>
      </li>
    )
  }
}

export default Fish;