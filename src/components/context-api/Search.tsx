import React, {ChangeEvent, MouseEvent, useCallback, useEffect, useState} from "react";
import {apiData, searchMoviesFailure, searchMoviesSuccess} from "../../module/movies";
import {useMoviesDispatch} from "../../contexts/MoviesContexts";

function Search() {

    const [searchValue, setSearchValue] = useState('')
    const dispatch = useMoviesDispatch()

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

        }, [dispatch]
    )

    useEffect(() => {search().then()}, [search])

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value)
        },
        []
    )

    const onClick = useCallback(
        (e: MouseEvent<HTMLInputElement>) => {
            e.preventDefault()
            search(searchValue).then()
            setSearchValue('')
        },
        [searchValue, search]
    )

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={onChange}
                type="text"
            />
            <input onClick={onClick} type="submit" value="SEARCH"/>
        </form>
    )
}

export default Search