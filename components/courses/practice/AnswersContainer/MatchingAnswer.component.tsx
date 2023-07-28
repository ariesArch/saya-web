import { css } from "@emotion/react";
import shuffle from "lodash.shuffle";
import { FC, useCallback, useEffect, useMemo, useState } from "react";

import Button from "@/components/common/Button/Button.component";
import { QuizQuestionAnswer } from "@/interfaces/courses.interfaces";
import { emptyFunction } from "@/utils/index";

import * as styles from "./AnswersContainer.styles";

interface Props {
    answers: QuizQuestionAnswer[];
    onSelectAnswer?: (answer: QuizQuestionAnswer) => void;
}
const ReArrangeAnswer: FC<Props> = (props) => {
    const { answers, onSelectAnswer = emptyFunction } = props;
    const shuffledData = useMemo(() => shuffle(answers[0].arrange_data), [answers]);
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const answerMatching = useCallback((ans: string) => {
        if (!ans) {
            setSelectedAnswers([]);
            return;
        }
        setSelectedAnswers((prevSelectedAnswers) => {
            // if (prevSelectedAnswers.includes(ans)) {
            //     return prevSelectedAnswers.filter((selectedAns) => selectedAns !== ans);
            // }
            const emptyIndex = prevSelectedAnswers.indexOf("");
            const ansIndex = prevSelectedAnswers.indexOf(ans);

            if (emptyIndex !== -1 && ansIndex === -1) {
                // If an empty value exists, replace it with the new value
                const newSelectedAnswers = [...prevSelectedAnswers];
                newSelectedAnswers[emptyIndex] = ans;
                return newSelectedAnswers;
            }
            if (ansIndex !== -1) {
                const newSelectedAnswers = [...prevSelectedAnswers];
                newSelectedAnswers[ansIndex] = "";
                return newSelectedAnswers;
            }

            if (emptyIndex === -1 && ansIndex === -1) {
                // If no empty value and the new value doesn't exist, add the new value to the end
                return [...prevSelectedAnswers, ans];
            }
            // return [...prevSelectedAnswers, ans];
            return prevSelectedAnswers;
        });
    }, []);
    useEffect(() => {
        // if (!selectedAnswers.length) return;
        // let choosedResult = selectedAnswers?.join("၊");
        // choosedResult = choosedResult.replace(/၊/g, " ");
        const areEqual = JSON.stringify(selectedAnswers) === JSON.stringify(answers[0].arrange_data);
        const { id, format, explanation, updated_at } = answers[0];
        const transformedData = {
            id,
            format,
            explanation,
            updated_at,
            answer: selectedAnswers,
            is_answer: areEqual,
        };
        onSelectAnswer(transformedData);
    }, [selectedAnswers]);
    const resetBtn = css`
        align-self: center;
        background-color: #222;
        border-radius: 0.8rem;
        border-color: #222;
        padding: 1rem 2rem;

        &:hover {
            background-color: #272727;
            border-color: #444;
        }
    `;
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {selectedAnswers.length > 0 && (
                <Button css={resetBtn} variant="contained" color="primary" onClick={() => answerMatching("")}>
                    Reset Question
                </Button>
            )}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                    gap: "24px",
                }}>
                {shuffledData.map((ans) => (
                    <div
                        key={ans}
                        css={styles.selectItem(selectedAnswers.includes(ans), false)}
                        style={{
                            pointerEvents: shuffledData.length === selectedAnswers.length ? "none" : "auto",
                        }}
                        onClick={() => answerMatching(ans)}>
                        <p>{ans}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ReArrangeAnswer;
