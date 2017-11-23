import React from 'react';
import { render } from 'react-dom';
import AddFishForm from './AddFishForm';


class Inventory extends React.Component {
  render() {
    return (
      <div>
       <form className="store-selector">
        <h1>Inventory</h1>
        </form>
        <AddFishForm />
      </div>
     
    )
  }
}

export default Inventory;