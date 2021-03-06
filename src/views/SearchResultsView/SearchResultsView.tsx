import React from 'react'
import {useAppSelector} from "../../redux/app/hooks";
import {CircularProgress} from "@mui/material";
import {MovieCard} from "../../components/movies/MovieCard/MovieCard";

import './SearchResultsView.scss'
import {motion} from 'framer-motion';
import {staggerHalf} from '../../utils/motionUtils';

export const SearchResultsView = () => {
    const searchSlice = useAppSelector((state) => state.search)
    const results = searchSlice.searchedMovies.results
    const query = searchSlice.query

    if (searchSlice.status === 'loading') {
        return <CircularProgress/>
    }
    return (

        <div className='results'>
            <h3>{`Search results for: ${query}`}</h3>
            <motion.div
                variants={staggerHalf}
                initial="initial"
                animate="animate"
                exit="exit"
                className='results__grid'>
                {results && results.length > 0
                    ? results.map((movie, index) => <MovieCard row={2} movie={movie}
                                                               key={index}/>
                    )
                    : (
                        <h2 className="results__info">
                            Sorry, we searched everywhere but we did not found any movie or tv-show with that title.
                        </h2>
                    )
                }
            </motion.div>
        </div>
    )
}
