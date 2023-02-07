import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import useSound from "use-sound";

import Button from "@/components/common/Button/Button.component";
import { carouselTransition, carouselVariants } from "@/components/common/FramerMotion";
import Spinner from "@/components/common/Spinner/Spinner.component";
import AnswersContainer from "@/components/courses/practice/AnswersContainer/AnswersContainer.component";
import QuestionContainer from "@/components/courses/practice/QuestionContainer/QuestionContainer.component";
import { QuizQuestionAnswer } from "@/interfaces/courses.interfaces";
import { ReduxState, StudentLevel } from "@/interfaces/redux.interfaces";
import {
    fetchLevelTestQuestionsAsync,
    handleSaveLevelTestResults,
    onSetQuestions,
} from "@/store/level-test/level-test.actions";

import * as styles from "./QuizView.styles";

const getNextStudentLevel = (studentLevel: StudentLevel): StudentLevel | null => {
    switch (studentLevel) {
        case "A1":
            return "A2";
        case "A2":
            return "B1";
        case "B1":
            return "B2";
        case "B2":
            return "C1";
        case "C1":
            return null;
        default:
            return null;
    }
};

const LevelTestQuizView = ({ onShowSummary }: { onShowSummary: () => void }) => {
    const { questions, upcomingQuestions } = useSelector((state: ReduxState) => state.levelTestState);
    const dispatch = useDispatch();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswerTemp, setSelectedAnswerTemp] = useState<QuizQuestionAnswer | null>(null);

    const [totalIncorrectAnswers, setTotalIncorrectAnswers] = useState<number>(0);
    const [totalConsecutiveIncorrectAnswers, setTotalConsecutiveIncorrectAnswers] = useState<number>(0);
    const [currentLevel, setCurrentLevel] = useState<StudentLevel>("A1");

    const [loading, setLoading] = useState(false);

    const [playSelect] = useSound("/sounds/select.mp3", { volume: 0.5 });

    const onSelectAnswerTemp = (answer: QuizQuestionAnswer) => {
        playSelect();
        setSelectedAnswerTemp(answer);
    };

    const handleSubmit = useCallback(
        (level: StudentLevel) => {
            setLoading(true);
            dispatch(
                handleSaveLevelTestResults(
                    level,
                    () => {
                        toast("Schedule created successfully", { type: "success" });
                        onShowSummary();
                    },
                    () => {
                        toast("Failed to submit your results, please try again", { type: "error" });
                    }
                )
            );
        },
        [dispatch, onShowSummary]
    );

    const onNext = useCallback(() => {
        const nextLevel = getNextStudentLevel(currentLevel);

        setSelectedAnswerTemp(null);

        if (currentIndex + 2 === questions.length && nextLevel) {
            dispatch(fetchLevelTestQuestionsAsync(nextLevel, true));
        }

        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(currentIndex + 1);

            return;
        }

        if (nextLevel === null) return;

        if (nextLevel !== "C1") {
            setCurrentLevel(nextLevel);
            dispatch(onSetQuestions(upcomingQuestions));
        } else {
            handleSubmit(nextLevel);
        }
    }, [currentIndex, currentLevel, dispatch, handleSubmit, questions.length, upcomingQuestions]);

    const onCheckAnswer = useCallback(() => {
        if (!selectedAnswerTemp) return;

        setTimeout(() => {
            onNext();
        }, 500);

        // CORRECT
        if (selectedAnswerTemp.is_answer) {
            setTotalConsecutiveIncorrectAnswers(0);

            return;
        }
        // WRONG
        // if total consecutive incorrect answers is equal to 3, we want to stop
        if (totalConsecutiveIncorrectAnswers < 2) {
            setTotalConsecutiveIncorrectAnswers(totalConsecutiveIncorrectAnswers + 1);
        } else {
            // stop
            handleSubmit(currentLevel);
        }

        // if total incorrect answers is equal to 5, we want to stop
        if (totalIncorrectAnswers < 4) {
            setTotalIncorrectAnswers(totalIncorrectAnswers + 1);
        } else {
            // stop
            handleSubmit(currentLevel);
        }
    }, [
        currentLevel,
        handleSubmit,
        onNext,
        selectedAnswerTemp,
        totalConsecutiveIncorrectAnswers,
        totalIncorrectAnswers,
    ]);

    useEffect(() => {
        dispatch(fetchLevelTestQuestionsAsync("A2"));
    }, [dispatch]);

    return (
        <div css={styles.container}>
            <motion.div
                css={styles.contents}
                key={currentIndex}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={carouselTransition}>
                {questions[currentIndex] && (
                    <QuestionContainer
                        format={questions[currentIndex].format}
                        questionType={questions[currentIndex].question_type}
                        question={questions[currentIndex].question}
                        selectedAnswer={selectedAnswerTemp?.answer || ""}
                        correctAnswer={
                            questions[currentIndex].answers.find((answer) => answer.is_answer)?.answer ?? ""
                        }
                        isTempAnswerSelected={!!selectedAnswerTemp}
                        isSelected={false}
                    />
                )}

                {questions[currentIndex] && (
                    <AnswersContainer
                        answers={questions[currentIndex].answers}
                        selectedAnswer={selectedAnswerTemp}
                        isTemp
                        questionType={questions[currentIndex].question_type}
                        format={questions[currentIndex].format}
                        onSelectAnswer={onSelectAnswerTemp}
                        showCorrectAnswer={false}
                    />
                )}

                {selectedAnswerTemp && (
                    <Button css={styles.checkBtn} variant="contained" color="primary" onClick={onCheckAnswer}>
                        Next
                    </Button>
                )}
            </motion.div>

            {loading && (
                <div css={styles.spinnerOverlay}>
                    <Spinner />
                </div>
            )}
        </div>
    );
};

export default LevelTestQuizView;
