import { useState } from "react";

const ShoppingForm = ({generateList}) => {
    const [groceryItems, setGroceryItems] = useState({
        
        item1: '',
        item2: '',
        item3: ''
        
    });
        
    const handleChange = (event) => {
        const {name, value} = event.target;

        setGroceryItems(currentItems => ({
            ...currentItems,
            [name]: value
        }));
    };

    const handlesubmit = (event) => {
        event.preventDefault();
        console.log(groceryItems);
        generateList(groceryItems);
    };

    return(
        <form onSubmit={handlesubmit}>
            <label>
                item1
                <input 
                type="text" name="item1" 
                value={groceryItems.item1} 
                onChange={handleChange}
                />
            </label>
            <label>
                item2
                <input 
                type="text" name="item2" 
                value={groceryItems.item2} 
                onChange={handleChange}
                />
            </label>
            <label>
                item3
                <input 
                type="text" name="item3" 
                value={groceryItems.item3} 
                onChange={handleChange}
                />
            </label>
            <button type="submit">Make My List</button>
        </form>
    );
};

export default ShoppingForm;