import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from "react-router-dom";
import PokemonDetailContainer from "../pokemon/pokemon_detail_container";

export class PokemonIndex extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.requestAllPokemon();
    }

    render() {
        return (
            <>
                <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
                <ul> {
                this.props.pokemon.map (({id, name, image_url}) => {
                        return (
                            <PokemonIndexItem key={id} id={id} name={name} image_url={image_url} />
                        ) 
                    })
                }
                </ul>
            </>
        )
    }
}