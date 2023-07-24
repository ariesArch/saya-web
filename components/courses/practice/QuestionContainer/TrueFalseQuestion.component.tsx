import { css } from "@emotion/react";
import React, { FC } from "react";

import QuizAudioPlayer from "@/components/courses/practice/QuizAudioPlayer/QuizAudioPlayer.component";

interface Props {
    question: string;
    audio: string;
    picture: string;
}

const TrueFalseQuestion: FC<Props> = (props) => {
    const { audio, question, picture } = props;
    const questionTitle = css`
        fontFamily: "Gelion",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "36px",
    `;
    const wrapper = (picture: string) => css`
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "32px",
        background-color:blue;
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

    return (
        <>
            <p css={questionTitle}>True or False</p>
            <div css={wrapper(picture)}>
                <div className="pictureWrapper">
                    {audio && (
                        <div className="audioPlayerStyle">
                            <QuizAudioPlayer url={audio} />
                        </div>
                    )}
                </div>
                <div css={questionText}>
                    <h3>{question}</h3>
                </div>
            </div>
        </>
    );
};

export default TrueFalseQuestion;
