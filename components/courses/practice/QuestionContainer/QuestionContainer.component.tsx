import { FC } from "react";

import QuizAudioPlayer from "@/components/courses/practice/QuizAudioPlayer/QuizAudioPlayer.component";
import { QuizQuestionFormat, QuizQuestionType } from "@/interfaces/courses.interfaces";
import { renderFillInTheBankQuestion } from "@/utils/courses";

import * as styles from "./QuestionContainer.styles";

interface Props {
    format: QuizQuestionFormat;
    questionType: QuizQuestionType;
    question: string;
    selectedAnswer: string;
    correctAnswer: string;
    isSelected?: boolean;
    isTempAnswerSelected?: boolean;
}

const QuestionContainer: FC<Props> = (props) => {
    const {
        format,
        questionType,
        question,
        selectedAnswer,
        correctAnswer,
        isSelected = false,
        isTempAnswerSelected = true,
    } = props;
    return (
        <div css={styles.questionContainer(questionType === "true-false" && format !== "audio")}>
            {format === "text" ? (
                <div
                    css={styles.questionText}
                    dangerouslySetInnerHTML={{
                        __html:
                            questionType === "fill-in-the-blank"
                                ? renderFillInTheBankQuestion(
                                      question,
                                      isSelected,
                                      isTempAnswerSelected,
                                      correctAnswer,
                                      selectedAnswer
                                  )
                                : question,
                    }}
                />
            ) : (
                <QuizAudioPlayer url={question} />
            )}
        </div>
    );
};

export default QuestionContainer;
