import React from "react";
import '../../App.css'
import {MoviesContextProvider} from "../../contexts/MoviesContexts";
import Header from "../Header";
import Search from "./Search";
import Movies from "./Movies";


function App() {

    return (
        <MoviesContextProvider>
            <div className="App">
                <Header text="영화 검색 애플리케이션"/>
                <Search />
                <Movies />
            </div>
        </MoviesContextProvider>
    )
}

export default App