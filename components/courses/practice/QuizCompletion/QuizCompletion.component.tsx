import { FC } from "react";
import { useSelector } from "react-redux";

import { ReduxState } from "@/interfaces/redux.interfaces";
import CloseCircleIcon from "@/public/icons/close-circle.svg";
import PracticeDoneIcon from "@/public/icons/practice-done.svg";
import TakeNextLessonIcon from "@/public/icons/take-next-lesson.svg";
import TickCircleIcon from "@/public/icons/tick-circle-inverted.svg";
import ViewSummaryIcon from "@/public/icons/view-summary.svg";

import * as styles from "./QuizCompletion.styles";

interface Props {
    onViewSummary: () => void;
    onVisitNextLesson: () => void;
}

const QuizCompletion: FC<Props> = ({ onViewSummary, onVisitNextLesson }) => {
    const { quizSummary } = useSelector((state: ReduxState) => ({
        quizSummary: state.coursesState.quizSummary,
    }));
    const { correctAnswers, incorrectAnswers, averageCorrectness, averageSpeed } = quizSummary;

    return (
        <div css={styles.container}>
            <div css={styles.header}>
                <PracticeDoneIcon />
                <h5 css={styles.heading}>Practice Successfully Done !</h5>
            </div>
            <div css={styles.details}>
                <div css={styles.detailsItem}>
                    <div css={styles.iconContainer}>
                        {correctAnswers} <TickCircleIcon color="var(--color-violet-light)" />
                    </div>
                    <div css={styles.iconContainer}>
                        {incorrectAnswers} <CloseCircleIcon />
                    </div>
                </div>
                <div css={styles.detailsItem}>
                    {averageCorrectness}% <span css={styles.label}>Correct</span>
                </div>
                <div css={styles.detailsItem}>
                    {averageSpeed}.sec <span css={styles.label}>Avg Speed</span>
                </div>
            </div>

            <div css={styles.buttonsContainer}>
                <button css={styles.button} onClick={onViewSummary}>
                    <ViewSummaryIcon /> View Summary
                </button>
                <button css={styles.button} onClick={onVisitNextLesson}>
                    <TakeNextLessonIcon /> Take Next Lesson
                </button>
            </div>
        </div>
    );
};

export default QuizCompletion;
