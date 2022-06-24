import React, {useEffect, useState} from "react";

import './Banner.scss'
import {useAppSelector} from "../../redux/app/hooks";
import {MovieEntity, MovieGenre} from "../../types/typings";
import {CircularProgress} from "@mui/material";
import {motion} from "framer-motion";
import {bannerFadeInUpVariants, bannerFadeInVariants} from "../../utils/motionUtils";

const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
}

export const Banner = () => {
    const moviesLists = useAppSelector((state) => state.movies)
    const genresList = useAppSelector((state) => state.settings)
    const [genres, setGenres] = useState<MovieGenre[]>([])
    const [randomMovie, setRandomMovie] = useState<MovieEntity>({
        "adult": false,
        "backdrop_path": "",
        "genre_ids": [],
        "id": 0,
        "original_language": "",
        "name": "",
        "original_name": "",
        "original_title": "",
        "overview": "",
        "popularity": 0,
        "poster_path": "",
        "release_date": "",
        "title": "",
        "video": false,
        "vote_average": 0,
        "vote_count": 0,
        "maturityRating": "",
    })
    useEffect(() => {
        if (moviesLists.status === 'succeeded') {
            setRandomMovie(moviesLists.moviesLists[0].result[Math.floor(Math.random() * 19)])
            const currentMovieGenres = genresList.movieGenres.filter((item) => {
                return moviesLists.moviesLists[0].result[0]?.genre_ids.includes(item.id);
            });
            setGenres(currentMovieGenres)
        }
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [moviesLists])

    if (moviesLists.moviesLists.length === 0) {
        return <CircularProgress/>
    }

    return (
        <motion.header
            variants={bannerFadeInVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}")`
        }}>
            <motion.div
                variants={bannerFadeInUpVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                className="banner__content">
                <motion.h1
                    className='banner__content--title'>{randomMovie.title || randomMovie.original_title || randomMovie.name || randomMovie.original_name}</motion.h1>
                <motion.p className='banner__content--description'>{truncate(randomMovie.overview, 150)}</motion.p>
                <motion.div className='banner__content--genres'>{genres.map(genre => <p key={genre.id}
                                                                                        className='banner__content--genres-item'>{genre.name}</p>)}</motion.div>

            </motion.div>

        </motion.header>
    )
}
