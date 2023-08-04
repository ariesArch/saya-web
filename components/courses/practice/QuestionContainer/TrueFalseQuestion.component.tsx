import { css } from "@emotion/react";
import React, { FC } from "react";

import QuizAudioPlayer from "@/components/courses/practice/QuizAudioPlayer/QuizAudioPlayer.component";

interface Props {
    question: string;
    audio: string;
    picture: string;
    questionTitle: string;
}

const TrueFalseQuestion: FC<Props> = (props) => {
    const { audio, question, picture, questionTitle } = props;
    const questionTitleStyle = css`
        fontFamily: "Gelion",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "36px",
    `;
    const wrapper = (picture: string) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 560px;
        height: 280px
        padding: 8px;
        gap: 8px;
        background-color:#FFF;
        border-radius:16px;
        .pictureWrapper{
            display: flex;
            flex-direction: column;
            width:100;
            ${
                picture &&
                `
                position: relative;
                border: 2px solid var(--neutral-n-100, #e2e2e2);
                width:100%;
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
        color: #515151;
        text-align: center;
        padding: 12px;
    `;
    const isUrl = (str: any) => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            return Boolean(new URL(str));
        } catch (e) {
            return false;
        }
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
                {!isUrl(question) && (
                    <div css={questionText}>
                        <h3>{question}</h3>
                    </div>
                )}
            </div>
        </>
    );
};

export default TrueFalseQuestion;
