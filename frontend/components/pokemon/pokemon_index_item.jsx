import React from "react";
import {Link} from 'react-router-dom';

const PokemonIndexItem = ({ id, name, image_url }) => {
    return (
        <li className="minipokemon">
            <Link to={`/pokemon/${id}`}>
                {id}<img alt={name} src={image_url} />{name}
            </Link>
        </li> 
    )
}

export default PokemonIndexItem;

// { "/pokemon/" + id }