import React, {useEffect, useState} from "react";
import {MovieEntity, MovieGenre} from "../../types/typings";
import {useAppDispatch, useAppSelector} from "../../redux/app/hooks";
import {RootState} from "../../redux/app/store";
import {getMoviesAsync} from "../../redux/features/movies-slice";
import {useSelector} from "react-redux";

interface Props {
    moviesList: MovieEntity[]
}

export const Banner = ({moviesLists}: Props) => {
    const dispatch = useAppDispatch()
    const moviesList = useAppSelector((state: RootState) => state.movies)

    return (
        <div>{moviesList.moviesLists[0].title}</div>
    )
}
