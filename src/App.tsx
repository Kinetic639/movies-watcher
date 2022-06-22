import React, {useEffect} from 'react';
// import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import {Box} from "@mui/material";
import {NavBar} from "./components/NavBar/NavBar";
import {useAppDispatch, useAppSelector} from './redux/app/hooks';
import {RootState} from './redux/app/store';
import {getMoviesAsync} from "./redux/features/movies-slice";
import {MoviesList} from "./components/movies/MoviesList/MoviesList";
import {Banner} from "./components/Banner/Banner";
import {useGetMoviesByGenresQuery} from "./redux/services/apiSlice";

export const App = () => {
    const dispatch = useAppDispatch()
    const moviesList = useAppSelector((state: RootState) => state.movies)


    useEffect(() => {
        if (moviesList.status === 'succeeded' || moviesList.status === 'idle') {
            dispatch(getMoviesAsync())
        }
    }, [dispatch])
    const {data, error, isLoading, isFetching, isSuccess} = useGetMoviesByGenresQuery()
    return (
        <Box component='main'>
            {isLoading && <p>Loading</p>}
            {error && <p>Something went wrong</p>}
            {isSuccess && (
                <>
                    <NavBar/>
                    <Banner moviesList={data.results}/>
                </>

            )
            }
            <MoviesList moviesLists={moviesList.moviesLists}/>
        </Box>

    );
}

