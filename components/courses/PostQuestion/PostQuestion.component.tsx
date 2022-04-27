import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import SendIcon from "@/public/icons/send.svg";
import { onSubmitStudentQuestion } from "@/store/courses/courses.actions";

import * as styles from "./PostQuestion.styles";

interface Props {
    lessonId: string;
}

const PostQuestion: FC<Props> = ({ lessonId }) => {
    const dispatch = useDispatch();
    const [question, setQuestion] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onQuestionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setQuestion(e.target.value);
    };

    const onSubmitQuestionSuccess = () => {
        setIsLoading(false);
        setQuestion("");
    };
    const onSubmitQuestionFailure = () => {
        setIsLoading(false);
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        dispatch(
            onSubmitStudentQuestion(
                { lesson_id: lessonId, question },
                onSubmitQuestionSuccess,
                onSubmitQuestionFailure
            )
        );
    };

    return (
        <form css={styles.container} onSubmit={onSubmit}>
            <div css={styles.textsContainer}>
                <span css={styles.title}>Post a question</span>
                <span css={styles.subtitle}>Lecturer will answer when they are online.</span>
            </div>
            <div css={styles.inputContainer}>
                <textarea placeholder="Have any questions?" value={question} onChange={onQuestionChange} />
            </div>
            <Button css={styles.button} variant="contained" color="success" type="submit" loading={isLoading}>
                <SendIcon />
                Post
            </Button>
        </form>
    );
};

export default PostQuestion;
