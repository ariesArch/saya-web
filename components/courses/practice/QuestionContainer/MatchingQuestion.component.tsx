import { css } from "@emotion/react";
import React, { FC } from "react";

import * as styles from "./QuestionContainer.styles";

interface Props {
    question: string;
    audio: string;
    selectedAnswer: string | string[];
    arrangedQuestionData: string[];
}

const MatchingQuestion: FC<Props> = (props) => {
    const { question, audio, selectedAnswer, arrangedQuestionData } = props;

    const matchingContainer = css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
    `;

    const questionTitle = css`
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
        align-items: flex-start;
        align-content: flex-start;
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
    // const userAnswers = selectedAnswer.split(",");
    const itemsHTML = arrangedQuestionData.map((item, i) => (
        <div key={i} css={itemContainer}>
            <div css={answerItems}>{selectedAnswer[i] ?? ""}</div>
            <div css={questionItems}>{item}</div>
        </div>
    ));
    return (
        <>
            <p css={questionTitle}>{question}</p>
            <div css={matchingContainer}>{itemsHTML}</div>
        </>
    );
};

export default MatchingQuestion;
