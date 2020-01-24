import { 
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
} from '../actions/fetchAction'

const initialState = {
    loading: false,
    error: '',
    data: [],
}

export const fetchReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}