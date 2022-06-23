import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {requests} from "../../config";
import {MovieGenre} from "../../types/typings";

export const getMoviesGenresAsync = createAsyncThunk(
    'gifts/getGiftAsync',
    async () => {
        const movieGenres = await
            fetch(requests.fetchGenres).then((res) => res.json())
        return movieGenres.genres
    },
);


interface SettingSliceState {
    movieGenres: MovieGenre[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: SettingSliceState = {
    movieGenres: [],
    status: 'idle',
    error: null,
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMoviesGenresAsync.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getMoviesGenresAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.movieGenres = action.payload

            })
            .addCase(getMoviesGenresAsync.rejected, (state, action) => {
                state.status = 'failed';
            })

    },
});

export default settingsSlice.reducer;
