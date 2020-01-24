import { FETCHING_POKEMON_START, FETCHING_POKEMON_SUCCESS, FETCHING_POKEMON_FAILURE } from "../actions/fetchPokemon"

const initialState = {
    loading: false,
    error: '',
    name: '',
    moves: [],
    pic: '',
    types: [],
    height: '',
    weight: '',
    data: []
}

export const fetchPokemon = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_POKEMON_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCHING_POKEMON_SUCCESS:
            return {
                ...state,
                loading: false,
                name: action.payload.name,
                moves: action.payload.moves,
                pic: action.payload.sprites.front_default,
                types: action.payload.types,
                height: action.payload.height,
                weight: action.payload.weight,
                data: action.payload
            }
        case FETCHING_POKEMON_FAILURE:
            return {
                ...state,
                error: action.paylaod,
                loading: false
            }
        default:
            return state
    }
}