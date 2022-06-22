import React from 'react'
import {MovieGenre} from "../../../types/typings";
import {MoviesRow} from "../MoviesRow/MoviesRow";

import './MoviesList.scss'

interface Props {
    moviesLists: MovieGenre[]
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
