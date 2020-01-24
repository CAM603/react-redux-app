import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions/fetchPokemon';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Pokemon = (props) => {
    const { id } = useParams()
    
    useEffect(() => {
        props.fetchPokemon(id)
    }, [])

    return (
        <div>
            <button>{props.name}</button>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.fetchPokemon.pokemon.name
    }
}

export default connect(mapStateToProps,{fetchPokemon})(Pokemon);