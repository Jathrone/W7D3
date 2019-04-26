import React from "react";
import ItemIndexItem from "../items/item_index_item";
import { Route } from "react-router-dom";
import ItemDetailContainer from '../items/item_detail_container';



class PokemonDetail extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        let id = this.props.match.params.pokemonId;
        this.props.requestSinglePokemon(id);
    }

    componentDidUpdate(prevProps){
        let id = this.props.match.params.pokemonId;
        if (prevProps.pokemon && prevProps.pokemon.id != id) {
            this.props.requestSinglePokemon(id);
        }
    }

    render () {
        if (!this.props.pokemon || !Object.keys(this.props.pokemon).includes("poke_type")) {
            return <h1>this is null</h1>
        } else {
        return (
            <div >
                <img src={this.props.pokemon.image_url} alt={this.props.pokemon.name}></img>
                <h3>{this.props.pokemon.name}</h3>
                <ul >
                    <li>Type: {this.props.pokemon.poke_type}</li>
                    <li>Attack: {this.props.pokemon.attack}</li>
                    <li>Defense: {this.props.pokemon.defense}</li>
                    <li>Moves: {this.props.pokemon.moves.join(', ')}</li>
                </ul>
                <div>
                    <ul>
                        {this.props.pokemon.item_ids.map( (itemId, id) => (
                            <li key={id}><ItemIndexItem itemId = {itemId} pokeId={this.props.match.params.pokemonId}/> </li>
                        ))}
                    </ul>
                </div>
                <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer}/>
            </div>
        )}
    }
}

export default PokemonDetail;