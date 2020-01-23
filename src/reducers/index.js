import { FETCHING_START } from '../actions'

const initialState = {
    loading: false,
    error: '',
    data: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {
                ...state,
                loading: true,
                error: ''
            }
        // case FETCHING_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         data: action.payload
        //     }
        // case FETCHING_FAILURE:
        //     return {
        //         ...state,
        //         error: action.payload,
        //         loading: false
        //     }
        default:
            return state
    }
}