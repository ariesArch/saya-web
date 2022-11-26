import { css } from "@emotion/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "@/components/common/Spinner/Spinner.component";
import QuizCompletion from "@/components/courses/practice/QuizCompletion/QuizCompletion.component";
import QuizSummary from "@/components/courses/practice/QuizSummary/QuizSummary.component";
import QuizView from "@/components/courses/practice/QuizView/QuizView.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import CourseLayout from "@/layouts/CourseLayout";
import CloseIcon from "@/public/icons/close.svg";
import { fetchLessonQuizAsync, fetchSummaryAsync } from "@/store/courses/courses.actions";
import { getNextLessonId } from "@/utils/courses";

// for performance reasons
const MountainYellow = dynamic(() => import("@/public/images/quiz-bg_mountain_yellow.svg"));
const MountainBlue = dynamic(() => import("@/public/images/quiz-bg_mountain_blue.svg"));
const MountainGreen = dynamic(() => import("@/public/images/quiz-bg_mountain_green.svg"));
const MountainLightGreen = dynamic(() => import("@/public/images/quiz-bg_mountain_light-green.svg"));
const MountainPink = dynamic(() => import("@/public/images/quiz-bg_mountain_pink.svg"));
const MountainViolet = dynamic(() => import("@/public/images/quiz-bg_mountain_violet.svg"));
const TreeBlue = dynamic(() => import("@/public/images/quiz-bg_tree_blue.svg"));
const TreeGreen = dynamic(() => import("@/public/images/quiz-bg_tree_green.svg"));
const TreeLightGreen = dynamic(() => import("@/public/images/quiz-bg_tree_light-green.svg"));
const TreePink = dynamic(() => import("@/public/images/quiz-bg_tree_pink.svg"));
const TreeViolet = dynamic(() => import("@/public/images/quiz-bg_tree_violet.svg"));
const TreeYellow = dynamic(() => import("@/public/images/quiz-bg_tree_yellow.svg"));

const renderBgIllustrations = (illuName: string) => {
    switch (illuName) {
        case "mountain_yellow":
            return <MountainYellow />;
        case "mountain_blue":
            return <MountainBlue />;
        case "mountain_green":
            return <MountainGreen />;
        case "mountain_light-green":
            return <MountainLightGreen />;
        case "mountain_pink":
            return <MountainPink />;
        case "mountain_violet":
            return <MountainViolet />;
        case "tree_blue":
            return <TreeBlue />;
        case "tree_green":
            return <TreeGreen />;
        case "tree_light-green":
            return <TreeLightGreen />;
        case "tree_pink":
            return <TreePink />;
        case "tree_violet":
            return <TreeViolet />;
        case "tree_yellow":
            return <TreeYellow />;

        default:
            return <MountainViolet />;
    }
};

const PracticePage = () => {
    const router = useRouter();
    const { courseId, lessonId } = router.query;
    const { quiz, selectedCourse, nextLessonId, firstLessonId } = useSelector((state: ReduxState) => ({
        quiz: state.coursesState.quiz,
        selectedCourse: state.coursesState.selectedCourse,
        nextLessonId: getNextLessonId(state.coursesState.selectedCourse.chapters, lessonId as string),
        firstLessonId: state.coursesState.selectedCourse?.chapters
            ? state.coursesState.selectedCourse.chapters[0].lessons[0].id
            : "",
    }));
    const { illustration_color, illustration_type } = selectedCourse;
    const dispatch = useDispatch();
    const [route, setRoute] = useState<"practice" | "completion" | "summary">("practice");
    const [loading, setIsLoading] = useState(false);

    const onRouteChange = (route: "practice" | "completion" | "summary") => setRoute(route);

    const onShowSummary = () => {
        setIsLoading(true);
        dispatch(
            fetchSummaryAsync(lessonId as string, onSubmitQuizCompleteSuccess, onSubmitQuizCompleteFailure)
        );
    };

    const onSubmitQuizCompleteSuccess = () => {
        setIsLoading(false);
        onRouteChange("summary");
    };

    const onSubmitQuizCompleteFailure = () => {
        setIsLoading(false);
    };

    const onClose = () => {
        router.push(router.asPath.replace("/practice", ""));
    };

    const onVisitNextLesson = () => {
        let lessonId;

        if (!nextLessonId) {
            lessonId = firstLessonId;
        } else {
            lessonId = nextLessonId;
        }
        router.push(`/courses/${courseId}/learn/lesson/${lessonId}`);
    };

    useEffect(() => {
        dispatch(fetchLessonQuizAsync(lessonId as string));
    }, []);

    return (
        <CourseLayout>
            <div css={container(illustration_color)}>
                <button css={closeBtn} onClick={onClose}>
                    <CloseIcon />
                </button>

                {route === "practice" && (
                    <QuizView
                        lessonId={lessonId as string}
                        questions={quiz}
                        onComplete={() => onRouteChange("completion")}
                        setIsLoading={(isLoading) => setIsLoading(isLoading)}
                    />
                )}
                {route === "completion" && (
                    <QuizCompletion onViewSummary={onShowSummary} onVisitNextLesson={onVisitNextLesson} />
                )}

                {route === "summary" && <QuizSummary />}

                {route !== "summary" && (
                    <div css={background}>
                        {renderBgIllustrations(
                            `${illustration_type || "moutain"}_${illustration_color || "violet"}`
                        )}
                    </div>
                )}

                {loading && (
                    <div css={spinnerOverlay}>
                        <Spinner />
                    </div>
                )}
            </div>
        </CourseLayout>
    );
};

const container = (color = "violet") => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
    min-height: calc(100vh - 8rem);
    width: 100%;
    background-color: var(--color-course-${color});
    border-radius: 1rem;
    padding: 1rem 4rem;
    color: #fff;
    position: relative;
    overflow: hidden;
    z-index: 3;

    h1 {
        margin-bottom: 1rem;
    }

    @media only screen and (max-width: 1245px) {
        padding: 8rem 2rem 1rem;
    }

    @media only screen and (max-width: 695px) {
        border-radius: 0;
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

const spinnerOverlay = css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default PracticePage;
