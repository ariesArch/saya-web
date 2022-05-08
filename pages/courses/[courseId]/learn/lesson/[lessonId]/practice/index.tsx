import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import QuizCompletion from "@/components/courses/practice/QuizCompletion/QuizCompletion.component";
import QuizSummary from "@/components/courses/practice/QuizSummary/QuizSummary.component";
import QuizView from "@/components/courses/practice/QuizView/QuizView.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import CourseLayout from "@/layouts/CourseLayout";
import CloseIcon from "@/public/icons/close.svg";
import QuizBg1 from "@/public/images/quiz-bg-1.svg";
import { fetchLessonQuizAsync } from "@/store/courses/courses.actions";

const PracticePage = () => {
    const { quiz } = useSelector((state: ReduxState) => ({ quiz: state.coursesState.quiz }));
    const dispatch = useDispatch();
    const router = useRouter();
    const { lessonId } = router.query;
    const [route, setRoute] = useState<"practice" | "completion" | "summary">("practice");

    const onRouteChange = (route: "practice" | "completion" | "summary") => setRoute(route);

    useEffect(() => {
        dispatch(fetchLessonQuizAsync(lessonId as string));
    }, []);

    return (
        <CourseLayout>
            <div css={container}>
                <button css={closeBtn}>
                    <CloseIcon />
                </button>

                {route === "practice" && (
                    <QuizView
                        lessonId={lessonId as string}
                        questions={quiz}
                        onComplete={() => onRouteChange("completion")}
                    />
                )}
                {route === "completion" && <QuizCompletion onViewSummary={() => onRouteChange("summary")} />}

                {route === "summary" && <QuizSummary />}

                <div css={background}>
                    <QuizBg1 />
                </div>
            </div>
        </CourseLayout>
    );
};

const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    min-height: calc(100vh - 8rem);
    width: 100%;
    background-color: var(--color-violet-light);
    border-radius: 1rem;
    padding: 1rem 4rem;
    color: #fff;
    position: relative;
    z-index: 3;

    h1 {
        margin-bottom: 1rem;
    }
`;

const closeBtn = css`
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    color: #fff;

    svg {
        width: 5rem !important;
        height: auto;
    }
`;

const background = css`
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: -1;

    svg {
        width: 100%;
        height: auto;
    }
`;

export default PracticePage;
