import React from 'react';

class Fish extends React.Component {
  render() {
    // destructure the fish details from the passed down state 
    const {details} = this.props;
    
    return (
      <div className="menu-fish">
        {details.name}
      </div>
    )
  }
}

export default Fish;