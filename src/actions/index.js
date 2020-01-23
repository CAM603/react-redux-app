import axios from 'axios';

export const FETCHING_START = "FETCHING_START"

export const fetchData = () => dispatch => {
    dispatch({ type: FETCHING_START });
    axios
        .get("https://jgentes-crime-data-v1.p.rapidapi.com/crime")
        .then(res => console.log(res))
        .catch(err => console.log(err))
}