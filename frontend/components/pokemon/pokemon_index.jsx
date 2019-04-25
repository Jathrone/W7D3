import React from 'react';

export class PokemonIndex extends React.Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.requestAllPokemon();
    }

    render() {
        return (
            <ul> {
            this.props.pokemon.map (({id, name, image_url}) => {
                    return (
                        <li key={id}> {id} {name} <img alt={name} src={image_url}/></li>
                    ) 
                })
            }
            </ul>
        )
    }
}