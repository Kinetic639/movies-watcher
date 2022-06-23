import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';

import settingsReducer from '../features/settings-slice'
import moviesReducer from '../features/movies-slice'
import searchReducer from '../features/search-slice'
import {apiSlice} from "../services/apiSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        search: searchReducer,
        settings: settingsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
