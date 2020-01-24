import axios from 'axios';

export const FETCHING_POKEMON_START = "FETCHING_START";
export const FETCHING_POKEMON_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_POKEMON_FAILURE = "FETCHING_FAILURE"

export const fetchPokemon = (name) => dispatch => {
    dispatch({ type: FETCHING_POKEMON_START });
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {
            dispatch({ type: FETCHING_POKEMON_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_POKEMON_FAILURE, payload: err })
        })
}