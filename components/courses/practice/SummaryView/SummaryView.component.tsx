import { motion } from "framer-motion";
import { FC, useCallback, useState } from "react";

import { carouselTransition, carouselVariants } from "@/components/common/FramerMotion";
import AnswersContainer from "@/components/courses/practice/AnswersContainer/AnswersContainer.component";
import QuestionContainer from "@/components/courses/practice/QuestionContainer/QuestionContainer.component";
import { QuizSolutionItem } from "@/interfaces/courses.interfaces";
import ChevronLeftIcon from "@/public/icons/chevron-left.svg";
import ExplanationMarkIcon from "@/public/icons/explination-mark.svg";

import * as styles from "./SummaryView.styles";

interface Props {
    questions: QuizSolutionItem[];
    currentIndex: number;
    onCurrentIndexChange: (index: number) => void;
}

const SummaryView: FC<Props> = ({ currentIndex, onCurrentIndexChange, questions }) => {
    const [direction, setDirection] = useState(1);

    const onGoNext = useCallback(() => {
        setDirection(1);

        if (currentIndex + 1 >= questions.length) {
            onCurrentIndexChange(0);
            return;
        }
        onCurrentIndexChange(currentIndex + 1);
    }, [currentIndex, onCurrentIndexChange, questions.length]);

    const onGoBack = useCallback(() => {
        setDirection(-1);

        if (currentIndex === 0) {
            onCurrentIndexChange(questions.length - 1);
            return;
        }
        onCurrentIndexChange(currentIndex - 1);
    }, [currentIndex, onCurrentIndexChange, questions.length]);

    return (
        <div css={styles.container}>
            <motion.div
                css={styles.contents}
                key={currentIndex}
                variants={carouselVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={carouselTransition}>
                <div css={styles.mainContents}>
                    <span css={styles.label}>QUESTION NO.{currentIndex + 1}</span>

                    <QuestionContainer
                        format={questions[currentIndex].format}
                        questionType={questions[currentIndex].question_type}
                        question={questions[currentIndex].question}
                        correctAnswer={
                            questions[currentIndex].answers.find((answer) => answer.is_answer)?.answer ?? ""
                        }
                        selectedAnswer={
                            questions[currentIndex].answers.find((answer) => answer.is_user_choice)?.answer ??
                            ""
                        }
                    />

                    <AnswersContainer
                        answers={questions[currentIndex].answers}
                        selectedAnswer={
                            questions[currentIndex].answers.find((answer) => answer.is_user_choice) || null
                        }
                        questionType={questions[currentIndex].question_type}
                        format={questions[currentIndex].format}
                        isSummary
                    />
                </div>

                <div css={styles.explanationContainer}>
                    <div css={styles.explanationHeader}>
                        <ExplanationMarkIcon />
                        <span css={styles.explanationHeading}>Explanation</span>
                    </div>
                    <div
                        css={styles.explanation}
                        dangerouslySetInnerHTML={{ __html: questions[currentIndex].answers[0].explanation }}
                    />
                </div>
            </motion.div>

            <button css={styles.navBtn(false)} onClick={onGoBack}>
                <ChevronLeftIcon />
            </button>
            <button css={styles.navBtn(true)} onClick={onGoNext}>
                <ChevronLeftIcon />
            </button>
        </div>
    );
};

export default SummaryView;
