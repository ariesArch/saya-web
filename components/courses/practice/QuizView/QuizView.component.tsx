import { FC } from "react";

import { QuizQuestionFormat, QuizQuestionType } from "@/interfaces/courses.interfaces";
import CheckCircleIcon from "@/public/icons/check-circle.svg";
import TickCircleIcon from "@/public/icons/tick-circle-inverted.svg";

import * as styles from "./QuizView.styles";

interface Props {
    questionType?: QuizQuestionType;
    format?: QuizQuestionFormat;
}

const QuizView: FC<Props> = () => {
    return (
        <div css={styles.container}>
            <div css={styles.questionContainer}>Do we say &apos;the&apos; with the names of mountains?</div>

            <div css={styles.answersContainer}>
                <div css={styles.selectItem(false)}>
                    <div css={styles.multipleSelectItemColIcon(false)}>
                        <CheckCircleIcon />
                    </div>
                    <span css={styles.label}>Mount Everest is the highest mountain in the world.</span>
                </div>
                <div css={styles.selectItem(false)}>
                    <div css={styles.multipleSelectItemColIcon(false)}>
                        <CheckCircleIcon />
                    </div>
                    <span css={styles.label}>Mount Everest is the highest mountain in the world.</span>
                </div>
                <div css={styles.selectItem(true)}>
                    <div css={styles.multipleSelectItemColIcon(true)}>
                        <TickCircleIcon />
                    </div>
                    <span css={styles.label}>Mount Everest is the highest mountain in the world.</span>
                </div>
            </div>
        </div>
    );
};

export default QuizView;
