import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

   getStore (event) {
      // stop the reloading
      event.preventDefault();
      console.log("Get Store Clicked!");
    }

  render() {
    return (
      <form className="store-selector" onSubmit={this.getStore}>
        <h1>Select a Store</h1>
        <input type="text" name="storeName" placeholder="enter a store name" 
        defaultValue={getFunName()}
        required/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;