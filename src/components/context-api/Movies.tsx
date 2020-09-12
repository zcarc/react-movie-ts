import React from "react";
import {useMoviesState} from "../../contexts/MoviesContexts";
import Movie from "../Movie";

function Movies() {
    const {loading, movies, errorMessage} = useMoviesState()

    return (
        <div className="movies">
            {loading && !errorMessage ? <div>loading...</div> : errorMessage ? (
                <div className="errorMessage">{errorMessage}</div>
            ) : (
                movies.map((movie, index) => <Movie movie={movie} key={index}/>)
            )}
        </div>
    )
}

export default Movies