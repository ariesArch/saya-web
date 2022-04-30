import { css } from "@emotion/react";
import { formatDistance } from "date-fns";
import { useRouter } from "next/router";
import Script from "next/script";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import Button from "@/components/common/Button/Button.component";
import PostQuestion from "@/components/courses/PostQuestion/PostQuestion.component";
import VideoPlayer from "@/components/courses/VideoPlayer/VideoPlayer.component";
import { Lesson } from "@/interfaces/courses.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";
import CourseLayout from "@/layouts/CourseLayout";
// import LampChargeIcon from "@/public/icons/lamp-charge.svg";

const LessonPage = () => {
    const router = useRouter();
    const { courseId, lessonId } = router.query;
    const selectedCourse = useSelector((state: ReduxState) => state.coursesState.selectedCourse);
    const [selectedLesson, setSelectedLesson] = useState<Lesson>();

    useEffect(() => {
        if (!selectedCourse.id) return;
        if (!selectedCourse.is_enrolled) router.push(`/courses/${courseId}`);
    }, [courseId, router, selectedCourse.id, selectedCourse.is_enrolled]);

    useEffect(() => {
        if (!selectedCourse.id) return;

        selectedCourse.chapters.forEach(({ lessons }) => {
            const lesson = lessons.find(({ id }) => id === lessonId);
            if (lesson) {
                setSelectedLesson(lesson);
            }
            return;
        });
    }, [selectedCourse.id, lessonId]);

    return (
        <CourseLayout>
            <div css={container}>
                <div css={playerContainer}>
                    <VideoPlayer vdocipherId={selectedLesson?.vdocipher_id as string} />
                </div>

                {selectedLesson && (
                    <div css={lessonInfo}>
                        <div css={textsContainer}>
                            <span css={subtitle}>
                                Lecture: {formatDistance(0, selectedLesson?.total_length * 1000)}
                            </span>
                            <span css={title}>{selectedLesson?.title}</span>
                        </div>
                        {/* <Button css={button} variant="contained" color="success"> */}
                        {/*    <LampChargeIcon /> */}
                        {/*    Practice */}
                        {/* </Button> */}
                    </div>
                )}
            </div>

            {lessonId && (
                <div css={postQuestionContainer}>
                    <PostQuestion lessonId={lessonId as string} />
                </div>
            )}

            <Script src="https://player.vdocipher.com/playerAssets/1.6.10/vdo.js" />
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

export const lessonInfo = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 6rem;
`;

export const textsContainer = css`
    display: flex;
    flex-direction: column;
`;

export const button = css`
    padding: 0.6rem 1.2rem;
    font-size: 2rem;

    svg {
        width: 2rem;
        height: auto;
        margin-right: 0.5rem !important;
    }
`;

export const title = css`
    font-size: 2.4rem;
    font-weight: 600;

    @media only screen and (max-width: 992px) {
        font-size: 3rem;
    }
`;

export const subtitle = css`
    font-size: 1.5rem;

    @media only screen and (max-width: 992px) {
        font-size: 2rem;
    }
`;

export const postQuestionContainer = css`
    padding: 2rem 0;
    border-top: 1px solid #e5e5e5;
    margin-top: 2rem;

    @media only screen and (max-width: 692px) {
        margin: 2rem 1.5rem 0;
    }
`;

export default memo(LessonPage);
