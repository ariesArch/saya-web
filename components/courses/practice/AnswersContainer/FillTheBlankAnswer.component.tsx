import shuffle from "lodash.shuffle";
import React, { FC, useCallback, useMemo, useState } from "react";

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
    answerBy: string;
}
const TrueFalseAnswer: FC<Props> = (props) => {
    const {
        answers,
        selectedAnswer,
        isSummary,
        showCorrectAnswer = true,
        isTemp,
        onSelectAnswer = emptyFunction,
        answerBy,
    } = props;
    const [message, setMessage] = useState<any>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
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

    const handleChange = (event) => {
        setMessage(event.target.value);
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setIsDisabled(true);
            const answer = answers[0];
            answer.inputAnswer = message;
            // eslint-disable-next-line no-unused-expressions
            answer.answer === message ? (answer.is_answer = true) : (answer.is_answer = false);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            onSelectAnswer(answer);
            setMessage("");
        }
    };
    return (
        <div>
            {answerBy === "input" ? (
                <div onKeyDown={handleKeyDown}>
                    <input
                        css={styles.selectItem(true)}
                        style={{ color: "#fff", cursor: "auto" }}
                        type="text"
                        id="message"
                        name="message"
                        disabled={isDisabled}
                        // placeholder="Write answer and press enter"
                        // eslint-disable-next-line no-restricted-globals
                        onChange={handleChange}
                        value={message}
                    />
                </div>
            ) : (
                <div style={{ display: "flex" }}>
                    {shuffledData.map((answer) => (
                        <div
                            key={answer.id}
                            css={styles.selectItem(
                                selectedAnswer?.id === answer.id,
                                false,
                                !isTemp && !!selectedAnswer?.id
                            )}
                            onClick={() => onSelectAnswer(answer)}>
                            {((isSummary && answer.is_answer) ||
                                false ||
                                selectedAnswer?.id === answer.id) && (
                                <div css={styles.selectItemIcon}>
                                    {renderAnswerIcon(selectedAnswer?.id === answer.id, answer.is_answer)}
                                </div>
                            )}
                            <span css={styles.label}>{answer.answer}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default TrueFalseAnswer;
