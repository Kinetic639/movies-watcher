import React from 'react';
// import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import {Box, Typography} from "@mui/material";
import {NavBar} from "./components/NavBar/NavBar";

export const App = () =>  {
    // const location = useLocation()
  return (
      <Box component='main'>
          <NavBar/>
          <Typography variant="h6" gutterBottom component="div" > Test</Typography>
      </Box>

  );
}

