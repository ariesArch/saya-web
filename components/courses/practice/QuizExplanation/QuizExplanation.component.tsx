import { motion, Variants } from "framer-motion";
import { FC, Fragment, useEffect } from "react";

import Button from "@/components/common/Button/Button.component";

import * as styles from "./QuizExplanation.styles";

interface Props {
    isCorrect: boolean;
    explanation: string;
    onNext: () => void;
}

const QuizExplanation: FC<Props> = ({ isCorrect = true, explanation, onNext }) => {
    useEffect(() => {
        const element = document.getElementById("PracticeQuizExplanation");
        if (element) element.scrollIntoView({ block: "center", behavior: "smooth" });
    }, []);

    return (
        <motion.div
            id="PracticeQuizExplanation"
            css={styles.container(isCorrect)}
            initial="exit"
            animate="enter"
            variants={variants}>
            {isCorrect ? (
                <Fragment>
                    <div css={styles.iconContainer}>
                        <AnimatedCheckMarkIcon />
                    </div>
                    <div css={styles.textContainer}>
                        <span css={styles.heading}>Awesome !</span>
                        <p css={styles.text}>You choose the correct one. Let&apos;s go next questions.</p>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <div css={styles.header}>
                        <AnimatedCloseCircle />

                        <div css={styles.textContainer}>
                            <span css={styles.heading}>Oops !</span>
                            <span css={styles.subHeading}>You choose the wrong one. Explanation below.</span>
                        </div>
                    </div>
                    <div css={styles.explanation} dangerouslySetInnerHTML={{ __html: explanation }} />
                </Fragment>
            )}
            {!isCorrect && (
                <Button css={styles.button} variant="contained" color="course" onClick={onNext}>
                    Next Question
                </Button>
            )}
        </motion.div>
    );
};

const variants: Variants = {
    enter: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
};

const transition = { duration: 1.5, type: "spring" };

const AnimatedCheckMarkIcon = () => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="176.687 236.642 27.031 27.098"
        width="27.031"
        height="27.098">
        <motion.path
            d="M12.333,24.667A12.333,12.333,0,1,0,0,12.333,12.37,12.37,0,0,0,12.333,24.667Z"
            transform="matrix(1, 0, 0, 1, 177.911285, 237.862212)"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            initial={{ strokeWidth: 0, pathLength: 0 }}
            animate={{ strokeWidth: 1.5, pathLength: 1 }}
            transition={transition}
        />
        <motion.path
            d="M0,2.93,2.93,5.86,8.8,0"
            transform="matrix(1, 0, 0, 1, 185.844283, 247.265197)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
        />
        <motion.path
            d="M0,0H30V30H0Z"
            fill="none"
            opacity="0"
            transform="matrix(1, 0, 0, 1, 175.244277, 235.195205)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
        />
    </motion.svg>
);

const AnimatedCloseCircle = () => (
    <svg id="close-circle" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70.01 70">
        <path
            d="M28.778,57.556A28.778,28.778,0,1,0,0,28.778,28.862,28.862,0,0,0,28.778,57.556Z"
            transform="translate(6.222 6.222)"
            fill="none"
            stroke="#f63b45"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
        />
        <motion.path
            data-name="Vector"
            d="M0,17.609,17.609,0"
            transform="translate(26.196 26.196)"
            fill="none"
            stroke="#f63b45"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
        />
        <motion.path
            data-name="Vector"
            d="M17.609,17.609,0,0"
            transform="translate(26.196 26.196)"
            fill="none"
            stroke="#f63b45"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
        />
        <motion.path
            data-name="Vector"
            d="M0,0H70V70H0Z"
            fill="none"
            opacity="0"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
        />
    </svg>
);

export default QuizExplanation;
