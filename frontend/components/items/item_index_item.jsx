import React from 'react';
import {Link} from 'react-router-dom';

const ItemIndexItem = ({pokeId, itemId}) => {
    return (
        <Link to = {`/pokemon/${pokeId}/items/${itemId}`}>
            <h6>{itemId}</h6>
        </Link>
    )
}

export default ItemIndexItem;