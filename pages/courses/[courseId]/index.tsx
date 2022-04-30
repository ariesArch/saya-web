import { css } from "@emotion/react";
import { useRouter } from "next/router";
import Script from "next/script";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@/components/common/Button/Button.component";
import VideoPlayer from "@/components/courses/VideoPlayer/VideoPlayer.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import CourseLayout from "@/layouts/CourseLayout";
import PlaylistIcon from "@/public/icons/playlist.svg";
import { onCourseEnrollAsync } from "@/store/courses/courses.actions";

const CoursesPage = () => {
    const router = useRouter();
    const { courseId } = router.query;
    const selectedCourse = useSelector((state: ReduxState) => state.coursesState.selectedCourse);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const onEnroll = () => {
        setIsLoading(true);
        dispatch(onCourseEnrollAsync(courseId as string, onEnrollSuccess, onEnrollFailure));
    };

    const onEnrollSuccess = () => {
        setIsLoading(false);
        router.push(`/courses/${courseId}/learn/lesson/${selectedCourse?.chapters[0]?.lessons[0]?.id}`);
    };

    const onEnrollFailure = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        if (!selectedCourse.id) return;

        if (selectedCourse.is_enrolled) {
            router.push(`/courses/${courseId}/learn/lesson/${selectedCourse.chapters[0].lessons[0].id}`);
            return;
        }
    }, [courseId, dispatch, router, selectedCourse]);

    return (
        <CourseLayout>
            <div css={container}>
                <div css={playerContainer}>
                    <VideoPlayer vdocipherId={selectedCourse?.cover} />
                </div>

                {selectedCourse?.id && (
                    <div css={contents}>
                        <span css={title}>{selectedCourse?.title}</span>

                        <Button
                            css={button}
                            variant="contained"
                            color="course"
                            onClick={onEnroll}
                            loading={isLoading}
                            isDisabled={selectedCourse?.is_enrolled}>
                            <PlaylistIcon />
                            {selectedCourse?.is_enrolled ? "Enrolled" : "Free Enroll"}
                        </Button>
                    </div>
                )}
            </div>

            {!selectedCourse?.is_enrolled && (
                <Script src="https://player.vdocipher.com/playerAssets/1.6.10/vdo.js" />
            )}
        </CourseLayout>
    );
};

const container = css`
    display: flex;
    flex-direction: column;
`;

const playerContainer = css`
    width: 100%;
    background-color: #fff;
    border-radius: 1rem;
    min-height: 25rem;
`;

const contents = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 4rem;
    margin-top: 2rem;
`;

const title = css`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;

    @media only screen and (max-width: 992px) {
        font-size: 4rem;
    }

    @media only screen and (max-width: 695px) {
        font-size: 2.5rem;
    }
`;

const button = css`
    svg {
        width: 2rem;
        height: auto;
        margin-right: 0.5rem;
    }
`;

export default memo(CoursesPage);
