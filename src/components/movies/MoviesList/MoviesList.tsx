import React from 'react'
import {MoviesListByGenre} from "../../../types/typings";
import {MoviesRow} from "../MoviesRow/MoviesRow";

import './MoviesList.scss'
import {useAppSelector} from "../../../redux/app/hooks";


export const MoviesList = () => {
    const moviesLists = useAppSelector((state) => state.movies)
    return (
        <div className='movies-list'>

            {moviesLists.moviesLists.map((list, i) =>
                <MoviesRow key={i} position={i} title={list.title} movies={list.result}/>
            )}
        </div>
    )
}
