import React from "react";

const ItemDetail = ( { items } )=> {
    return (
        <ul>
            <li>{items.name}</li>
            <li>Happiness: {items.happiness}</li>
            <li>Price: ${items.price}</li>
        </ul>
    )   
}

export default ItemDetail;