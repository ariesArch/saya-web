import { FC } from "react";

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
    } = props;
    const isMultipleChoice = questionType === "multiple-choice" && format !== "audio";
    const isTrueFalse = questionType === "true-false" && format !== "audio";

    const renderAnswerIcon = (isSelected: boolean, isCorrect: boolean) => {
        if (isTemp) {
            return <CheckCircleIcon />;
        }
        if (isSelected) {
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
    };

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
                        questionType === "multiple-choice" ||
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
