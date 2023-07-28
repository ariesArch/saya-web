import { css } from "@emotion/react";
import React, { FC } from "react";

import * as styles from "./QuestionContainer.styles";

interface Props {
    question: string;
    audio: string;
    selectedAnswer: string[];
    correctAnswer: string[];
    arrangedQuestionData: string[];
    questionTitle: string;
    isSelected: boolean;
}

const MatchingQuestion: FC<Props> = (props) => {
    const {
        question,
        audio,
        selectedAnswer,
        isSelected,
        questionTitle,
        correctAnswer,
        arrangedQuestionData,
    } = props;

    const matchingContainer = css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
    `;

    const questionTitleStyle = css`
        font-family: Gelion;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 36px;
    `;

    const itemContainer = css`
        display: flex;
        align-items: flex-start;
        gap: 16px;
    `;

    const answerItems = css`
        height: 3.6rem;
        width: 29vh;
        overflow: auto;
        border: 1px solid #e1e4e9;
        padding: 2px;
        gap: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: flex-star;
        font-size: 1.8rem;
    `;

    const questionItems = css`
        display: flex;
        gap: 8px;
        font-family: Gelion;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px;
    `;
    // const userAnswers = correctAnswer?.split(",");
    const userAnswers = typeof correctAnswer === "string" ? correctAnswer.split(",") : [];
    const itemsHTML = arrangedQuestionData.map((item, i) => (
        <div key={i} css={itemContainer}>
            <div
                css={answerItems}
                style={{
                    background: selectedAnswer[i] ? "white" : "",
                    color: selectedAnswer[i] ? "black" : "",
                }}>
                <span
                    style={{
                        color: isSelected ? (selectedAnswer[i] === userAnswers[i] ? "green" : "red") : "",
                    }}>
                    {selectedAnswer ? selectedAnswer[i] : correctAnswer ? correctAnswer[i] : ""}
                </span>
            </div>
            <div css={questionItems}>{item}</div>
        </div>
    ));
    return (
        <>
            <p css={questionTitleStyle}>{questionTitle}</p>
            <div css={matchingContainer}>{itemsHTML}</div>
        </>
    );
};

export default MatchingQuestion;
