import React from 'react'
import {Banner} from "../../components/Banner/Banner";
import {MoviesList} from "../../components/movies/MoviesList/MoviesList";

export const HomeView = () => {
    return (
        <>
            <Banner/>
            <MoviesList/>
        </>
    )
}
