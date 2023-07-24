import shuffle from "lodash.shuffle";
import { FC, useCallback, useEffect, useMemo, useState } from "react";

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
    const answerReArrange = useCallback(
        (ans: string) => {
            // working
            // setSelectedAnswers((prevSelectedAnswers) => {
            //     if (prevSelectedAnswers.includes(ans)) {
            //         return prevSelectedAnswers.filter((selectedAns) => selectedAns !== ans);
            //     }
            //     return [...prevSelectedAnswers, ans];
            // });
            // let choosedResult = selectedAnswers?.join("၊");
            // choosedResult = choosedResult.replace(/၊/g, " ");
            // const { id, format, explanation, updated_at } = answers[0];
            // const transformedData = {
            //     id,
            //     format,
            //     explanation,
            //     updated_at,
            //     answer: selectedAnswers,
            //     is_answer: choosedResult === explanation,
            // };
            // onSelectAnswer(transformedData);
            setSelectedAnswers((prevSelectedAnswers) => {
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
        },
        [selectedAnswers]
    );
    useEffect(() => {
        if (!selectedAnswers.length) {
            return;
        }
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
    return (
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
                    onClick={() => answerReArrange(ans)}>
                    <p>{ans}</p>
                </div>
            ))}
        </div>
    );
};
export default ReArrangeAnswer;
