import React, {useEffect} from 'react';
import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import {Box, CircularProgress} from "@mui/material";
import {NavBar} from "./components/NavBar/NavBar";
import {useAppDispatch, useAppSelector} from './redux/app/hooks';
import {RootState} from './redux/app/store';
import {getMoviesAsync} from "./redux/features/movies-slice";
import {getMoviesGenresAsync} from "./redux/features/settings-slice";
import {HomeView} from "./views/Home/HomeView";
import {SearchResultsView} from "./views/SearchResultsView/SearchResultsView";
import {AnimatePresence} from "framer-motion";

export const App = () => {
    const location = useLocation()
    const dispatch = useAppDispatch()
    const moviesList = useAppSelector((state: RootState) => state.movies)
    const settings = useAppSelector((state: RootState) => state.settings)


    useEffect(() => {
        if (moviesList.status === 'succeeded' || moviesList.status === 'idle') {
            dispatch(getMoviesAsync())
        }
        if (settings.status === 'succeeded' || settings.status === 'idle') {
            dispatch(getMoviesGenresAsync())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])


    if (moviesList.status === 'loading' || settings.status === 'loading') {
        return <CircularProgress/>
    }
    return (
        <Box component='main'>
            <NavBar/>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Navigate replace to="/home"/>}/>
                    <Route path="/home" element={<HomeView/>}/>
                    <Route path="/search" element={<SearchResultsView/>}/>
                </Routes>
            </AnimatePresence>
        </Box>

    );
}

