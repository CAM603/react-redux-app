import React from 'react';
import { connect } from 'react-redux';

import { nextPage, prevPage } from '../actions/pageAction';

const PokemonList = (props) => {

    const nextPage = () => {
        props.nextPage()
    }
    const prevPage = () => {
        props.prevPage()
    }

    return (
        <div>
            <button onClick={nextPage}>next</button>
            <button onClick={prevPage}>prev</button>
            {props.data.map(el => (
                <h3>{el.name}</h3>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.fetchReducer.data
    }
}
export default connect(mapStateToProps,{nextPage, prevPage})(PokemonList);