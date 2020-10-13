import React from 'react';

class AddFishForm extends React.Component {
    render() {
        return (
            <form className="fish-edit">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="price" placeholder="Price" />
                <select name="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" placeholder="Description" />
                <input type="text" name="image" placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;