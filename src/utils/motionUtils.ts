export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerHalf = {
    animate: {transition: {staggerChildren: .05}}
}

export const staggerOne = {
    animate: {transition: {staggerChildren: .1}}
}

export const modalFadeInUpVariants = {
    initial: {y: 60, opacity: 0, transition: {duration: .8, ease: defaultEasing}},
    animate: {y: 0, opacity: 1, transition: {duration: .8, ease: defaultEasing}}
};
export const posterFadeInVariants = {
    initial: {y: 20, opacity: 0, transition: {duration: .5, ease: defaultEasing}},
    animate: {y: 0, opacity: 1, transition: {duration: .5, ease: defaultEasing}},
    exit: {y: 20, opacity: 0, transition: {duration: .5, ease: defaultEasing}}
};

export const bannerFadeInVariants = {
    initial: {opacity: 0, transition: {duration: .8, ease: defaultEasing}, willChange: "opacity, transform"},
    animate: {opacity: 1, transition: {duration: .8, ease: defaultEasing}, willChange: "opacity, transform"},
    exit: {opacity: 0, transition: {delay: .4, duration: .8, ease: defaultEasing}, willChange: "opacity, transform"}
};

export const bannerFadeInUpVariants = {
    initial: {y: 60, opacity: 0, transition: {duration: .8, ease: defaultEasing}, willChange: "opacity, transform"},
    animate: {
        y: 0,
        opacity: 1,
        transition: {delayChildren: .4, staggerChildren: .3, duration: .8, ease: defaultEasing},
        willChange: "opacity, transform"
    },
    exit: {y: 60, opacity: 0, transition: {duration: .8, ease: defaultEasing}, willChange: "opacity, transform"}
};


export const defaultPageFadeInVariants = {
    initial: {opacity: 0, transition: {duration: .6, ease: defaultEasing}, willChange: "opacity, transform"},
    animate: {opacity: 1, transition: {duration: .6, ease: defaultEasing}, willChange: "opacity, transform"},
    exit: {opacity: 0, transition: {duration: .6, ease: defaultEasing}, willChange: "opacity, transform"}
};
