import React from "react";
import { connect } from "react-redux";
import { selectPokemonItem } from "../../reducers/selectors";
import ItemDetail from "./item_detail";


const mapStateToProps = (state, ownProps) => {
    let itemId = ownProps.match.params.itemId;
    return {
        items: selectPokemonItem(state, itemId)
    }
}

export default connect(mapStateToProps)(ItemDetail)