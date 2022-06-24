import React, {useRef} from 'react';
import {MovieEntity} from "../../../types/typings";
import Typography from "@mui/material/Typography";

import './MoviesRow.scss'
import {MovieCard} from "../MovieCard/MovieCard";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Props {
    position: number;
    title: string;
    movies: MovieEntity[]
}


export const MoviesRow = ({title, movies, position}: Props) => {
    const sliderRef = useRef(document.createElement("div"))


    const HandleClick = (direction: string, position: number) => {
        const slider = document.getElementById(`slider-${position}`)
        if (slider) {
            if (direction === 'left') {
                slider.scrollLeft = slider.scrollLeft - 240
            }

            if (direction === 'right') {
                slider.scrollLeft = slider.scrollLeft + 240
            }
        }
    }


    return (
        <div className='row'>
            <Typography variant='h5'>{title}</Typography>
            <div className="row__slider">
                <ArrowBackIosIcon
                    className='sliderArrow left'
                    onClick={() => HandleClick('left', position)}/>
                <div id={`slider-${position}`} className='row__container' ref={sliderRef}>
                    {
                        movies.map(movie => <MovieCard key={movie.id} movie={movie} row={position}/>)
                    }
                </div>
                <ArrowForwardIosIcon className='sliderArrow right'
                                     onClick={() => HandleClick('right', position)}/>
            </div>
        </div>
    )
}
