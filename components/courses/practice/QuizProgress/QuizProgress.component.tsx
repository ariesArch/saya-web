import { FC } from "react";

import { numToArrOfNum } from "@/utils/index";

import * as styles from "./QuizProgress.styles";

interface Props {
    totalLength: number;
    currentQuestion: number;
}

const QuizProgress: FC<Props> = ({ totalLength, currentQuestion }) => {
    return (
        <div css={styles.container}>
            <div css={styles.label}>
                {currentQuestion}/{totalLength}
            </div>
            <div css={styles.progressContainer}>
                {numToArrOfNum(totalLength).map((num) => (
                    <div key={num} css={styles.progressItem(num <= currentQuestion)} />
                ))}
            </div>
        </div>
    );
};

export default QuizProgress;
