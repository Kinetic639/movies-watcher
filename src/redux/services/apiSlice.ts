import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {getMoviesGenresRes, getMoviesQueryRes} from "../../types/typings";
import {requests} from "../../config";

const API_KEY = 'f33d49afd2b791f08807b528b158c515'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3'
    }),
    tagTypes: ['Movies'],
    endpoints: (builder) => ({
        getMoviesByGenres: builder.query<getMoviesQueryRes, void>({
            query: () => requests.fetchTrending
        }),
        getMoviesGenres: builder.query<getMoviesGenresRes, void>({
            query: () => requests.fetchGenres
        }),
    })
})


export const {useGetMoviesByGenresQuery, useGetMoviesGenresQuery} = apiSlice
