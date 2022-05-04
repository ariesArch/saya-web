import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import QuizProgress from "@/components/courses/practice/QuizProgress/QuizProgress.component";
import QuizView from "@/components/courses/practice/QuizView/QuizView.component";
import CourseLayout from "@/layouts/CourseLayout";
import { fetchLessonQuizAsync } from "@/store/courses/courses.actions";

const PracticePage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { lessonId } = router.query;

    useEffect(() => {
        dispatch(fetchLessonQuizAsync(lessonId as string));
    }, []);

    return (
        <CourseLayout>
            <div css={container}>
                <QuizProgress totalLength={8} currentQuestion={5} />
                <QuizView />
            </div>
        </CourseLayout>
    );
};

const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    height: calc(100vh - 8rem);
    width: 100%;
    background-color: var(--color-violet-light);
    border-radius: 1rem;
    padding: 2rem 4rem;
    color: #fff;

    h1 {
        margin-bottom: 1rem;
    }
`;

export default PracticePage;
