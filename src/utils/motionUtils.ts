export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerOne = {
    hidden: {opacity: 0, top: "100%", transition: {duration: .8, ease: defaultEasing}},
    animate: {transition: {staggerChildren: .1}},

    exit: {y: 20, opacity: 0, transition: {duration: .5, ease: defaultEasing}}
}

export const modalVariants = {
    hidden: {opacity: 0, top: "100%", transition: {duration: .8, ease: defaultEasing}},
    visible: {opacity: 1, top: "50%", transition: {duration: .8, ease: defaultEasing}}
}

export const modalOverlayVariants = {
    hidden: {opacity: 0, transition: {duration: .2, delay: .2}},
    visible: {opacity: 1, transition: {duration: .2}}
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
