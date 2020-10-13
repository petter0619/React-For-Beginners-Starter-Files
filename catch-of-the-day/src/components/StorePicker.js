import React from 'react';

import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // ES6 method of bidning "this" in React
    /*constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }*/

    myInput = React.createRef();

    // ES6 syntax: goToStore(event) {}
    // The below arrow function syntax sets the method goToStore as a property on the component, thereby solving the binding issue bcs properties are bound to the instance
    // AKA, if you NEED to access 'this' in a custom method you need to use the arrow function syntax
    goToStore = (event) => { 
        event.preventDefault();
        // 1. Get the text from the input
        const storeName = this.myInput.current.value;
        // 2. Change the page to /store/inputText with pushState (aka change the page without reloading it)
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
            <button type="submit">Visit Store</button>
        </form>
        );
    }
}

export default StorePicker;