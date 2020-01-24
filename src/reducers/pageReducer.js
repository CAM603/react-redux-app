import { NEXT_PAGE, PREV_PAGE } from "../actions/pageAction"

const initialState = {
    page: 0
}

export const pageReducer = (state = initialState, action) => {
    switch(action.type) {
        case NEXT_PAGE:
            return {
                ...state,
                page: state.page + 20
            }
        case PREV_PAGE:
            if (state.page < 20) {
                return state
            } else {
                return {
                    ...state,
                    page: state.page - 20
                }
            }
        default:
            return state
    }
}