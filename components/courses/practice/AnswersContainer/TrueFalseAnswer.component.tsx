import shuffle from "lodash.shuffle";
import React, { FC, useCallback, useMemo } from "react";

import { QuizQuestionAnswer } from "@/interfaces/courses.interfaces";
import CheckCircleIcon from "@/public/icons/check-circle.svg";
import CloseCircleIcon from "@/public/icons/close-circle.svg";
import TickCircleIcon from "@/public/icons/tick-circle-inverted.svg";
import { emptyFunction } from "@/utils/index";

import * as styles from "./AnswersContainer.styles";

interface Props {
    answers: QuizQuestionAnswer[];
    selectedAnswer: QuizQuestionAnswer | null;
    isSummary?: boolean;
    showCorrectAnswer?: boolean;
    isTemp?: boolean;
    onSelectAnswer?: (answer: QuizQuestionAnswer) => void;
}
const TrueFalseAnswer: FC<Props> = (props) => {
    const {
        answers,
        selectedAnswer,
        isSummary,
        showCorrectAnswer = true,
        isTemp,
        onSelectAnswer = emptyFunction,
    } = props;
    const shuffledData = useMemo(() => shuffle(answers), [answers]);
    const renderAnswerIcon = useCallback(
        (isSelected: boolean, isCorrect: boolean) => {
            if (isTemp) {
                return <CheckCircleIcon />;
            }
            if (isSelected && showCorrectAnswer) {
                if (isCorrect) {
                    return <TickCircleIcon color="var(--color-violet-light)" />;
                }
                return <CloseCircleIcon />;
            }
            if (isSummary) {
                if (isCorrect) {
                    return <TickCircleIcon color="var(--color-violet-light)" />;
                }
            }

            return <CheckCircleIcon color="#d2d2d2" />;
        },
        [isSummary, isTemp, showCorrectAnswer]
    );
    return (
        <>
            {shuffledData.map((answer) => (
                <div
                    key={answer.id}
                    css={styles.selectItem(
                        selectedAnswer?.id === answer.id,
                        true,
                        !isTemp && !!selectedAnswer?.id
                    )}
                    onClick={() => onSelectAnswer(answer)}>
                    {((isSummary && answer.is_answer) || false || selectedAnswer?.id === answer.id) && (
                        <div css={styles.selectItemIcon}>
                            {renderAnswerIcon(selectedAnswer?.id === answer.id, answer.is_answer)}
                        </div>
                    )}
                    <span css={styles.label}>{answer.answer}</span>
                </div>
            ))}
        </>
    );
};
export default TrueFalseAnswer;
