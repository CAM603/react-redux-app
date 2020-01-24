import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions/fetchPokemon';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Pokemon = (props) => {
    const { id } = useParams()
    
    useEffect(() => {
        props.fetchPokemon(id)
    }, [id])

    return (
        <div>
            <p>{props.name}</p>
            <p>Type: {props.types.map(el => <p>{el.type.name}</p>)}</p>
            <p>Height: {props.height}</p>
            <p>Weight: {props.weight}</p>
            <img src={props.pic}/>
            {props.moves.map(el => (
                <p key={el.move.url}>{el.move.name}</p>
            ))}
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.fetchPokemon.name,
        moves: state.fetchPokemon.moves,
        pic: state.fetchPokemon.pic,
        types: state.fetchPokemon.types,
        height: state.fetchPokemon.height,
        weight: state.fetchPokemon.weight
    }
}

export default connect(mapStateToProps,{fetchPokemon})(Pokemon);