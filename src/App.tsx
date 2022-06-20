import React,  {useEffect} from 'react';
// import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import {Box, Typography} from "@mui/material";
import {NavBar} from "./components/NavBar/NavBar";
import { useAppDispatch, useAppSelector } from './redux/app/hooks';
import { RootState } from './redux/app/store';
import {getMoviesAsync} from "./redux/features/movies-slice";

export const App = () =>  {
    // const location = useLocation()
    const dispatch = useAppDispatch()
    const moviesList = useAppSelector((state: RootState) => state.movies)
    useEffect(() => {
            dispatch(getMoviesAsync())
    }, [])
  return (
      <Box component='main'>
          <NavBar/>
          <Typography variant="h6" gutterBottom component="div" > Test</Typography>
      </Box>

  );
}

