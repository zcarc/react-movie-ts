import {MoviesAction, MoviesState} from "./types";
import {SEARCH_MOVIES_FAILURE, SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS} from "./actions";

export const initialState: MoviesState = {
    loading: true,
    movies: [],
    errorMessage: ''
}

function reducer(state: MoviesState, action: MoviesAction): MoviesState {

    switch (action.type) {

        case SEARCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: ''
            }

        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload
            }

        case SEARCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            }

        default:
            throw new Error('Unhandled action')

    }
}

export default reducer