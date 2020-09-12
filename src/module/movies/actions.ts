import {Movies} from "./types";

export const SEARCH_MOVIES_REQUEST = "SEARCH_MOVIES_REQUEST" as const
export const SEARCH_MOVIES_SUCCESS = "SEARCH_MOVIES_SUCCESS" as const
export const SEARCH_MOVIES_FAILURE = "SEARCH_MOVIES_FAILURE" as const

export const searchMoviesRequest = () => ({type: SEARCH_MOVIES_REQUEST})
export const searchMoviesSuccess = (movies: Movies) => ({type: SEARCH_MOVIES_SUCCESS, payload: movies})
export const searchMoviesFailure = (errorMessage: string) => ({type: SEARCH_MOVIES_FAILURE, error: errorMessage})