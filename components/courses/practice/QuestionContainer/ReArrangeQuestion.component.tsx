import { css } from "@emotion/react";
import React, { FC } from "react";

import * as styles from "./QuestionContainer.styles";

interface Props {
    question: string;
    audio: string;
    selectedAnswer: string[];
}

const ReArrangeQuestion: FC<Props> = (props) => {
    const { audio, question, selectedAnswer } = props;
    const questionTitle = {
        fontFamily: "Gelion",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "36px",
    };
    const questionSection = {
        marginTop: "2px",
        minHeight: "40vh",
        minWidth: "100%",
        overflow: "auto",
        border: "1px solid #E1E4E9",
        padding: "24px",
        gap: "24px",
        borderRadius: "16px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "flex-start",
    };
    // const userAnswers = selectedAnswer?.split(",");
    return (
        <>
            <p style={questionTitle}>{question}</p>
            <div style={questionSection as React.CSSProperties}>
                {Array.isArray(selectedAnswer) &&
                    selectedAnswer?.map((answer, i: number) => (
                        <div key={i} style={{ marginLeft: "3px", whiteSpace: "nowrap" }}>
                            {answer}
                        </div>
                    ))}
            </div>
        </>
    );
};

export default ReArrangeQuestion;
