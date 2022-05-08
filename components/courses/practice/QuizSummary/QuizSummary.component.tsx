import QuizProgress from "@/components/courses/practice/QuizProgress/QuizProgress.component";

import * as styles from "./QuizSummary.styles";

const QuizSummary = () => {
    return (
        <div css={styles.container}>
            <div css={styles.header}>
                <h5 css={styles.heading}>Summary</h5>

                <QuizProgress totalLength={10} currentQuestion={2} />
            </div>
        </div>
    );
};

export default QuizSummary;
