import { FC } from "react";

import { QuizQuestionFormat, QuizQuestionType } from "@/interfaces/courses.interfaces";
import SpeakerIcon from "@/public/icons/speaker.svg";

import * as styles from "./QuestionContainer.styles";

interface Props {
    format: QuizQuestionFormat;
    questionType: QuizQuestionType;
    question: string;
}

const QuestionContainer: FC<Props> = ({ format, questionType, question }) => {
    return (
        <div css={styles.questionContainer(questionType === "true-false" && format !== "audio")}>
            {format === "text" ? (
                <div css={styles.questionText}>{question}</div>
            ) : (
                <div css={styles.speakerContainer}>
                    <SpeakerIcon />
                </div>
            )}
        </div>
    );
};

export default QuestionContainer;
