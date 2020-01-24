import axios from 'axios';

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE"

export const fetchData = (num) => dispatch => {
    dispatch({ type: FETCHING_START });
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/?offset=${num}&limit=20`)
        .then(res => {
            dispatch({ type: FETCHING_SUCCESS, payload: res.data.results })
        })
        .catch(err => {
            dispatch({ type: FETCHING_FAILURE, payload: err })
        })
}