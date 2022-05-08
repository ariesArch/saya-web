import { FC } from "react";

import CloseCircleIcon from "@/public/icons/close-circle.svg";
import PracticeDoneIcon from "@/public/icons/practice-done.svg";
import TakeNextLessonIcon from "@/public/icons/take-next-lesson.svg";
import TickCircleIcon from "@/public/icons/tick-circle-inverted.svg";
import ViewSummaryIcon from "@/public/icons/view-summary.svg";

import * as styles from "./QuizCompletion.styles";

interface Props {
    onViewSummary: () => void;
}

const QuizCompletion: FC<Props> = ({ onViewSummary }) => {
    return (
        <div css={styles.container}>
            <div css={styles.header}>
                <PracticeDoneIcon />
                <h5 css={styles.heading}>Practice Successfully Done !</h5>
            </div>
            <div css={styles.details}>
                <div css={styles.detailsItem}>
                    <div css={styles.iconContainer}>
                        6 <TickCircleIcon color="var(--color-violet-light)" />
                    </div>
                    <div css={styles.iconContainer}>
                        3 <CloseCircleIcon />
                    </div>
                </div>
                <div css={styles.detailsItem}>
                    31% <span css={styles.label}>Correct</span>
                </div>
                <div css={styles.detailsItem}>
                    5.sec <span css={styles.label}>Avg Speed</span>
                </div>
            </div>

            <div css={styles.buttonsContainer}>
                <button css={styles.button} onClick={onViewSummary}>
                    <ViewSummaryIcon /> View Summary
                </button>
                <button css={styles.button}>
                    <TakeNextLessonIcon /> Take Next Lesson
                </button>
            </div>
        </div>
    );
};

export default QuizCompletion;
