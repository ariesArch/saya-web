import shuffle from "lodash.shuffle";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";

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
    const [userAnswers, setUserAnswers] = useState<string[]>([]);

    const answerReArrange = useCallback(
        (ans?: string) => {
            // working
            if (!ans) {
                setUserAnswers([]);
                return;
            }
            setUserAnswers((prevUserAnswers) => {
                if (prevUserAnswers.includes(ans)) {
                    return prevUserAnswers.filter((selectedAns) => selectedAns !== ans);
                }
                return [...prevUserAnswers, ans];
            });
        },
        [userAnswers]
    );
    useEffect(() => {
        const areEqual = JSON.stringify(userAnswers) === JSON.stringify(answers[0].arrange_data);
        const { id, format, explanation, updated_at } = answers[0];
        const transformedData = {
            id,
            format,
            explanation,
            updated_at,
            answer: userAnswers,
            is_answer: areEqual,
        };
        onSelectAnswer(transformedData);
    }, [userAnswers]);
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {userAnswers.length > 0 && (
                <button
                    style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                        fontSize: "1.8rem",
                        color: "white",
                    }}
                    onClick={() => answerReArrange("")}>
                    Reset Answer
                </button>
            )}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                    gap: "24px",
                    flex: 1,
                }}>
                {shuffledData.map((ans) => (
                    <div
                        key={ans}
                        css={styles.selectItem(userAnswers.includes(ans), false)}
                        style={{
                            pointerEvents: shuffledData.length === userAnswers.length ? "none" : "auto",
                        }}
                        onClick={() => answerReArrange(ans)}>
                        {/* {userAnswers.includes(ans) ? (
                            <p style={{ opacity: "0" }}>{ans}</p>
                        ) : (
                            <p style={{ opacity: "1" }}>{ans}</p>
                        )} */}
                        {ans}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ReArrangeAnswer;
