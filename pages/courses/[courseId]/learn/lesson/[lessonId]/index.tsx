import { css } from "@emotion/react";
import { formatDistance } from "date-fns";
import { useRouter } from "next/router";
import Script from "next/script";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import VideoPlayer from "@/components/courses/VideoPlayer/VideoPlayer.component";
import { Lesson } from "@/interfaces/courses.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";
import CourseLayout from "@/layouts/CourseLayout";

const LessonPage = () => {
    const router = useRouter();
    const { lessonId } = router.query;
    const selectedCourse = useSelector((state: ReduxState) => state.coursesState.selectedCourse);
    const [selectedLesson, setSelectedLesson] = useState<Lesson>();

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
                        <span css={subtitle}>
                            Lecture: {formatDistance(0, selectedLesson?.total_length * 1000)}
                        </span>
                        <span css={title}>{selectedLesson?.title}</span>
                    </div>
                )}
            </div>

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
    padding: 1.5rem 2rem;
    min-height: 45rem;
`;

export const lessonInfo = css`
    display: flex;
    flex-direction: column;
    padding: 1rem 4rem;
`;

export const title = css`
    font-size: 2.4rem;
    font-weight: 600;
`;

export const subtitle = css`
    font-size: 1.5rem;
`;

export default memo(LessonPage);
