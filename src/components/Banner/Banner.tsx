import React, {useEffect, useState} from "react";
import {MovieEntity, MovieGenre} from "../../types/typings";

import './Banner.scss'
import {useGetMoviesByGenresQuery, useGetMoviesGenresQuery} from "../../redux/services/apiSlice";
import {useAppSelector} from "../../redux/app/hooks";
import {CircularProgress} from "@mui/material";

interface Props {
    moviesList: MovieEntity[]
}

const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
}

export const Banner = ({moviesList}: Props) => {
    const moviesLists = useAppSelector((state) => state.movies)
    const genresList = useAppSelector((state) => state.settings)
    const [randomMovie, setRandomMovie] = useState<MovieEntity>(moviesLists.moviesLists[0].result[Math.floor(Math.random() * 19)])
    const [genres, setGenres] = useState<MovieGenre[]>([])


    useEffect(() => {
        const currentMovieGenres = genresList.movieGenres.filter((item) => {
            return randomMovie?.genre_ids.includes(item.id);
        });
        setGenres(currentMovieGenres)
    }, [])

    if (moviesLists.status === 'loading') {
        return <CircularProgress/>
    }


    return (
        <div className='banner' style={{
            backgroundSize: 'cover',
            backgroundPosition: ' top center',
            backgroundImage: `url("https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}")`
        }}>
            <div className="banner__content">
                <h1 className='banner__title'>{randomMovie?.title || randomMovie?.original_title}</h1>
                <h3 className='banner__overview'>{truncate(randomMovie.overview, 150)}</h3>
                <div>{genres.map(genre => <p key={genre.id}>{genre.name}</p>)}</div>

            </div>

        </div>
    )
}
