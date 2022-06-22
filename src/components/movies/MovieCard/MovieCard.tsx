import React, {useState} from 'react'
import {MovieEntity} from "../../../types/typings";

import './MovieCard.scss'
import Typography from "@mui/material/Typography";

interface Props {
    movie: MovieEntity,
    row: number
}


const baseUrl = 'https://image.tmdb.org/t/p/original/'

export const MovieCard = ({movie, row}: Props) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/*<img key={movie.id} className={`row__poster ${row == 0 && "row__poster--large"}`}*/}
            {/*     src={`${baseUrl}${row == 0 ? movie.poster_path : movie.backdrop_path}`}*/}
            {/*     alt={movie.title}/>*/}

            <div className={`movie-card__container ${row == 0 && "movie-card__container--large"}`}>
                <img key={movie.id} className={`movie-card__poster ${row == 0 && "movie-card__poster--large"}`}
                     src={`${baseUrl}${row == 0 ? movie.poster_path : movie.backdrop_path}`}
                     alt={movie.title}/>
                {isHovered && (
                    <div className="movie-card__info-container">
                        <Typography variant="h5" component="div"
                                    sx={{padding: '15px 10px'}}>{movie.title}</Typography>
                        <Typography variant="subtitle1" component="div"
                                    sx={{padding: '15px 10px'}}>Popularity: {movie.popularity}</Typography>
                        <Typography variant="subtitle1" component="div"
                                    sx={{padding: '15px 10px'}}>Votes: {movie.vote_count}</Typography>
                        <Typography variant="subtitle1" component="div"
                                    sx={{padding: '15px 10px'}}>Genre: {movie.genre_ids}</Typography>

                    </div>

                )}
            </div>
        </div>
    )
}
