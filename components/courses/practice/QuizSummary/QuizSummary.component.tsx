import { useState } from "react";
import { useSelector } from "react-redux";

import QuizProgress from "@/components/courses/practice/QuizProgress/QuizProgress.component";
import SummaryView from "@/components/courses/practice/SummaryView/SummaryView.component";
import { ReduxState } from "@/interfaces/redux.interfaces";

import * as styles from "./QuizSummary.styles";

const QuizSummary = () => {
    const { quizSolution } = useSelector((state: ReduxState) => ({
        quizSolution: state.coursesState.quizSolution,
    }));
    const [currentIndex, setCurrentIndex] = useState(0);
    const onCurrentIndexChange = (index: number) => setCurrentIndex(index);

    return (
        <div css={styles.container}>
            <div css={styles.header}>
                <h5 css={styles.heading}>Summary</h5>

                {quizSolution && quizSolution[currentIndex] && (
                    <QuizProgress totalLength={quizSolution.length} currentQuestion={currentIndex + 1} />
                )}
            </div>

            <div css={styles.body}>
                {quizSolution && quizSolution[currentIndex] && (
                    <SummaryView
                        questions={quizSolution}
                        currentIndex={currentIndex}
                        onCurrentIndexChange={onCurrentIndexChange}
                    />
                )}
            </div>
        </div>
    );
};

export default QuizSummary;
