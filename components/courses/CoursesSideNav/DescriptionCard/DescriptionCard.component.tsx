import "react-loading-skeleton/dist/skeleton.css";

import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

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
    const {
        id,
        title,
        level,
        teacher,
        is_enrolled,
        chapters,
        course_total_finished_length,
        course_total_length,
        illustration_color,
    } = selectedCourse;
    const dispatch = useDispatch();
    const isTablet = useMediaQuery({ maxWidth: 992 });
    const [isLoading, setIsLoading] = useState(false);
    const progress = Math.floor((course_total_finished_length / course_total_length) * 100);

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
        <div css={styles.card(!!id, illustration_color)}>
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
                    <Avatar src={teacher?.photo} hasBorder={false} size={isTablet ? "7rem" : undefined} />
                ) : (
                    <Skeleton
                        width={isTablet ? "10rem" : "6rem"}
                        height={isTablet ? "10rem" : "6rem"}
                        circle
                    />
                )}
            </div>

            {is_enrolled ? (
                <div css={styles.progressContainer}>
                    <span>{progress}% Learned</span>
                    <ProgressBar progress={progress} color="white" />
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
