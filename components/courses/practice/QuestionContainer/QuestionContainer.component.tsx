import React, { FC, useMemo } from "react";

import { QuizQuestionFormat, QuizQuestionType } from "@/interfaces/courses.interfaces";

import FillTheBlankQuestion from "./FillTheBlankQuestion.component";
import MatchingQuestion from "./MatchingQuestion.component";
import * as styles from "./QuestionContainer.styles";
import ReArrangeQuestion from "./ReArrangeQuestion.component";
import TrueFalseQuestion from "./TrueFalseQuestion.component";

interface Props {
    audio: string;
    picture: string;
    format: QuizQuestionFormat;
    questionType: QuizQuestionType;
    question: string;
    selectedAnswer: string | string[];
    correctAnswer: string | string[];
    isSelected?: boolean;
    isTempAnswerSelected?: boolean;
    arrangedQuestionData: string[];
}

const QuestionContainer: FC<Props> = (props) => {
    const {
        audio,
        picture,
        format,
        questionType,
        question,
        selectedAnswer,
        correctAnswer,
        isSelected = false,
        isTempAnswerSelected = true,
        arrangedQuestionData,
    } = props;

    const renderedQuestion = useMemo(() => {
        switch (questionType) {
            case "true-false":
                return <TrueFalseQuestion question={question} audio={audio} picture={picture} />;
            case "fill-in-the-blank":
                return (
                    <FillTheBlankQuestion
                        question={question}
                        audio={audio}
                        picture={picture}
                        isSelected={isSelected}
                        isTempAnswerSelected={isTempAnswerSelected}
                        selectedAnswer={selectedAnswer as string}
                        correctAnswer={correctAnswer as string}
                    />
                );
            case "rearrange":
                return (
                    <ReArrangeQuestion
                        selectedAnswer={selectedAnswer as string[]}
                        question={question}
                        audio={audio}
                    />
                );
            case "matching":
                return (
                    <MatchingQuestion
                        arrangedQuestionData={arrangedQuestionData}
                        question={question}
                        audio={audio}
                        selectedAnswer={selectedAnswer as string[]}
                    />
                );
            // Add more cases for other question types
            default:
                return question;
        }
    }, [
        audio,
        question,
        questionType,
        selectedAnswer,
        correctAnswer,
        isTempAnswerSelected,
        arrangedQuestionData,
        isSelected,
    ]);

    return <div css={styles.questionContainer(questionType)}>{renderedQuestion}</div>;
};

export default QuestionContainer;
