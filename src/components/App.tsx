import React, {useCallback, useEffect, useReducer} from "react";
import '../App.css'
import Header from "./Header";
import Search from "./Search";
import Movie from "./Movie";
import reducer, {apiData, initialState, searchMoviesFailure, searchMoviesSuccess} from "../module/movies";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const search = useCallback(async (searchValue?: string) => {

            // 4a3b711b
            const API_KEY = "8742bb6";
            const MOVIE_API_URL = `https://www.omdbapi.com/?s=${searchValue || 'man'}&apikey=${API_KEY}`;

            const response = await fetch(MOVIE_API_URL)
            const data: apiData = await response.json()

            if (data.Response === "True") {
                data.Search && dispatch(searchMoviesSuccess(data.Search))
            } else {
                data.Error && dispatch(searchMoviesFailure(data.Error))
            }

        }, []
    )

    useEffect(() => {
        search().then()
    }, [search])

    const {movies, errorMessage, loading} = state;

    return (
        <div className="App">
            <Header text="영화 검색 애플리케이션"/>
            <Search search={search}/>
            <div className="movies">
                {loading && !errorMessage ? (
                    <div>loading...</div>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                    movies.map((movie, index) => (
                        <Movie key={`${index}-${movie.Title}`} movie={movie} />
                    ))
                )}
            </div>
        </div>
    )
}

export default App