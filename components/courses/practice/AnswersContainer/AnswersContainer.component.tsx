import { FC, useCallback, useMemo } from "react";

import { QuizQuestionAnswer, QuizQuestionFormat, QuizQuestionType } from "@/interfaces/courses.interfaces";
import CheckCircleIcon from "@/public/icons/check-circle.svg";
import CloseCircleIcon from "@/public/icons/close-circle.svg";
import TickCircleIcon from "@/public/icons/tick-circle-inverted.svg";
import { emptyFunction } from "@/utils/index";

import * as styles from "./AnswersContainer.styles";

interface Props {
    answers: QuizQuestionAnswer[];
    selectedAnswer: QuizQuestionAnswer | null;
    format: QuizQuestionFormat;
    questionType: QuizQuestionType;
    onSelectAnswer?: (answer: QuizQuestionAnswer) => void;
    isSummary?: boolean;
    isTemp?: boolean;
    showCorrectAnswer?: boolean;
}

const AnswersContainer: FC<Props> = (props) => {
    const {
        answers,
        format,
        questionType,
        selectedAnswer,
        onSelectAnswer = emptyFunction,
        isSummary = false,
        isTemp = false,
        showCorrectAnswer = true,
    } = props;

    const { isMultipleChoice, isTrueFalse } = useMemo(
        () => ({
            isMultipleChoice: questionType === "multiple-choice" && format !== "audio",
            isTrueFalse: questionType === "true-false" && format !== "audio",
        }),
        [format, questionType]
    );

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
        <div css={styles.answersContainer(isMultipleChoice)}>
            {answers.map((answer) => (
                <div
                    key={answer.id}
                    css={styles.selectItem(
                        selectedAnswer?.id === answer.id,
                        isMultipleChoice,
                        isTrueFalse,
                        !isTemp && !!selectedAnswer?.id
                    )}
                    onClick={() => onSelectAnswer(answer)}>
                    {((isSummary && answer.is_answer) ||
                        isMultipleChoice ||
                        selectedAnswer?.id === answer.id) && (
                        <div css={styles.selectItemIcon}>
                            {renderAnswerIcon(selectedAnswer?.id === answer.id, answer.is_answer)}
                        </div>
                    )}
                    <span css={styles.label}>{answer.answer}</span>
                </div>
            ))}
        </div>
    );
};

export default AnswersContainer;
