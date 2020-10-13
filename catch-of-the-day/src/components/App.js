import React from 'react';
// Import components
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
// Import sample fishes
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    // -------------------- STATE --------------------
    // Set initial state (when App loads)
    state = {
        fishes: {},
        order: {}
    };

    // -------------------- LIFECYCLE METHODS --------------------

    // -------------------- Custom Methods --------------------
    // Method to addFish (from AddFishForm) to state
    addFish = (fish) => {
        // 1. Take a copy of the existing state
        const fishes = {...this.state.fishes};
        // 2. Add our new fish to "fishes" variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({fishes: fishes});
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    }

    addToOrder = (key) => {
        // 1. Take a copy of state
        const order = {...this.state.order};
        // 2. Either add to order OR update the number in our order
        order[key] = order[key] + 1 || 1;
        // 3. Call setState to update our state object
        this.setState({ order: order });
    }

    // -------------------- RENDER --------------------
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                                index={key}
                            />
                        ))}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        )
    }
}

export default App;