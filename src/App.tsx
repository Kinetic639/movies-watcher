import React, {useEffect} from 'react';
// import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import {Box} from "@mui/material";
import {NavBar} from "./components/NavBar/NavBar";
import {useAppDispatch, useAppSelector} from './redux/app/hooks';
import {RootState} from './redux/app/store';
import {getMoviesAsync} from "./redux/features/movies-slice";
import {MoviesList} from "./components/movies/MoviesList/MoviesList";
import {Banner} from "./components/Banner/Banner";

export const App = () => {
    // const location = useLocation()
    const dispatch = useAppDispatch()
    const moviesList = useAppSelector((state: RootState) => state.movies)


    useEffect(() => {
        if (moviesList.status === 'succeeded' || moviesList.status === 'idle') {
            dispatch(getMoviesAsync())
        }
    }, [dispatch])
    return (
        <Box component='main'>
            <NavBar/>
            <Banner moviesLists={moviesList.moviesLists}/>
            <MoviesList moviesLists={moviesList.moviesLists}/>
        </Box>

    );
}

