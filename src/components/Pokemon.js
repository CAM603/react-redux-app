import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions/fetchPokemon';
import { useParams } from 'react-router-dom';

const Pokemon = (props) => {
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        props.fetchPokemon(id)
    }, [])

    return (
        <div>
            <button>Hi</button>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         name: state.fetchPokemon.name
//     }
// }

export default connect(null,{fetchPokemon})(Pokemon);