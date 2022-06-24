import {motion} from 'framer-motion';
import React from 'react'
import {Banner} from "../../components/Banner/Banner";
import {MoviesList} from "../../components/movies/MoviesList/MoviesList";
import {defaultPageFadeInVariants} from "../../utils/motionUtils";

export const HomeView = () => {
    return (
        <motion.div variants={defaultPageFadeInVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit">
            <Banner/>
            <MoviesList/>
        </motion.div>
    )
}
