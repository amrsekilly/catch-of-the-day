import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

   getStore (event) {
      // stop the reloading
      event.preventDefault();
      const storeId = this.textInput.value;
      console.log("Get Store Clicked!: ", storeId);
      // transition to the store page 
      this.context.router.transitionTo(`/store/${storeId}`);
      
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

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;