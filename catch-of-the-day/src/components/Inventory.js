import React from 'react';
// Import components
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddFishForm/>
            </div>
        )
    }
}

export default Inventory;