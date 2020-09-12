import {searchMoviesFailure, searchMoviesRequest, searchMoviesSuccess} from "./actions";
import {Dispatch} from "react";

export type Movie = {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string,
}

export type Movies = Movie[]

export type MoviesState = {
    loading: boolean,
    movies: Movies,
    errorMessage: string
}

export type apiData = {
    Response: String,
    Search?: Movies,
    totalResults?: string,
    Error?: string
}

export type MoviesAction =
    | ReturnType<typeof searchMoviesRequest>
    | ReturnType<typeof searchMoviesSuccess>
    | ReturnType<typeof searchMoviesFailure>


export type MoviesDispatch = Dispatch<MoviesAction>