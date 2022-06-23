import React from 'react'
import {MoviesListByGenre} from "../../../types/typings";
import {MoviesRow} from "../MoviesRow/MoviesRow";

import './MoviesList.scss'

interface Props {
    moviesLists: MoviesListByGenre[]
}

export const MoviesList = ({moviesLists}: Props) => {
    return (
        <div className='movies-list'>

            {moviesLists.map((list, i) =>
                <MoviesRow key={i} position={i} title={list.title} movies={list.result}/>
            )}
        </div>
    )
}
