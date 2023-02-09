import { css } from "@emotion/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import LevelTestStart from "@/components/level-test/LevelTestStart/LevelTestStart.component";
import LevelTestQuizView from "@/components/level-test/QuizView/QuizView.component";
import LevelTestSidePanel from "@/components/level-test/SidePanel/SidePanel.component";
import LevelTestSummary from "@/components/level-test/Summary/Summary.component";
import { ReduxState, StudentLevel } from "@/interfaces/redux.interfaces";
import CourseLayout from "@/layouts/CourseLayout";
import CloseIcon from "@/public/icons/close.svg";
import { fetchLevelTestQuestionsAsync } from "@/store/level-test/level-test.actions";

const MountainLightGreen = dynamic(() => import("@/public/images/quiz-bg_tree_light-green.svg"));

const LevelTestPage = () => {
    const router = useRouter();
    const { student_level } = useSelector((state: ReduxState) => state.userState.userData);
    const dispatch = useDispatch();

    const [route, setRoute] = useState<"start" | "practice" | "summary">("start");

    const onClose = () => {
        router.push("/home/explore");
    };

    // useEffect(() => {
    //     if (student_level && student_level !== "-") {
    //         setRoute("summary");
    //     }
    // }, [student_level]);

    // TODO - improve with queries
    const onRetake = useCallback(() => {
        setRoute("start");

        dispatch(fetchLevelTestQuestionsAsync("A2"));
    }, [dispatch]);

    return (
        <CourseLayout sidePanel={<LevelTestSidePanel />}>
            <div css={container}>
                <button css={closeBtn} onClick={onClose}>
                    <CloseIcon />
                </button>
                {route === "start" && <LevelTestStart onStart={() => setRoute("practice")} />}
                {route === "practice" && <LevelTestQuizView onShowSummary={() => setRoute("summary")} />}
                {route === "summary" && student_level && (
                    <LevelTestSummary level={student_level as StudentLevel} onRetake={onRetake} />
                )}
                <div css={background}>
                    <MountainLightGreen />
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
    background-color: var(--color-course-light-green);
    border-radius: 1rem;
    padding: 1rem 4rem;
    color: #fff;
    position: relative;
    overflow: hidden;
    z-index: 3;
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

export default LevelTestPage;
