import React from 'react';
// Import components
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
// Import sample fishes
import sampleFishes from '../sample-fishes';
// Import Firebase
import base from '../base';

class App extends React.Component {
    // -------------------- STATE --------------------
    // Set initial state (when App loads)
    state = {
        fishes: {},
        order: {}
    };

    // -------------------- LIFECYCLE METHODS --------------------
    componentDidMount() {
        const { params } = this.props.match;
        // Reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        // Sync state with Firebase and our store
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        // storeId = key, this.state.order = value
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        // Remove Firebase binding when leaving store
        base.removeBinding(this.ref);
    }

    // -------------------- CUSTOM METHODS --------------------
    // Method to addFish (from AddFishForm) to state
    addFish = (fish) => {
        // 1. Take a copy of the existing state
        const fishes = {...this.state.fishes};
        // 2. Add our new fish to "fishes" variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({fishes: fishes});
    }

    updateFish = (key, updatedFish) => {
        // 1. Take a copy of the current state
        const fishes = { ...this.state.fishes };
        // 2. Update that state
        fishes[key] = updatedFish;
        // 3. Set that to state
        this.setState({ fishes: fishes });
    }

    deleteFish = (key) => {
        // 1. Take a copy of state
        const fishes = { ...this.state.fishes };
        // 2. Remove item by setting it to 'null' = Firebase also deleting the item
        fishes[key] = null;
        // 3. Update state
        this.setState({ fishes });
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
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                />
            </div>
        )
    }
}

export default App;