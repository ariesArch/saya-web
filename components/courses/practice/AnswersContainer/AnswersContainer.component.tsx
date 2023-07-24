import React, { FC, useCallback, useMemo } from "react";

import { QuizQuestionAnswer, QuizQuestionFormat, QuizQuestionType } from "@/interfaces/courses.interfaces";
import CheckCircleIcon from "@/public/icons/check-circle.svg";
import CloseCircleIcon from "@/public/icons/close-circle.svg";
import TickCircleIcon from "@/public/icons/tick-circle-inverted.svg";
import { emptyFunction } from "@/utils/index";

import * as styles from "./AnswersContainer.styles";
import FillTheBlankAnswer from "./FillTheBlankAnswer.component";
// import FillInBlankComponent from "./FillInBlankComponent";
import MatchingAnswer from "./MatchingAnswer.component";
import MultipleChoiceAnswer from "./MultipleChoiceAnswer.component";
// Import the specific components for each question type
import ReArrangeAnswer from "./ReArrangeAnswer.component";
import TrueFalseAnswer from "./TrueFalseAnswer.component";

interface Props {
    answers: QuizQuestionAnswer[];
    selectedAnswer: QuizQuestionAnswer | null;
    format: QuizQuestionFormat;
    questionType: QuizQuestionType;
    onSelectAnswer?: (answer: QuizQuestionAnswer) => void;
    isSummary?: boolean;
    isTemp?: boolean;
    showCorrectAnswer?: boolean;
    answerBy: string;
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
        answerBy,
    } = props;

    const { isMultipleChoice, isTrueFalse, isRearrange, isMatching, isFillTheBlank } = useMemo(
        () => ({
            isMultipleChoice: questionType === "multiple-choice",
            isTrueFalse: questionType === "true-false",
            isRearrange: questionType === "rearrange",
            isMatching: questionType === "matching",
            isFillTheBlank: questionType === "fill-in-the-blank",
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

    // Render based on conditions
    const renderComponent = () => {
        if (isRearrange) {
            return <ReArrangeAnswer answers={answers} onSelectAnswer={onSelectAnswer} />;
        }
        if (isMatching) {
            return <MatchingAnswer answers={answers} onSelectAnswer={onSelectAnswer} />;
        }
        if (isMultipleChoice) {
            return (
                <MultipleChoiceAnswer
                    answers={answers}
                    selectedAnswer={selectedAnswer}
                    isSummary={isSummary}
                    isTemp={isTemp}
                    onSelectAnswer={onSelectAnswer}
                />
            );
        }
        if (isFillTheBlank) {
            return (
                <FillTheBlankAnswer
                    answers={answers}
                    selectedAnswer={selectedAnswer}
                    isSummary={isSummary}
                    isTemp={isTemp}
                    onSelectAnswer={onSelectAnswer}
                    answerBy={answerBy}
                />
            );
        }
        if (isTrueFalse) {
            return (
                <TrueFalseAnswer
                    answers={answers}
                    selectedAnswer={selectedAnswer}
                    isSummary={isSummary}
                    isTemp={isTemp}
                    onSelectAnswer={onSelectAnswer}
                />
            );
        }
        return (
            <>
                {answers.map((answer) => (
                    <div
                        key={answer.id}
                        css={styles.selectItem(
                            selectedAnswer?.id === answer.id,
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
            </>
        );
    };

    return <div css={styles.answersContainer}>{renderComponent()}</div>;
};

export default AnswersContainer;
