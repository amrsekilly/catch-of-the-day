import React from 'react';

class Fish extends React.Component {
  render() {
    return (
      <div className="menu-fish">
        {this.props.details.name}
      </div>
    )
  }
}

export default Fish;