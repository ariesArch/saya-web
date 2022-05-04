import { FC } from "react";

import { QuizQuestion } from "@/interfaces/courses.interfaces";
import CheckCircleIcon from "@/public/icons/check-circle.svg";
import CloseCircleIcon from "@/public/icons/close-circle.svg";
// import SpeakerIcon from "@/public/icons/speaker.svg";
import TickCircleIcon from "@/public/icons/tick-circle-inverted.svg";

import * as styles from "./QuizView.styles";

interface Props {
    questions: QuizQuestion[];
}

const QuizView: FC<Props> = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const { question_type, format, answers } = questions[currentIndex];
    // const [quizData, setQuizData] = useState<Partial<QuizPayloadData>>({});

    return (
        <div css={styles.container}>
            <div css={styles.questionContainer}>
                <span css={styles.questionText}>Do we say &apos;the&apos; with the names of mountains?</span>
            </div>

            <div css={styles.answersContainer}>
                <div css={styles.selectItem(false)}>
                    <div css={styles.multipleSelectItemColIcon(false)}>
                        <CheckCircleIcon />
                    </div>
                    <span css={styles.label}>Mount Everest is the highest mountain in the world.</span>
                </div>
                <div css={styles.selectItem(false)}>
                    <div css={styles.multipleSelectItemColIcon(false)}>
                        <CloseCircleIcon />
                    </div>
                    <span css={styles.label}>Mount Everest is the highest mountain in the world.</span>
                </div>
                <div css={styles.selectItem(true)}>
                    <div css={styles.multipleSelectItemColIcon(true)}>
                        <TickCircleIcon />
                    </div>
                    <span css={styles.label}>Mount Everest is the highest mountain in the world.</span>
                </div>
            </div>
        </div>
    );
};

export default QuizView;
