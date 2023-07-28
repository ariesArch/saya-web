import React, { FC, useMemo } from "react";

import { QuizQuestionFormat, QuizQuestionType } from "@/interfaces/courses.interfaces";

import FillTheBlankQuestion from "./FillTheBlankQuestion.component";
import MatchingQuestion from "./MatchingQuestion.component";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion.component";
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
    inputAnswer?: string;
    correctAnswer: string | string[];
    isSelected?: boolean;
    isTempAnswerSelected?: boolean;
    arrangedQuestionData: string[];
    answerBy?: string;
}

const QuestionContainer: FC<Props> = (props) => {
    const {
        audio,
        picture,
        format,
        questionType,
        question,
        selectedAnswer,
        inputAnswer,
        correctAnswer,
        isSelected = false,
        isTempAnswerSelected = true,
        arrangedQuestionData,
        answerBy,
    } = props;

    const questionTitle = useMemo(() => {
        if (audio) {
            return "Listen audio and answer.";
        }
        if (picture) {
            return "Look at the picture and answer.";
        }
        return "Choose the correct answer.";
    }, [audio, picture]);
    const renderedQuestion = useMemo(() => {
        switch (questionType) {
            case "true-false":
                return (
                    <TrueFalseQuestion
                        question={question}
                        audio={audio}
                        picture={picture}
                        questionTitle={questionTitle}
                    />
                );
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
                        questionTitle={questionTitle}
                        inputAnswer={inputAnswer}
                        answerBy={answerBy}
                    />
                );
            case "rearrange":
                return (
                    <ReArrangeQuestion
                        selectedAnswer={selectedAnswer as string[]}
                        isSelected={isSelected}
                        correctAnswer={correctAnswer as string[]}
                        questionTitle={questionTitle}
                    />
                );
            case "matching":
                return (
                    <MatchingQuestion
                        arrangedQuestionData={arrangedQuestionData}
                        question={question}
                        audio={audio}
                        selectedAnswer={selectedAnswer as string[]}
                        correctAnswer={correctAnswer as string[]}
                        questionTitle={questionTitle}
                        isSelected={isSelected}
                    />
                );
            case "multiple-choice":
                return (
                    <MultipleChoiceQuestion
                        question={question}
                        audio={audio}
                        picture={picture}
                        isSelected={isSelected}
                        isTempAnswerSelected={isTempAnswerSelected}
                        selectedAnswer={selectedAnswer as string}
                        correctAnswer={correctAnswer as string}
                        questionTitle={questionTitle}
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
