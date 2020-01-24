import { combineReducers } from 'redux';

import { fetchReducer } from './fetchReducer';
import { pageReducer } from './pageReducer';

const rootReducer = combineReducers({
    fetchReducer,
    pageReducer
})

export default rootReducer;