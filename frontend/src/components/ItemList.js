import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    },[]);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/')
            setItems(response.data);
        } catch (error) {
            console.error('Error catching the items!', error)
        }
    };


    return (
        <center>
            <div>
                <h1>Items</h1>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.firstname} {item.middlename} {item.lastname} : {item.address} : {item.email} : {item.mobile}
                            <button onClick={() => onEdit(item)}>Edit</button>
                            <button onClick={() => onDelete(item.id)}>Delete</button>
                
                        </li>
                    ))}
                </ul>
            </div>
        </center>
    );

}

export default ItemList;