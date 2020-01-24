import { combineReducers } from 'redux';

import { fetchReducer } from './fetchReducer';
import { pageReducer } from './pageReducer';
import { fetchPokemon } from './fetchPokemon';

const rootReducer = combineReducers({
    fetchReducer,
    pageReducer,
    fetchPokemon
})

export default rootReducer;