import React from 'react';
import { render } from 'react-dom';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

   getStore (event) {
      // stop the reloading
      event.preventDefault();
      console.log("Get Store Clicked!: ", this.textInput.value);
      
    }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.getStore(e)}>
        <h1>Select a Store</h1>
        <input type="text" name="storeName" placeholder="enter a store name" 
        defaultValue={getFunName()}
        ref={(input) => { this.textInput = input; }}
        required/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;