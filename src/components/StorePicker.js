import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
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