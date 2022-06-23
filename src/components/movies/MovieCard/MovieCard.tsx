import React, {useEffect, useState} from 'react'
import {MovieEntity, MovieGenre} from "../../../types/typings";
import {motion} from "framer-motion";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useAppSelector} from "../../../redux/app/hooks";
import {Box, CircularProgress} from "@mui/material";
import {
    modalFadeInUpVariants,
    posterFadeInVariants,
    staggerOne
} from '../../../utils/motionUtils';
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";

import './MovieCard.scss'
import './Modal.scss'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    maxWidth: 900,
    bgcolor: '#181818',
    boxShadow: 24,
    borderRadius: '17px',
    overflow: 'hidden',
    outline: 'none',
    p: 0,
};


interface Props {
    movie: MovieEntity,
    row: number
}


const baseUrl = 'https://image.tmdb.org/t/p/original/'

export const MovieCard = ({movie, row}: Props) => {
    // const [isHovered, setIsHovered] = useState(false)
    const genresList = useAppSelector((state) => state.settings)
    const [genres, setGenres] = useState<MovieGenre[]>([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const fallbackTitle = movie.title || movie.original_title || movie.name || movie.original_name
    useEffect(() => {
        const currentMovieGenres = genresList.movieGenres.filter((item) => {
            return movie?.genre_ids.includes(item.id);
        });
        setGenres(currentMovieGenres)
    }, [])

    if (genresList.status === 'loading') {
        return <CircularProgress/>
    }

    return (
        <>
            <Modal className='modal' sx={{outline: 'none'}}
                   open={open}
                   onClose={handleClose}
                   closeAfterTransition
                   BackdropComponent={Backdrop}
                   BackdropProps={{
                       timeout: 500,
                   }}
            >
                <Fade in={open}>
                    <Box sx={style}>

                        <img alt={fallbackTitle} className="modal__img" src={`${baseUrl}${movie.backdrop_path}`}/>
                        <motion.div variants={staggerOne} initial="initial" animate="animate" exit="exit"
                                    className="modal__info--wrp">
                            <motion.h3 variants={modalFadeInUpVariants}
                                       className="modal__info--title">{fallbackTitle}</motion.h3>
                            <motion.p variants={modalFadeInUpVariants}
                                      className="modal__info--description">{movie.overview}</motion.p>
                            <motion.hr variants={modalFadeInUpVariants} className="modal__info--line"/>
                            <motion.h4 variants={modalFadeInUpVariants} className="modal__info--otherTitle">Info
                                on <b>{fallbackTitle}</b></motion.h4>
                            <motion.div variants={modalFadeInUpVariants} className="modal__info--row">
                                <span className='modal__info--row-label'>Genres: </span>
                                <span
                                    className="modal__info--row-description">{genres.map(genre => genre.name).join(", ")}</span>
                            </motion.div>
                            <motion.div variants={modalFadeInUpVariants} className="modal__info--row">
									<span className='modal__info--row-label'>
										Release date:
									</span>
                                <span className="modal__info--row-description">{movie.release_date}</span>
                            </motion.div>
                            <motion.div variants={modalFadeInUpVariants} className="modal__info--row">
                                <span className='modal__info--row-label'>Original language: </span>
                                <span className="modal__info--row-description">{movie.original_language}</span>
                            </motion.div>
                            <motion.div variants={modalFadeInUpVariants} className="modal__info--row">
                                <div className='modal__info--row-cell'>
                                    <span className='modal__info--row-label'>Popularity: </span>
                                    <span className="modal__info--row-description">{movie.popularity}</span>
                                </div>
                                <div className='modal__info--row-cell'>
                                    <span className='modal__info--row-label'>Votes: </span>
                                    <span className="modal__info--row-description">{movie.vote_count}</span>
                                </div>
                                <div className='modal__info--row-cell'>
                                    <span className='modal__info--row-label'>Average vote: </span>
                                    <span
                                        className="modal__info--row-description">{movie.vote_average || "Not available"}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </Box>
                </Fade>
            </Modal>
            <motion.div
                variants={posterFadeInVariants}
                className={`poster ${row === 0 ? 'poster__large' : null}`}
                onClick={handleOpen}
            >

                <img className="poster__img" alt={fallbackTitle}
                     src={`${baseUrl}${row === 0 ? movie.poster_path : movie.backdrop_path}`}/>

                <div className="poster__info">
                    <div className="poster__info--box-1">
                        <h4 className="poster__info--title">{fallbackTitle}</h4>
                        <ul className="poster__info--genres">
                            {genres.map(genre => (
                                <li key={`Genre--id_${genre.id}`}
                                    className="poster__info--genres-title">{genre.name}</li>
                            ))}
                        </ul>
                        <div className="poster__info--row">
                            <div className='poster__info--row-cell'>
                                <span className='poster__info--row-label'>Popularity: </span>
                                <span className="poster__info--row-description">{Math.floor(movie.popularity)}</span>
                            </div>
                            <div className='poster__info--row-cell'>
                                <span className='poster__info--row-label'>Votes: </span>
                                <span className="poster__info--row-description">{movie.vote_count}</span>
                            </div>
                        </div>
                    </div>
                    <div className="poster__info--box-2">
                        <MoreVertIcon fontSize='large' className="poster__info--icon"/>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
