import { FC, HTMLAttributes, ReactNode } from "react";

import { Chapter, Lesson, LessonStatus } from "@/interfaces/courses.interfaces";
import CheckCircleIcon from "@/public/icons/check-circle.svg";
import LockCircleIcon from "@/public/icons/lock-circle.svg";
import TickCircleIcon from "@/public/icons/tick-circle.svg";
import VideoCircleOutlinedIcon from "@/public/icons/video-circle-outlined.svg";

import * as styles from "./SectionCard.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
    chapter: Chapter;
    index: number;
    currentLessonId: string;
}

const SectionCard: FC<Props> = (props) => {
    const { chapter, index, currentLessonId, ...rest } = props;

    const status = ({ id, is_lock, mark_as_done }: Lesson): LessonStatus => {
        let status: LessonStatus = "incomplete";

        if (id === currentLessonId) {
            status = "playing";
            return status;
        }

        if (is_lock) {
            status = "locked";
            return status;
        }

        if (mark_as_done) {
            status = "done";

            if (id === currentLessonId) {
                status = "playing";
            }

            return status;
        }

        return status;
    };
    return (
        <div css={styles.sectionCard} {...rest}>
            <span css={styles.chapter}>
                {chapter.lessons.find(({ id }) => id === currentLessonId) && "Playing"} Chapter {index + 1}
            </span>
            <span css={styles.title}>{chapter.title}</span>

            <div css={styles.iconsContainer}>
                {chapter.lessons.map((lesson) => (
                    <span key={lesson.id} css={styles.statusIcon(status(lesson))}>
                        {statusIcons[status(lesson)]}
                    </span>
                ))}
            </div>
        </div>
    );
};

const statusIcons: Record<LessonStatus, ReactNode> = {
    playing: <VideoCircleOutlinedIcon />,
    locked: <LockCircleIcon />,
    done: <TickCircleIcon />,
    incomplete: <CheckCircleIcon />,
};

export default SectionCard;
