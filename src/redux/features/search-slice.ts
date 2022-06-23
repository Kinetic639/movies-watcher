import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {requests} from "../../config";
import {getMoviesGenresRes, getMoviesQueryRes, MoviesListByGenre} from "../../types/typings";


export const searchMoviesAsync = createAsyncThunk(
    'movies/searchMoviesAsync',
    async (string: string) => {
        const res = await
            fetch(`${requests.searchMovies}${string}`).then((res) => res.json())
        return {result: res, query: string}
    },
);


interface MoviesSliceState {
    searchedMovies: getMoviesQueryRes;
    query: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: MoviesSliceState = {
    searchedMovies: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    query: '',
    status: 'idle',
    error: null,
};

export const searchSlice = createSlice({
    name: 'searchResults',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchMoviesAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(searchMoviesAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.searchedMovies = action.payload.result
                state.query = action.payload.query
            })
            .addCase(searchMoviesAsync.rejected, (state, action) => {
                state.status = 'failed';
            })

    },
});

export default searchSlice.reducer;
