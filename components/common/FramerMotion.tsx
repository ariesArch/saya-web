import { Variants } from "framer-motion";

export const contentsVariant: Variants = {
    offscreen: {
        y: 300,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
        },
    },
};

export const illuVariants: Variants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            delay: 0.5,
            duration: 3,
        },
    },
};

export const landingAnimationConfig = {
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: { once: true },
};

export const transition = {
    type: "spring",
    stiffness: 500,
    damping: 30,
};
