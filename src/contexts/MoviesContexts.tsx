import React, {createContext, ReactNode, useContext, useReducer} from "react";
import reducer, {initialState, MoviesDispatch, MoviesState} from "../module/movies";

const MoviesStateContext = createContext<MoviesState | undefined>(undefined)
const MoviesDispatchContext = createContext<MoviesDispatch | undefined>(undefined)

export function MoviesContextProvider({children}: {children: ReactNode}) {

    const [movies, dispatch] = useReducer(reducer, initialState)

    return (
        <MoviesStateContext.Provider value={movies}>
            <MoviesDispatchContext.Provider value={dispatch}>
                {children}
            </MoviesDispatchContext.Provider>
        </MoviesStateContext.Provider>

    )
}

export function useMoviesState() {
    const state = useContext(MoviesStateContext)
    if(!state) throw new Error('MoviesProvider not found')
    return state
}

export function useMoviesDispatch() {
    const dispatch = useContext(MoviesDispatchContext)
    if(!dispatch) throw new Error('MoviesProvider not found')
    return dispatch
}