import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { HashRouter, Route } from "react-router-dom";
import { receiveSinglePokemon, requestSinglePokemon } from "./actions/pokemon_actions";

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById('root');
    
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.receiveSinglePokemon = receiveSinglePokemon;
    window.requestSinglePokemon = requestSinglePokemon;


    ReactDOM.render(<Root store={store} />, root);
})