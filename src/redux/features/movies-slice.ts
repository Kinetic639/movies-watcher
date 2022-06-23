import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {requests} from "../../config";
import {MoviesListByGenre} from "../../types/typings";

export const getMoviesAsync = createAsyncThunk(
    'movies/getMoviesAsync',
    async () => {
        const [
            trendingNow,
            netflixOriginals,
            topRated,
            actionMovies,
            comedyMovies,
            horrorMovies,
            romanceMovies,
            documentaries,
        ] = await Promise.all([
            fetch(requests.fetchTrending).then((res) => res.json()),
            fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
            fetch(requests.fetchTopRated).then((res) => res.json()),
            fetch(requests.fetchActionMovies).then((res) => res.json()),
            fetch(requests.fetchComedyMovies).then((res) => res.json()),
            fetch(requests.fetchHorrorMovies).then((res) => res.json()),
            fetch(requests.fetchRomanceMovies).then((res) => res.json()),
            fetch(requests.fetchDocumentaries).then((res) => res.json()),
        ])
        return [
            {title: 'Trending Now', result: trendingNow.results},
            {title: 'Netflix Originals', result: netflixOriginals.results},
            {title: 'Top Rated', result: topRated.results},
            {title: 'Action Movies', result: actionMovies.results},
            {title: 'Comedy Movies', result: comedyMovies.results},
            {title: 'Horror Movies', result: horrorMovies.results},
            {title: 'Romance Movies', result: romanceMovies.results},
            {title: 'Documentaries', result: documentaries.results},
        ]
    },
);


interface MoviesSliceState {
    moviesLists: MoviesListByGenre[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: MoviesSliceState = {
    moviesLists: [],
    status: 'idle',
    error: null,
};

export const moviesSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMoviesAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getMoviesAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.moviesLists = action.payload
            })
            .addCase(getMoviesAsync.rejected, (state, action) => {
                state.status = 'failed';
            })

    },
});

export default moviesSlice.reducer;
