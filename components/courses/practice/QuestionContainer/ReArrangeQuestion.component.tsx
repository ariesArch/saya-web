import React, { FC } from "react";

// import * as styles from "./QuestionContainer.styles";

interface Props {
    isSelected: boolean;
    selectedAnswer: string[];
    correctAnswer: string[];
    questionTitle: string;
}

const ReArrangeQuestion: FC<Props> = (props) => {
    const { selectedAnswer, correctAnswer, isSelected, questionTitle } = props;
    const questionTitleStyle = {
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
        border: "2px solid #E1E4E9",
        padding: "24px",
        gap: "24px",
        borderRadius: "16px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "flex-start",
    };
    const userAnswers = typeof correctAnswer === "string" ? correctAnswer.split(",") : [];
    return (
        <>
            <p style={questionTitleStyle}>{questionTitle}</p>
            <div style={questionSection as React.CSSProperties}>
                {selectedAnswer
                    ? selectedAnswer.map((answer, i: number) => (
                          <div
                              // eslint-disable-next-line react/no-array-index-key
                              key={i}
                              style={{
                                  marginLeft: "3px",

                                  whiteSpace: "nowrap",

                                  // eslint-disable-next-line no-nested-ternary
                                  color: isSelected ? (userAnswers[i] === answer ? "black" : "red") : "",
                              }}>
                              {answer}
                          </div>
                      ))
                    : correctAnswer &&
                      correctAnswer?.map((answer, i: number) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <div key={i} style={{ marginLeft: "3px", whiteSpace: "nowrap" }}>
                              {answer}
                          </div>
                      ))}
            </div>
        </>
    );
};

export default ReArrangeQuestion;
