export const MENU_VARIANTS = {
    open: (height = window.innerHeight) => ({
        clipPath: `circle(${height * 2}px at 100% 0)`,
        transition: {
            duration: 0.25,
            type: "tween",
            // stiffness: 20,
            // damping: 24,
            // restDelta: 1
        }
    }),
    closed: {
        clipPath: "circle(0px at 100% 0)",
        transition: {
            delay: 0,
            type: "spring",
            stiffness: 300,
            damping: 40
        }
    }
};
export const MENU_OPTIONS_CONTAINER_VARIANTS = {
    hidden: {
        zIndex: 4,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.06,
        },
    },
    show: {
        zIndex: 14,
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.06,
        },
    },
    errorVisible: {
        zIndex: 4,
        opacity: 0
    }
};
export const ERROR_CONTAINER_VARIANTS = {
    hidden: {
        zIndex: 4,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.06,
        },
    },
    show: {
        // opacity: 1,
        zIndex: 14,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.06,
        },
    },
};
export const ERROR_ITEM_VARIANTS = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
    menuVisible: { opacity: 0 }
};
export const MENU_OPTION_ITEM_VARIANTS = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
    errorVisible: { opacity: 0 }
};

export const ROUTE_VARIANTS = {
    initial: {
        y: "100vh",
    },
    final: {
        y: "0vh",
        transition: {
            type: "spring",
            mass: 0.4,
            staggerChildren: 0.04,
            delayChildren: 0.12,
        },
    },
};



export const BLOCK_ANIMATIONS_VARIANTS = {
    initial: {
        opacity: 0,
        y: 50,
    },
    final: {
        opacity: 1,
        y: 0,
    },
};