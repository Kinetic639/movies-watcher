import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {API_KEY} from "../../config";

export const getMoviesAsync = createAsyncThunk(
    'gifts/getGiftAsync',
    async () => {
        const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=the+avengers&page=1`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await resp.json();
        return data;
    },
);


interface MoviesSliceState {
    movies: [];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: MoviesSliceState = {
    movies: [],
    status: 'idle',
    error: null,
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMoviesAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getMoviesAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movies = action.payload
            })
            .addCase(getMoviesAsync.rejected, (state, action) => {
                state.status = 'failed';
            })

    },
});

export default moviesSlice.reducer;
