import React from 'react';
// Import components
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
    // Set initial state (when App loads)
    state = {
        fishes: {},
        order: {}
    };
    // Method to addFish (from AddFishForm) to state
    addFish = (fish) => {
        // 1. Take a copy of the existing state
        const fishes = {...this.state.fishes};
        // 2. Add our new fish to "fishes" variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({fishes: fishes});
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;