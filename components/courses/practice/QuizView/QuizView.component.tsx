import { format } from "date-fns";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

import AnswersContainer from "@/components/courses/practice/AnswersContainer/AnswersContainer.component";
import QuestionContainer from "@/components/courses/practice/QuestionContainer/QuestionContainer.component";
import QuizExplanation from "@/components/courses/practice/QuizExplanation/QuizExplanation.component";
import QuizProgress from "@/components/courses/practice/QuizProgress/QuizProgress.component";
import { QuizPayloadData, QuizQuestion, QuizQuestionAnswer } from "@/interfaces/courses.interfaces";
import LampChargeIcon from "@/public/icons/lamp-charge.svg";
import { convertTZ } from "@/utils/date-time";

import * as styles from "./QuizView.styles";

interface Props {
    lessonId: string;
    questions: QuizQuestion[];
    onComplete: () => void;
}

const QuizView: FC<Props> = ({ lessonId, questions, onComplete }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quizData, setQuizData] = useState<QuizPayloadData>({
        overall_started_practice_at: formatDate(new Date()),
        overall_ended_practice_at: "",
        lesson_id: lessonId,
        practices: [],
    });
    const [selectedAnswer, setSelectedAnswer] = useState<QuizQuestionAnswer | null>(null);
    const [questionStartedTime, setQuestionStartedTime] = useState<string>("");

    const onSelectAnswer = (answer: QuizQuestionAnswer) => {
        if (selectedAnswer?.id) return;

        setSelectedAnswer(answer);
        setQuizData({
            ...quizData,
            practices: [
                ...quizData.practices,
                {
                    clicked_answer_option_id: answer.id,
                    started_practice_at: questionStartedTime,
                    ended_practice_at: formatDate(new Date()),
                    question_id: questions[currentIndex].id,
                },
            ],
        });

        if (answer.is_answer) {
            setTimeout(() => {
                onNext();
            }, 2000);
        }
    };

    const onNext = () => {
        setSelectedAnswer(null);
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(currentIndex + 1);
            setQuestionStartedTime(formatDate(new Date()));
        } else {
            onComplete();
        }
    };

    useEffect(() => {
        setQuestionStartedTime(formatDate(new Date()));
    }, []);

    return (
        <div css={styles.container}>
            {!!questions.length && (
                <div css={styles.header}>
                    <LampChargeIcon />
                    <QuizProgress totalLength={questions.length} currentQuestion={currentIndex + 1} />
                </div>
            )}

            <motion.div
                css={styles.contents}
                key={currentIndex}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                }}>
                {questions[currentIndex] && (
                    <QuestionContainer
                        format={questions[currentIndex].format}
                        questionType={questions[currentIndex].question_type}
                        question={questions[currentIndex].question}
                    />
                )}

                {questions[currentIndex] && (
                    <AnswersContainer
                        answers={questions[currentIndex].answers}
                        selectedAnswer={selectedAnswer}
                        questionType={questions[currentIndex].question_type}
                        format={questions[currentIndex].format}
                        onSelectAnswer={onSelectAnswer}
                    />
                )}
            </motion.div>
            {selectedAnswer && (
                <QuizExplanation
                    onNext={onNext}
                    isCorrect={selectedAnswer.is_answer}
                    explanation={selectedAnswer.explanation}
                />
            )}
        </div>
    );
};

const variants = {
    enter: {
        x: 1000,
        opacity: 0,
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: {
        zIndex: 0,
        x: -1000,
        opacity: 0,
    },
};

// only Myanmar Time is accepted to need to convert the Timezone first
const formatDate = (date: Date) => {
    return format(convertTZ(date, "Asia/Yangon"), "yyyy-MM-dd HH:mm:ss");
};

export default QuizView;
