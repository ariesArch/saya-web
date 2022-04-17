import "react-loading-skeleton/dist/skeleton.css";

import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@/components/common/Avatar/Avatar.component";
import ProgressBar from "@/components/common/ProgressBar/ProgressBar.component";
import { levelIcons, Levels } from "@/components/common/sharedData";
import { ReduxState } from "@/interfaces/redux.interfaces";
import PlaylistIcon from "@/public/icons/playlist.svg";
import { onCourseEnrollAsync } from "@/store/courses/courses.actions";

import * as styles from "./DescriptionCard.styles";

const DescriptionCard = () => {
    const router = useRouter();
    const selectedCourse = useSelector((state: ReduxState) => state.coursesState.selectedCourse);
    const { id, title, level, teacher, is_enrolled, chapters, course_total_finished_length } = selectedCourse;
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const onEnroll = () => {
        setIsLoading(true);
        dispatch(
            onCourseEnrollAsync(
                id,
                () => {
                    router.push(`/courses/${id}/learn/lesson/${chapters[0]?.lessons[0]?.id}`);
                },
                () => setIsLoading(false)
            )
        );
    };

    return (
        <div css={styles.card(!!id)}>
            <div css={styles.mainContents}>
                <div css={styles.textsContainer}>
                    <span css={styles.title}>{title || <Skeleton width="20rem" />}</span>
                    <div css={styles.info}>
                        {level ? (
                            <Fragment>
                                {levelIcons[level?.toLowerCase() as Levels] || levelIcons.preintermediate}
                                {level} . Tr. {teacher?.name}
                            </Fragment>
                        ) : (
                            <Skeleton width="20rem" />
                        )}
                    </div>
                </div>

                {teacher?.photo ? (
                    <Avatar src={teacher?.photo} hasBorder={false} />
                ) : (
                    <Skeleton width="6rem" height="6rem" circle />
                )}
            </div>

            {is_enrolled ? (
                <div css={styles.progressContainer}>
                    <span>{course_total_finished_length}% Learned</span>
                    <ProgressBar progress={course_total_finished_length} color="white" />
                </div>
            ) : (
                <button css={styles.button} onClick={onEnroll} disabled={isLoading}>
                    {isLoading ? (
                        "Loading . . . "
                    ) : (
                        <Fragment>
                            <PlaylistIcon /> Free enroll
                        </Fragment>
                    )}
                </button>
            )}
        </div>
    );
};

export default DescriptionCard;
