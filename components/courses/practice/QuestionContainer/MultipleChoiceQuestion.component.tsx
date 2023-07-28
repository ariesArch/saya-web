import { css } from "@emotion/react";
import React, { FC } from "react";

import QuizAudioPlayer from "@/components/courses/practice/QuizAudioPlayer/QuizAudioPlayer.component";
import { numToArrOfNum } from "@/utils/index";

interface Props {
    question: string;
    audio: string;
    picture: string;
    isSelected: boolean;
    isTempAnswerSelected: boolean;
    correctAnswer: string;
    selectedAnswer: string;
    questionTitle: string;
}

const MultipleChoiceQuestion: FC<Props> = (props) => {
    const {
        audio,
        question,
        picture,
        isSelected,
        isTempAnswerSelected,
        questionTitle,
        correctAnswer,
        selectedAnswer,
    } = props;
    const questionTitleStyle = css`
        fontFamily: "Gelion",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "36px",
    `;
    const wrapper = (picture: string) => css`
        display: flex;
        width: 664px;
        height: 72px;
        padding: 8px 24px;
        align-items: center;
        gap: 16px;
        .pictureWrapper{
            display: flex;
            flex-direction: column;
            ${
                picture &&
                `
                position: relative;
                border: 2px solid var(--neutral-n-100, #e2e2e2);
                width: 100%;
                height: 280px;
                border-radius: 16px;
                background-image: url(${picture});
                background-size: cover;
                background-position: center;
                .audioPlayerStyle{
                    position: absolute;
                    bottom: 0;
                    top: 10;
                    left: 0;
                    right: 0;
                    padding: 8px;
                    border-radius: 8px;
                }`
            }
    `;
    const questionText = css`
        font-family: Gelion;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 48px;
    `;
    const numToUnderscores = (str: string) =>
        numToArrOfNum(str.length)
            .map(() => "_")
            .join("");
    const renderFillInTheBankQuestion = () => {
        const replaceableStr = !isSelected
            ? `<span style="position: relative; font-size: 3.5rem; line-height: 0.1rem; white-space: nowrap">&nbsp;&nbsp;${numToUnderscores(
                  correctAnswer
              )}${
                  isTempAnswerSelected
                      ? `<span style="font-size: 2.5rem; position: absolute; top: calc(50% + 0.4rem); left: 50%; transform: translate(-50%, -50%)">${selectedAnswer}</span>`
                      : "________"
              }&nbsp;&nbsp;</span>`
            : `<span style="color: var(--color-green); white-space: nowrap">${correctAnswer}</span>`;

        // return question.replace("[__]", replaceableStr);
        return <div dangerouslySetInnerHTML={{ __html: question.replace("[__]", replaceableStr) }} />;
    };

    return (
        <>
            <p css={questionTitleStyle}>{questionTitle}</p>
            <div css={wrapper(picture)}>
                <div className="pictureWrapper">
                    {audio && (
                        <div className="audioPlayerStyle">
                            <QuizAudioPlayer url={audio} />
                        </div>
                    )}
                </div>
                {/* <div css={questionText} dangerouslySetInnerHTML={{ __html: renderFillInTheBankQuestion() }} /> */}
                <div css={questionText}>{question}</div>
            </div>
        </>
    );
};

export default MultipleChoiceQuestion;
